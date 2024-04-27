import express from 'express'
import cors from 'cors'

const port = 3300
const app = express()

app.use(cors())

const todos: object[] = [
  { no: 1, todos: 'todo 1', status: 'process' },
  { no: 2, todos: 'todo 2', status: 'process' },
  { no: 3, todos: 'todo 3', status: 'process' },
  { no: 4, todos: 'todo 4', status: 'process' },
  { no: 5, todos: 'todo 5', status: 'process' }
]

app.get('/todos', (_req, res) => {
  let listTodo = []
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      listTodo.push(todos[i])
    }
  }
  res.json({
    msg: listTodo
  })
})

app.listen(port, () => {
  console.log(`server up at ${port}`)
})

