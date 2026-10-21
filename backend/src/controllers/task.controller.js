export const getTaskController = (req,res) => {
    res.status(200).json({message:'single task retreival endpoint reached'})
}
export const getTasksController = (req,res) => {
     res.status(200).json({message:'all user task retrieval endpoint reached'})
}
export const createTaskController = (req,res) => {}
export const updateTaskController = (req,res) => {}
export const deleteTaskController = (req,res) => {}