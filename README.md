# TheBlondeBoheme
> **The Blonde Boheme** is a website for a local hair salon, [@the.blonde.boheme](https://www.instagram.com/the.blonde.boheme). This is a **full stack** application with a self-generated, restful API and full CRUD functionality. A demo video is available [here](https://www.loom.com/share/e40b922fc7fa40bcbefa8d4c7c409f3d)

## Table of contents
* [General info](#general-info)
* [Project Video](#project-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
The Blonde Boheme is a sleek, easy-to-use web application to track and manage bugs for any large or small scale project. This is a unique site that also integrates with data charts to better visualize team and tech stack performances. 

## Project Video
[Click to view demo of The Blonde Boheme](https://www.loom.com/share/e40b922fc7fa40bcbefa8d4c7c409f3d)

## Technologies
### Backend Development 
* Ruby ruby "2.7.4"
* gem 'bcrypt', '~> 3.1.7' 
* gem "rails", "~> 7.0.2", ">= 7.0.2.3" 
* gem "active_model_serializers"
* gem "aws-sdk-s3", require: false
* gem "image_processing", "~> 1.2"
* and more (see gem file)

### Frontend Development 
* JavaScript (ES6)
* HTML5
* CSS3
* React.js - version 17.0.2
* React-DOM - version 17.0.2
* React-Router-DOM - version 6.3.0
* React-Materialize - version 3.9.3
* React-Scripts - version 4.0.3
* MUI - version 5.5.3
* MUI icons - version 5.6.1
* MUI datepickers & datepickers-pro  5.0.0alpha.0 
* and more, see package.json

## Setup
To try out this project: 
1. Clone the GitHub repository locally to your computer
2. In the command line, navigate to the root directory of the repository, and type the following: 
  $ bundle install
  To start the server, simply type
  $rails s
3. Navigate to the client folder, and in the root directory of the client folder, type the following: 
  $ npm install 
4. In the client folder, and in the root directory of the client folder, type the following: 
  $ npm start --prefix client
5. The admin account can be viewed with:
    username: admin
    password:admin

## Code Examples

### JavaScript/React.js 
```React.js

```

## Features
* Full stack web application utilizing the Ruby on Rails, Active Storage, React, MUI 
* Authorization and authenication implemented with sessions and bcrypt. 
* Front-End styles and components built with MUI. 
* This app has a user view and admin(salon owner) views. 
    Student Inquiries: 
        
        - View Salon's classes
        - Complete Inquiry form (posted to admin dashboard)
        - Purchase tickets via Stripe payment link

    Guests:

        - Signup/sign in to view their account
        - Complete consultation forms (posted to admin dashboard)
        - Upload current pictures of their hair and inspo pics via Active Storage (displayed on their page and admin page)
        - Leave a deposit via Stripe payment link
        - Schedule an Appointment
        - Edit their profile details

    Admin:

        - Login to dashboard
        - View education inquiries and upcoming appointments
        - Reschedule Appointments
        - Delete Appointments
        - View User uploaded pictures
        - Edit their profile details
        
## Status
Project is: evolving. Future plans include coordinating with business owner on final features and refactors to optimize UI. 

## Inspiration
The inspiration for The Blonde Boheme came as an initiative to improve the current website for a friend, [@the.blonde.boheme.](https://www.instagram.com/the.blonde.boheme/), a luxury hair service provider in Rochester, New York. Currently using a mix of instagram, linktree, and wix to advertise her business, I wanted to make a website that was more fitting of her business. 

## Contact
Created by [Nicole Candiotti](https://www.linkedin.com/in/nicole-candiotti/) 
Feel free to contact me for any questions! 

