import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"

// NEXT_AUTH dibuat tersendiri dari route.ts yang di api/auth karena agar saat menggunakan getServerSession datanya sama dengan client (useSession)
export const NEXT_AUTH = {
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {label:"username", type:"text", placeholder:"John Doe"},
        password: {label:"password", type:"password", placeholder:"*********"},
        email: {label:"email", type:"text", placeholder:"johndoe@gmail.com"}
      },
      async authorize(credentials: any){
        // logicnya disini
        // credentials ini isinya ada csrfToken
        // diambil username dan passwordnya dari credentials
        // lalu cek diprisma 
        // dst
        const username = credentials.username
        const email = credentials.email
        return {
          // return ini itu user (untuk keperluan callbacks)
          // wajib ada id
          id:"user1",
          name:username,
          email:email
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  // secret ini untuk keperluan jwt
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks ini intinya menambahkan data pada contoh menambahkan data pada jwt dan session
  callbacks: {
    jwt: async({ token, user }: any) => {
      if(user){
        token.role = "admin"
        token.idUser = user.id
      }
      return token
    },
    session: async({ session, token}: any) => {
      if(session && session.user){
        session.user.message = token.role
        session.user.id = token.idUser
      }
      return session
    }
  },
  pages: {
    signIn: "/signin" 
  }
}
