# Instagram-rest-practice
A RESTful CRUD app built with Node.js, Express, and EJS — Instagram-style post feed with create, read, update, delete, and like functionality.

# Instagram REST Practice

A practice project to solidify RESTful API concepts using the MERN-adjacent stack.
Built as a follow-up to a Quora-style CRUD app, this one adds image URLs, a like
system, and a more realistic social feed layout.

## Features

- Create posts with a username, image URL, and caption
- View all posts in a feed or one post in detail
- Edit captions after posting
- Like posts (A like between 0 to 10 are generated on random basis)
- Delete posts

## Tech Stack

- Node.js + Express
- EJS templating
- method-override (for PATCH and DELETE via HTML forms)
- uuid (for unique post IDs)

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | /posts | View all posts |
| GET | /posts/new | Create post form |
| POST | /posts | Submit new post |
| GET | /posts/:id | View single post |
| GET | /posts/:id/edit | Edit caption form |
| PATCH | /posts/:id | Update caption or like |
| DELETE | /posts/:id | Delete post |

## Run Locally

npm install
node index.js

Visit http://localhost:8080/posts
