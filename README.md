# Mid-Term Project Gigih 3.0 (Backend-Only)

## Project Description

This is the backend implementation of the Mid-Term Project Gigih 3.0, which serves as the API server for the Tokopedia Play clone. The backend is responsible for handling data related to videos, products, and comments and provides endpoints to interact with the data.

## Technology Used

- `Node.js`
- `Express.js`
- `MongoDB`
- `Mongoose`

## How to Run the Backend

1. Clone this repository to your local directory:
git clone https://github.com/fauziahreza/Mid-Term-Project-Gigih-3.0.git
2. Go to the backend directory:
cd Mid-Term-Project-Gigih-3.0/backend
3. Install dependencies with npm:
npm install
4. Set up the MongoDB connection by providing the MongoDB URI in `config/db.js` file.
5. Run the backend server:
npm run start
6. The backend server will run at `http://localhost:3000/`.


## Database Schema
The backend uses MongoDB as the database and the following schemas are used for data storage:

### Video
- video_id (String, required)
- thumbnail (String, required)
- shop_name (String, required)
- video_title (String, required)

### Product
- videoId (String, required)
- product_name (String, required)
- price_product (Number, required)
- thumbnail_product (String, required)
- link_product (String, required)

### Comment
- videoId (String, required)
- username (String, required)
- comment (String, required)


## API Endpoints

### GET /videos
Get the list of videos.

### GET /videos/:id
Get video details based on video_id.

### GET /products
Get the list of products.

### GET /comments
Get the list of comments.

### POST /products
Add a new product.

Body Request:
{
"videoId": "video_id",
"product_name": "product_name",
"price_product": 100000,
"thumbnail_product": "product_thumbnail_url",
"link_product": "product_url"
}


### POST /comments
Add a new comment.

Body Request:
{
"videoId": "video_id",
"username": "username",
"comment": "comment"
}


## Grading Criteria
This backend part of the project will be evaluated based on:
- Completeness of the specified features.
- Code structure and quality.
- Appropriate use of technology.
- Quality of documentation.
