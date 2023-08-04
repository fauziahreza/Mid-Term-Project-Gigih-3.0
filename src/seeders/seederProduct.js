import mongoose from 'mongoose';
import Product from '../models/product.js';
import { faker } from '@faker-js/faker';

async function seedData() {
  // Connection URL
  const uri = "mongodb://127.0.0.1:27017/midTermGigih";
  const seed_count = 10;
  mongoose.set("strictQuery", false);
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to db")
  }).catch((err) => {
    console.log("error", err)
  })

  let dataProduct = [];

  // create 5000 fake data
  for (let i = 0; i < seed_count; i++) {
    const videoId = "ca5d4799-dce9-425a-8a1d-e11956a0355f";
    const product_name = faker.commerce.productName();
    const price_product = faker.commerce.price({ min: 10000, max: 200000 });
    const thumbnail_product = faker.image.url();
    const link_product = faker.image.url();

    dataProduct.push({
      videoId,
      product_name,
      price_product,
      thumbnail_product,
      link_product
    })
  }

  const seedDB = async () => {
    await Product.insertMany(dataProduct)
  }

  seedDB().then(() => {
    mongoose.connection.close()
    console.log("seed success")
  })
}

seedData()
