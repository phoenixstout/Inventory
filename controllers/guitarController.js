import Guitar from "../models/guitar.js";
import Category from "../models/category.js";
import asyncHandler from "express-async-handler";

const index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, authors and genre counts (in parallel)
 const data = await Guitar.find()
 console.log(data)
 res.render('index', {items:data})
});

export default index;
