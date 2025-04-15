const express = require('express');
const { createTODO } = require('../models/todo');
const { deleteTODO } = require('../models/todo');
const { updateTODO } = require('../models/todo');
const { pageTODO } = require('../models/todo');
const router = express.Router();

router.post('/', async (req,res) => {
    // console.log({body: req.body});
    const {title,description} =req.body;
    const todo=await createTODO(title,description);
    res.send(todo)
});
router.delete('/:id',async(req,res)=>{
    const _id =req.params.id;
    const resp = await deleteTODO(_id);
    res.send(resp);
});
router.put('/:id',async(req,res)=>{
    const {title,description} =req.body;
    const _id =req.params.id;
    const todo=await updateTODO(_id,title,description);
    res.send(todo);
});
router.get('/',async(req,res)=>{
    const {page,limit} =req.body;
    const todo=await pageTODO(page,limit);
    res.send(todo);
});

// User Authentication


module.exports = router;