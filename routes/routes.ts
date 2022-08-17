import express,{Request, Response} from "express"
import { UserRegistration } from "../middleware/UserRegistration"
import { UserLogin } from "../middleware/UserLogin1"
import {  UserUpdate } from "../middleware/UpdateUsers"
import {  DeleteUser } from "../middleware/DeleteUser"
import {  ReadUser } from "../middleware/ReadUser"
import {  ProductDetails } from "../middleware/ProductDetails"
import {  ProductDetailsview } from "../middleware/viewproductdetails"

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
router.get('/readuser', async (req: Request, res: Response) => {
    ReadUser(req,res)
})
 router.get('/productdetails', async (req: Request, res: Response) => {
     ProductDetails(req,res)
 })
 router.get('/viewdetails', async (req: Request, res: Response) => {
    ProductDetailsview (req,res)
})

export {router};
