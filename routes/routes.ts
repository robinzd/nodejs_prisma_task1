import express,{Request, Response} from "express"
import { UserRegistration } from "../middleware/UserRegistration"
import { UserLogin } from "../middleware/UserLogin1"
const router = express.Router();
router.post('/Userregistration', async (req: Request, res: Response) => {
    UserRegistration(req,res)
})
router.post('/Userlogin', async (req: Request, res: Response) => {
    UserLogin(req,res)
})
// router.post('/sample2', async (req: Request, res: Response) => {
//     SamplePage(req,res)
// })
export {router};
