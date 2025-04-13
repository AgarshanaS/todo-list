const mongoose =require('mongoose');
const todoSchema = new mongoose.Schema({
  title:String,
  description:String,
}, {
  timestamps: true
});
const todoModel = mongoose.model(`todo`,todoSchema);
async function createTodo(title,description) {
  const todo =await todomodel.create(
    {
      title,
      description,    
    });
    return todo;
  }
  
  module.exports = {
      createTodo,
  }