import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()

// middleware
app.use("/api/v1/blog/*", async (c, next) => {
  const headers = c.req.header("Authorization")
  const token = headers?.split(" ")[1]
  if (!token) {
    c.json({
      msg: 'unauthorize'
    })
  } else {
    const jwtPassword = c.env.JWT_SECRET
    const decode: any = await verify(token, jwtPassword)
    const id: any = decode.id
    if (!id) {
      c.json({
        msg: 'unauthorize'
      })
    } else {
      c.set('userId', id)  // kayak req.decode = decode
      await next()
    }
  }
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()

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
          password: body.password
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
})

app.post("/api/v1/user/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()

  try {
    const dataUser = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })
    if (dataUser) {
      if (dataUser?.password == body.password) {
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
  } catch (e) {
    return c.json({
      msg: e
    })
  }
})

app.post("/api/v1/blog", (c) => {
  return c.text("blog page")
})

app.put("/api/v1/blog", (c) => {
  return c.text("edit blog page")
})

app.get("/api/v1/blog/:id", (c) => {
  const id = c.get('userId')
  console.log(id)
  return c.text(`blog ${id}`)
})

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("blog bulk page")
})

export default app
