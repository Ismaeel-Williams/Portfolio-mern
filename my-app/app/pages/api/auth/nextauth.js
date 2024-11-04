import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";

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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your-email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const client = await clientPromise;
        const db = client.db("portfolio");
        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) {
          throw new Error("UserNotFound"); // Custom error for user not found
        }

        if (user.password !== credentials.password) {
          throw new Error("IncorrectPassword"); // Custom error for incorrect password
        }

        return { id: user._id, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/SignInPage",
    error: "/SignInPage", // Redirect to the same sign-in page on error
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl + "/pages/confirmPage";
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
