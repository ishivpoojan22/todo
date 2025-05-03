// import model

const Todo = require("../models/Todo");

// defien route handle

exports.createTodo = async(req, res) => {
    try{
        // extract title and description from request body
        const {title, description} = req.body;
        const response = await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry creates successfully"

            }
           
        );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:true,
                data:"internal dikkat server kii",
                message:err.message,
            }
        )

    }
}