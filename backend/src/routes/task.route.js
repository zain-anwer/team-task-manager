import express from 'express'
import {getTaskController, getTasksController, updateTaskController, createTaskController, deleteTaskController} from './../controllers/task.controller.js'

const router = express.Router()

router.get("/",getTasksController)
router.get("/:id",getTaskController)
router.post("/:teamId",createTaskController)
router.patch("/:id",updateTaskController)
router.delete("/:id",deleteTaskController)

export default router