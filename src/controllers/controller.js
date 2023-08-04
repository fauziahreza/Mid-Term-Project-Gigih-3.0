import videoModel from '../models/video.js';
import commentModel from '../models/comment.js';
import productModel from '../models/product.js';
import { faker } from '@faker-js/faker';

const index = async (req, res) => {
  try {
    const video = await videoModel.find();
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const productList = async (req, res) => {
  try {
    const product = await productModel.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const commentList = async (req, res) => {
  try {
    const comment = await commentModel.find();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postComment = async (req, res) => {
  const comment = new commentModel({
    videoId: req.body.videoId,
    username: req.body.username,
    comment: req.body.comment,
  });
  try {
    const saveComment = await comment.save();
    res.status(200).json({
      message: "Comment added successfully",
      data: {
        username: saveComment.username,
        comment: saveComment.comment,
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postProduct = async (req, res) => {
  const product = new productModel({
    videoId: req.body.videoId,
    product_name: req.body.product_name,
    price_product: req.body.price_product,
    thumbnail_product: req.body.thumbnail_product,
    link_product: req.body.link_product,
  });
  try {
    const saveProduct = await product.save();
    res.status(200).json({
      message: "Product added successfully",
      data: {
        product_name: saveProduct.product_name,
        price_product: saveProduct.price_product,
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const selectVideoById = async (req, res) => {
  try {
    const video = await videoModel.aggregate([
      { $match: { video_id: req.params.id } },
      {
        $lookup: {
          from: "products",
          localField: "video_id",
          foreignField: "videoId",
          as: "products",
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "video_id",
          foreignField: "videoId",
          as: "comments",
        },
      },
    ])
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  index,
  selectVideoById,
  productList,
  commentList,
  postComment,
  postProduct
};