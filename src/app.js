const express = require('express');
require("./db/mongo")
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is live!');
});

app.use('/todo', require('./routes/todo'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running in Port ${PORT}`);
});
