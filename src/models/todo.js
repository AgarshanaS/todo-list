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
module.exports = {
  createTODO,
  deleteTODO
}