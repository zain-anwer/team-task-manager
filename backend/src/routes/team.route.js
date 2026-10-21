import express from 'express'
import {getTeamController, getTeamsController, createTeamController, deleteTeamController, updateTeamController, getMemberController, addMemberController, removeMemberController} from './../controllers/team.controller.js'

const router = express.Router()

/* team crud operations */
router.get("/",getTeamsController)
router.get("/:id",getTeamController)
router.post("/",createTeamController)
router.patch("/",updateTeamController)
router.delete("/:id",deleteTeamController)

/* team member retrieval, addition, and removal */
router.get("/:id/member",getMemberController)
router.post("/:id/member",addMemberController)
router.delete("/:id/member",removeMemberController)

export default router