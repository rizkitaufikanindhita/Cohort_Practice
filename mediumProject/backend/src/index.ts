import { Hono } from 'hono'
import index from './routes/index'

const app = new Hono()

// main 
app.route("/api/v1", index)

export default app
