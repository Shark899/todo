import express from 'express'

const router = express.Router()

import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/Todo.js'

router.route('/todo').get(getTodos).post(createTodo)
router.route('/todo/:id').get(getTodo).patch(updateTodo).delete(deleteTodo)

export default router
