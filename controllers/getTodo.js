// import model

const Todo = require("../models/Todo");

// define rote controller
exports.getTodo = async (req, res) => {
  try {
    // fetch all todo item
    const todos = await Todo.find({});
    
    // response
    res.status(200)
    .json({
        success:true,
        data:todos,
        message:"Entire Todo Data is fetch",
    });
  } catch (err) {
    console.error(err);
    res.status(500)
    .json({
        success:true,
        error:err.message,
        message:"Server Error"
        
    });
  }
};
