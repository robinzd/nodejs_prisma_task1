import express,{Request, Response} from "express"
import { UserRegistration } from "../middleware/UserRegistration"
const router = express.Router();
router.post('/Userregistration', async (req: Request, res: Response) => {
    UserRegistration(req,res)
})
// router.post('/sample2', async (req: Request, res: Response) => {
//     SamplePage(req,res)
// })
export {router};
