import express from 'express'
import { getPersonalInfo, updatePersonalInfo } from '../controllers/personalInfoController.js'

const personalInfoRouter = express.Router()

personalInfoRouter.get('/',getPersonalInfo)
personalInfoRouter.put('/:id',updatePersonalInfo)

export default personalInfoRouter;