import { Router } from "express";
import { addProject, deleteProject, updateProject, viewProjects } from "../controllers/ProjectController.js";

const projectRouter = Router()

projectRouter.post('/add-project',addProject)

projectRouter.get('/all-projects',viewProjects)

projectRouter.put("/update-project/:id", updateProject); 

projectRouter.delete("/delete-project/:id", deleteProject);


export default projectRouter;