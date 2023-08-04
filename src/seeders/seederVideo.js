import mongoose from 'mongoose';
import Video from '../models/video.js';
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

  let timeSeriesData = [];
  // create 5000 fake data
  for (let i = 0; i < seed_count; i++) {
    const video_id = faker.string.uuid();
    const thumbnail = faker.image.url();
    const shop_name = faker.company.name();
    const video_title = faker.commerce.productName();

    timeSeriesData.push({
      video_id,
      thumbnail,
      shop_name,
      video_title,
    });
  }

  const seedDB = async () => {
    await Video.insertMany(timeSeriesData)
  }

  seedDB().then(() => {
    mongoose.connection.close()
    console.log("seed success")
  })
}

seedData()
