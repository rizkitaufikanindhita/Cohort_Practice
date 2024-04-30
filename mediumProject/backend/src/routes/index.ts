import { Hono } from "hono";
import user from './user'
import blog from './blog'

const index = new Hono

index.route("/user", user)
index.route("/blog", blog)

export default index

