import express, { Request, Response } from "express";
import { UserRegistration } from "../middleware/UserRegistration";
import { UserLogin } from "../middleware/UserLogin1";
import { UserUpdate } from "../middleware/UpdateUsers";
import { DeleteUser } from "../middleware/DeleteUser";
import { ReadUser } from "../middleware/ReadUser";
import { ProductDetails } from "../middleware/ProductDetails";
import { ProductDetailsview } from "../middleware/viewproductdetails";
import { FilterProductDetails } from "../middleware/ProductFilter";
import { FilterOrder } from "../middleware/orderby";
import { CustomerAge } from "../middleware/aggregation";
import { IdGroupBy } from "../middleware/groupby";
import { Count } from "../middleware/count";
import { Distinct } from "../middleware/distinct";
import { Search } from "../middleware/search";
import { UpdateProductDetails } from "../middleware/updateproductdetails";
import { Readstatus } from "../middleware/viewproductstatus";
import { Products } from "../middleware/get_products";
import { AddCart } from "../middleware/add_cart";
import { GetCart } from "../middleware/get_cart";
import { UpdateCart } from "../middleware/update_cart";
import { DeleteProducts } from "../middleware/delete_products";
import { CartCount } from "../middleware/cart_count";
import { SaveLater } from "../middleware/save_later";
import { GetSaveLater } from "../middleware/get_savelater";
import { UpdateSaveLater } from "../middleware/edit_savelater";
import { SaveLaterToCart } from "../middleware/savelater_cart";
import { DeleteSavelater } from "../middleware/delete_savelater";
import { GetCartPrice } from "../middleware/get_fullamount";
import { AddAddress } from "../middleware/add_address";
import { GetAddress } from "../middleware/get_address";
import { AppendAddress } from "../middleware/append_address";
import { GetSaveAddress } from "../middleware/get_save_address";
import { GetCartFinalPrice } from "../middleware/get_finalprice";
import { GetCreditBalace } from "../middleware/credit_balace"; 
import { GetCredit } from "../middleware/get_credit_amount";
import { GetTeachers } from "../middleware/get_student_feedback";
import { GetQusetion1 } from "../middleware/question_1";
import { GetQusetion2 } from "../middleware/question2";
import { GetQusetion3 } from "../middleware/question3";
import { GetQusetion4 } from "../middleware/question4";
import { FeedbackList } from "../middleware/final_feedback_list";
import { GetFeedbackList } from "../middleware/get_feedbacklist";
import { UploadImage } from "../middleware/upload_picture";
import { GetUploadImage } from "../middleware/get_uploadpic";
import { WebUploadImage } from "../middleware/save_webcampicture";

const router = express.Router();
router.post("/userregistration", async (req: Request, res: Response) => {
  UserRegistration(req, res);
});
router.post("/Userlogin", async (req: Request, res: Response) => {
  UserLogin(req, res);
});
router.put("/userupdate", async (req: Request, res: Response) => {
  UserUpdate(req, res);
});
router.delete("/deleteuser", async (req: Request, res: Response) => {
  DeleteUser(req, res);
});
router.get("/readuser", async (req: Request, res: Response) => {
  ReadUser(req, res);
});
router.get("/productdetails", async (req: Request, res: Response) => {
  ProductDetails(req, res);
});
router.get("/viewdetails", async (req: Request, res: Response) => {
  ProductDetailsview(req, res);
});
router.get("/filterproducts", async (req: Request, res: Response) => {
  FilterProductDetails(req, res);
});

router.get("/orderby", async (req: Request, res: Response) => {
  FilterOrder(req, res);
});

router.get("/aggregation", async (req: Request, res: Response) => {
  CustomerAge(req, res);
});

router.get("/group", async (req: Request, res: Response) => {
  IdGroupBy(req, res);
});

router.get("/count", async (req: Request, res: Response) => {
  Count(req, res);
});

router.get("/distinct", async (req: Request, res: Response) => {
  Distinct(req, res);
});

router.get("/search", async (req: Request, res: Response) => {
  Search(req, res);
});

router.put("/updateproductdetails", async (req: Request, res: Response) => {
  UpdateProductDetails(req, res);
});

router.get("/productstatus", async (req: Request, res: Response) => {
  Readstatus(req, res);
});

router.get("/getproducts", async (req: Request, res: Response) => {
  Products(req, res);
});

router.post("/addtocart", async (req: Request, res: Response) => {
  AddCart(req, res);
});

router.get("/getcart", async (req: Request, res: Response) => {
  GetCart(req, res);
});

router.put("/updatecart", async (req: Request, res: Response) => {
  UpdateCart(req, res);
});

router.delete("/deleteproducts", async (req: Request, res: Response) => {
  DeleteProducts(req, res);
});

router.get("/cartcount", async (req: Request, res: Response) => {
  CartCount(req, res);
});

router.post("/savelater", async (req: Request, res: Response) => {
  SaveLater(req, res);
});

router.get("/getsavelater", async (req: Request, res: Response) => {
  GetSaveLater(req, res);
});

router.put("/updatesavelater", async (req: Request, res: Response) => {
  UpdateSaveLater(req, res);
});

router.post("/savelatertocart", async (req: Request, res: Response) => {
  SaveLaterToCart(req, res);
});

router.delete("/deletesavelater", async (req: Request, res: Response) => {
  DeleteSavelater(req, res);
});

router.get("/getcartprice", async (req: Request, res: Response) => {
  GetCartPrice(req, res);
});

router.post("/addaddress", async (req: Request, res: Response) => {
  AddAddress(req, res);
});

router.get("/getaddress", async (req: Request, res: Response) => {
  GetAddress(req, res);
});

router.post("/appendaddress", async (req: Request, res: Response) => {
  AppendAddress(req, res);
});

router.get("/getsaveaddress", async (req: Request, res: Response) => {
  GetSaveAddress(req, res);
});

router.get("/getfinalcartprice", async (req: Request, res: Response) => {
  GetCartFinalPrice(req, res);
});


router.get("/creditbalance", async (req: Request, res: Response) => {
  GetCreditBalace(req, res);
});

router.get("/creditamount", async (req: Request, res: Response) => {
  GetCredit(req, res);
});

router.get("/getteachers", async (req: Request, res: Response) => {
  GetTeachers(req, res);
});

router.get("/getquestion1", async (req: Request, res: Response) => {
  GetQusetion1(req, res);
});

router.get("/getquestion2", async (req: Request, res: Response) => {
  GetQusetion2(req, res);
});

router.get("/getquestion3", async (req: Request, res: Response) => {
  GetQusetion3(req, res);
});

router.get("/getquestion4", async (req: Request, res: Response) => {
  GetQusetion4(req, res);
});

router.post("/getfeedback", async (req: Request, res: Response) => {
  FeedbackList(req, res);
});

router.get("/feedbacklists", async (req: Request, res: Response) => {
  GetFeedbackList(req, res);
});

router.post("/uploadimage", async (req: Request, res: Response) => {
  UploadImage(req, res);
});

router.get("/getuploadimage", async (req: Request, res: Response) => {
  GetUploadImage(req, res);
});

router.post("/webupload", async (req: Request, res: Response) => {
  WebUploadImage(req, res);
});

export {router};
