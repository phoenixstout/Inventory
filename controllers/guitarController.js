import Guitar from "../models/guitar.js";
import Category from "../models/category.js";
import asyncHandler from "express-async-handler";

const index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, authors and genre counts (in parallel)
  const guitars = await Guitar.find().exec();
  res.render("index", { guitars: guitars });
});

const guitar_detail = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const guitar = await Guitar.findById(id).exec();
  res.render("guitarDetail", { guitar: guitar });
});

const new_guitar = asyncHandler(async (req, res) => {
  const [guitars, categories] = await Promise.all([
    Guitar.find().exec(),
    Category.find().exec(),
  ]);

  res.render("guitarForm", { guitars: guitars, categories: categories });
});

const new_guitar_post = asyncHandler(async (req, res) => {
  console.log(req.body);
  const guitar = new Guitar({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    num_in_stock: req.body.num_in_stock,
  });
  await guitar.save();
  res.redirect("/");
});

const new_category = asyncHandler(async (req, res) => {
  const guitars = await Guitar.find().exec();

  res.render("categoryForm", { guitars: guitars });
});

const new_category_post = asyncHandler(async (req, res) => {
  const cate = new Category({ name: req.body.name });
  await cate.save();
  res.redirect("/");
});

const update_guitar = asyncHandler(async (req, res) => {
  const result = await Guitar.updateOne(
    { _id: req.params.id },
    {$set:{num_in_stock:req.body.num_in_stock}}
  );

  // Print the number of matching and modified documents
  console.log(
    `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
  );
  res.redirect("/");
});

export default {
  index,
  guitar_detail,
  new_guitar,
  new_guitar_post,
  new_category,
  new_category_post,
  update_guitar,
};
