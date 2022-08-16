import express,{Request, Response} from "express"
import { UserRegistration } from "../middleware/UserRegistration"
import { UserLogin } from "../middleware/UserLogin1"
import {  UserUpdate } from "../middleware/UpdateUsers"
import {  DeleteUser } from "../middleware/DeleteUser"
const router = express.Router();
router.post('/Userregistration', async (req: Request, res: Response) => {
    UserRegistration(req,res)
})
router.post('/Userlogin', async (req: Request, res: Response) => {
    UserLogin(req,res)
})
router.post('/userupdate', async (req: Request, res: Response) => {
    UserUpdate(req,res)
})
router.delete('/deleteuser', async (req: Request, res: Response) => {
    DeleteUser(req,res)
})
// router.post('/sample2', async (req: Request, res: Response) => {
//     SamplePage(req,res)
// })
export {router};
