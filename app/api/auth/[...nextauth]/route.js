import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";

export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        // Connect to the database
        await connectDb();

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          // User doesn't exist, create a new user in the database
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      console.log(dbUser)

      // if (dbUser) {
      //   session.user.name = dbUser.name
      // }
      return session
    },
  }
})

export { authOptions as GET, authOptions as POST }