// app/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signIn", // Define the path to your sign-in page
    // Optional: you can also define custom pages for errors, etc.
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/confirm"; // Redirect to confirmation page after sign in
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
