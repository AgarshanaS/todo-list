const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
}, {
  timestamps: true
});
const todoModel = mongoose.model(`todo`, todoSchema);

const userSchema = new mongoose.Schema({
  username: String,
  pass: String,
}, {
  timestamps: true
});
const userModel = mongoose.model(`account`, userSchema);

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
async function createUser(username, pass) {
  const user = await userModel.create(
    {
      username,
      pass,
    });
  return user;
}

async function loginUser(user, passwd) {
  const check = await userModel.find({
    username: user,
    pass : passwd
  })
  if (check.length > 0){
    return true;
  }
  else{
    return false;
  }
}

module.exports = {
  createTODO,
  deleteTODO,
  updateTODO,
  pageTODO,
  createUser,
  loginUser
}