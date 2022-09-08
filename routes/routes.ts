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
import {UpdateProductDetails} from "../middleware/updateproductdetails";
import{Readstatus} from "../middleware/viewproductstatus";
import { Products } from "../middleware/get_products";
import { AddCart } from "../middleware/add_cart";


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

router.post("/addtocart",async (req: Request, res: Response) => {
  AddCart(req, res);
});

export { router };
