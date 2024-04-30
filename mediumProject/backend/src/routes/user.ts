import { Hono } from "hono"
import { sign } from "hono/jwt"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { userSignupSchema, userSigninSchema } from "@rizkitaufik/common"

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()


user.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()

  // hashing password 
  const passwordData = new TextEncoder().encode(body.password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", passwordData)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')
  const verifSignup = userSignupSchema.safeParse(body)
  if (verifSignup.success) {
    const dataUser = await prisma.user.findUnique({
      where: { email: body.email }
    })

    if (dataUser) {
      return c.json({
        msg: 'user telah terdaftar'
      })
    } else {
      try {
        const user = await prisma.user.create({
          data: {
            email: body.email,
            name: body.name,
            password: hashedPassword
          }
        })

        const payload = {
          id: user.id,
          name: body.name,
          email: body.email
        }

        const jwtPassword = c.env.JWT_SECRET

        const token = await sign(payload, jwtPassword)
        return c.json({
          msg: 'sign up berhasil',
          token: token
        })
      } catch (e) {
        return c.json({
          msg: e
        })
      }
    }
  } else {
    return c.json({
      msg: verifSignup.error.errors
    })
  }
})

user.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const verifSignin = userSigninSchema.safeParse(body)

  try {
    if (verifSignin.success) {
      const dataUser = await prisma.user.findUnique({
        where: {
          email: body.email
        }
      })
      if (dataUser) {
        // hashing password untuk dicompare dengan yang ada didatabase
        const passwordData = new TextEncoder().encode(body.password)
        const hashBuffer = await crypto.subtle.digest("SHA-256", passwordData)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const hashedPasswordLogin = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')

        if (dataUser?.password == hashedPasswordLogin) {
          const payload = {
            id: dataUser?.id,
            name: dataUser?.name,
            email: dataUser?.email
          }

          const jwtPassword = c.env.JWT_SECRET

          const token = await sign(payload, jwtPassword)

          return c.json({
            msg: 'sign in berhasil',
            token: token
          })
        } else {
          return c.json({
            msg: 'password salah'
          })
        }
      } else {
        return c.json({
          msg: 'email salah'
        })
      }
    }
  } catch (e) {
    return c.json({
      msg: e
    })
  }
})

export default user
