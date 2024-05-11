import { Hono } from 'hono'
import index from './routes/index'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('/api/v1/*',cors())
// main 
app.route("/api/v1", index)

export default app
