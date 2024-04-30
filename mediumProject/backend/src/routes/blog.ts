import { Hono } from "hono"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { verify } from "hono/jwt"
import { blogPostSchema, blogEditSchema } from "@rizkitaufik/common"

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()

// middleware
blog.use("/*", async (c, next) => {
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

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const dataPost = await prisma.post.findMany({
    where: { published: true },
    select: {
      title: true,
      content: true,
      published: true,
      authorId: true
    }
  })

  return c.json({
    msg: dataPost
  })
})

blog.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const id = c.req.param("id")

  const postData = await prisma.post.findFirst({
    where: { id: id },
    select: {
      title: true,
      content: true,
      published: true,
      authorId: true
    }
  })

  return c.json({
    msg: postData
  })
})

blog.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const dataPost = await c.req.json()
  // title     String  
  // content   String
  // published Boolean @default(false)
  // authorId  string

  const id = c.get("userId")

  const verifPost = blogPostSchema.safeParse(dataPost)
  if (verifPost.success) {
    await prisma.post.create({
      data: {
        title: dataPost.title,
        content: dataPost.content,
        authorId: id
      }
    })
    return c.json({
      msg: "post berhasil dibuat"
    })
  } else {
    return c.json({
      msg: verifPost.error.errors
    })
  }


})

blog.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate())

  const idPost = c.req.param('id')

  const body = await c.req.json()

  const verifEdit = blogEditSchema.safeParse(body)
  if (verifEdit.success) {
    await prisma.post.update({
      where: { id: idPost },
      data: {
        title: body.title,
        content: body.content,
        published: body.published
      }
    })

    return c.json({
      msg: "berhasil diupdate"
    })
  } else {
    return c.json({
      msg: verifEdit.error.errors
    })
  }
})

export default blog




