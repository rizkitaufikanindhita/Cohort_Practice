import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "@repo/db/database"

export const NEXT_AUTH = {
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label:"email", type:"text", placeholder:"Johndoe@email.com"},
        name: {label:"name", type:"text", placeholder:"John Doe"},
        number: {label:"phone number", type:"number", placeholder:"123123123"},
        password: {label:"password", type:"password",placeholder:"*********"}
      },
      async authorize(credentials: any){
        // logicnya disini
        // credentials ini isinya ada csrfToken
        // diambil username dan passwordnya dari credentials
        // lalu cek diprisma
        // dst
        const hashPassword = await bcrypt.hash(credentials.password, 10)
        const existingUser = await prisma.user.findFirst({
          where:{
            number: credentials.number
          }
        })

        if(existingUser){
          const validationPassword = await bcrypt.compare(credentials.password, existingUser.password)
          if(validationPassword){
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email
            }
          } else {
            return null
          }
        } else {
          const user = await prisma.user.create({
            data:{
              email: credentials.email,
              name: credentials.name,
              number: credentials.number,
              password: hashPassword
            }
          })
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email
          }
        }
      }
    }),
  ],
  // secret ini untuk keperluan jwt
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks ini intinya menambahkan data pada contoh menambahkan data pada jwt dan session
  // callbacks: {
  //   jwt: async({ token, user }: any) => {
  //     if(user){
  //       token.role = "admin"
  //       token.idUser = user.id
  //     }
  //     return token
  //   },
  //   session: async({ session, token}: any) => {
  //     if(session && session.user){
  //       session.user.message = token.role
  //       session.user.id = token.idUser
  //     }
  //     return session
  //   }
  // },
  pages: {
    signIn: "/signin"
  }
}
