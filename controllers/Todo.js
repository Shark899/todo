import Todo from '../models/Todo.js'

export const getTodos = async (req, res) => {
  const data = await Todo.find({})
  res.status(200).json({ data })
}
export const createTodo = async (req, res) => {
  const data = await Todo.create(req.body)
  res.status(202).json(data)
}
export const updateTodo = async (req, res) => {
  const id = req.params.id
  const body = req.body
  const data = await Todo.findByIdAndUpdate(id, body)
  res.status(202).json(data)
}
export const getTodo = async (req, res) => {
  const id = req.params.id
  const data = await Todo.findById(id)
  res.status(200).json(data)
}
export const deleteTodo = async (req, res) => {
  const id = req.params.id
  const data = await Todo.findByIdAndDelete(id)
  res.status(204).json({ message: `Item with id ${id} deleted` })
}
