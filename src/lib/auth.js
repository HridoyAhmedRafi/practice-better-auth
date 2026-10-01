import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const client = new MongoClient(process.env.BETTER_AUTH_MONGODB_URI);
const db = client.db("practice-bette-auth");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      void resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify your email address",
        html: `Click the link to verify your email: ${url}`,
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 60 * 10,
  },

  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_CLIENT_ID,
      clientSecret: process.env.BETTER_AUTH_CLIENT_SECRET,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});
