import Guitar from "../models/guitar.js";
import Category from "../models/category.js";
import asyncHandler from "express-async-handler";

const index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, authors and genre counts (in parallel)
 const [guitars, categories] = await Promise.all([
    Guitar.find().exec(),
    Category.find().exec()
 ])
 res.render('index', {items:guitars, categories:categories})
});

const guitar_detail = asyncHandler(async (req, res) => {
    const id = req.params.id
    const guitar = await Guitar.findById(id).exec()
    res.render('guitarDetail', {guitar:guitar})
})



export default {index, guitar_detail};
