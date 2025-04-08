import express from "express";
const router = express.Router();

import {
    addProduct ,
    getAllProducts
} from "../controllers/productController.js";

import {uploadImage} from "../Middlewares/upload.js";


router.get("/",getAllProducts);
router.post("/add", uploadImage, addProduct);

export default router;