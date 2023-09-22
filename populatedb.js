#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line

import Guitar from "./models/guitar.js";
import Category from "./models/category.js";
import "dotenv/config";


const guitars = [];
const categories = [];


import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const mongoDB = process.env.url;

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createGuitars();
  
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, name) {
  const category = new Category({ name: name });
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function guitarCreate(index, name, description, category, price, num_in_stock) {
  const guitarDetail = { name, description, category, price, num_in_stock};

  const guitar = new Guitar(guitarDetail);

  await guitar.save();
  guitars[index] = guitar;
  console.log(`Added guitar: ${name}`);
}



async function createGuitars() {
  console.log("Adding guitars");
  await Promise.all([
    guitarCreate(0, "Baby", 'best guitar', categories[0]),
    guitarCreate(1, "Jazz", 'worst guitar', categories[1]),
    guitarCreate(2, "FG200", 'slightly good', categories[2]),
  ]);
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, 'Taylor'),
    categoryCreate(1, 'Fender'),
    categoryCreate(2, 'Yamaha'),
  ]);
}

