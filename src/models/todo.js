const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
}, {
  timestamps: true
});
const todoModel = mongoose.model(`todo`, todoSchema);
async function createTODO(title, description) {
  const todo = await todoModel.create(
    {
      title,
      description,
    });
  return todo;
}
async function deleteTODO(_id) {
  const deleteResp = await todoModel.deleteOne({ _id });
  return deleteResp;
}

async function updateTODO(_id,title,description){
  const updated = await todoModel.updateOne({
    _id,
  },{
    title,
    description
  });
  return updated;
}

async function pageTODO(page,limit){
  const skip = (page - 1) * limit;
  const todos = await todoModel.find().skip(skip).limit(limit);
  return todos;
}

//User Authentication


module.exports = {
  createTODO,
  deleteTODO,
  updateTODO,
  pageTODO
}