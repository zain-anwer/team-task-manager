export const getTeamController = (req,res) => {
    res.status(200).json({message:'single team retreival endpoint reached'})
}
export const getTeamsController = (req,res) => {
     res.status(200).json({message:'all user teams retrieval endpoint reached'})
}
export const createTeamController = (req,res) => {}
export const updateTeamController = (req,res) => {}
export const deleteTeamController = (req,res) => {}

export const getMemberController = (req,res) => {}
export const addMemberController = (req,res) => {}
export const removeMemberController = (req,res) => {}