import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

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
        // Connect to the database using mongoose
        const client = await mongoose.connect();


      }
    }
  }
})

export {authOptions as GET, authOptions as POST}