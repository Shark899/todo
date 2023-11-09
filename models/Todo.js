import mongoose from 'mongoose'

const ToDoSchema = mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  is_checked: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model('ToDo', ToDoSchema)
