import NextAuth, { NextAuthOptions, Session, User, type DefaultSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      id: string,
      role: string,
      name: string,
      description?: string,
      contactNumber: string,
      isActive: boolean,
      createdAt: Date,
      updatedAt: Date,
    } & DefaultSession['user'];
  }

  interface User {
    id: string,
    role: string,
    name: string,
    description?: string,
    contactNumber: string,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
  }
}

const BACKEND_URL = process.env.BACKEND_URL;

export const authOptions: NextAuthOptions = {
  strategy: "jwt",
  secret: process.env.NEXTAUTH_SECRET || "",
  
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      
      async authorize(credentials, req) {

        const payload = req.body;

        if (payload?.email == "" || payload?.password == "") {
          console.log("All field are required");
          return null;
        }

        try {
          const response = await fetch(`${BACKEND_URL}/users/login`, {
            method: "POST",
            body: JSON.stringify({ emailId: payload?.email, password:payload?.password }),
            headers: { "Content-Type": "application/json" },
          });


          if (!response.ok) {
            throw new Error("Invalid credentials or server error");
          }

          const { data } = await response.json();

          if (!data?.user) {
            throw new Error("Invalid credentials");
          }

          console.log(data);

          return data.user;
        } catch (error) {
          console.error(error);
          throw new Error("An error occurred during login");
        }
      }
    }),
  ],

  callbacks: {
    
    async jwt({ session, token, user, trigger }) {

      if (trigger === 'update') {
        token.image = session.user.image
        token.id = session.user.id
        token.name = session.user.name
        token.role = session.user.role
      }
      if (user) {
        return {
          ...token,
          image: user.profileUrl,
          id: user.userId,
          name: `${user.firstName} ${user.lastName}`,
          role: user.type,
          email: user.emailId,
          contactNumber: user.contactNumber,
          isActive: user.isActive,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          
        };
      }
      return token;
    },

    async session({ user, token, session }) {
      return {
        ...session,
        user: {
          ...session.user,
          image: token.image,
          id: token.id,
          name: token.name,
          role: token.role,


        },
      };
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
