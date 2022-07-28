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
  //login
  function handleLogin(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((currentUser) => setCurrentUser(currentUser))
      } else alert("Invalid login. Please try again.")
    })
  }

  // fetch appointments array
  useEffect(() => {
    fetch("./appointments")
      .then((r) => r.json())

      .then((data) => setAppointments(data))
  }, [])
  // fetch users array
  useEffect(() => {
    fetch("./users")
      .then((r) => r.json())
      .then(setUsersArray)
  }, [])

  const handleCloseApptEdit = () => setOpenApptEdit(false)
  const toggleAlert = () => setShowAlert((prevstate) => !prevstate)
  
 // update appointment
  function handleApptPatch(e) {
    e.preventDefault()
    fetch(`/appointments/${selectedApptid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: time,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setDateValue(null))
        setSelectedApptTime(time)
        handleApptClose()
      } else
        alert("This day/time is not available, please select another time.")
    })
  }

  // delete appointment
  function handleFirstDeleteButton(e) {
    toggleAlert()
  }

  function updateApptsArrayAfterDelete(id) {
    const filter = appointments.filter((appt) => appt.id !== id)
    return setAppointments(filter)
  }
  function handleHardDelete(e) {
    updateApptsArrayAfterDelete(selectedApptid)
    fetch(`/appointments/${selectedApptid}`, {
      method: "DELETE",
    }).then(setShowAlert(!showAlert))
    handleCloseApptEdit()
  }
```
### Ruby/rails 
```
  //application controller with error handling
    class ApplicationController < ActionController::API
      include ActionController::Cookies
      rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
      rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
 
      def current_user
          User.find_by(id:session[:user_id])
      end 

      private
      def render_unprocessable_entity(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
      end

      def render_not_found(error)
        render json: {error: "#{error.message}"}, status: :not_found
      end
    end
    
    //Sessions controller
    class SessionsController < ApplicationController
 
    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id]=user.id
            render json: user
        else
          render json: {errors: ["invalid username or password"]}, status: :unauthorized
        end
       end
    
       def logout
        session.delete :user_id
        head :no_content
       end

    end
    


```
### API Schema
```
ActiveRecord::Schema[7.0].define(version: 2022_04_16_183933) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "appointments", force: :cascade do |t|
    t.bigint "salon_id", null: false
    t.bigint "user_id", null: false
    t.string "time"
    t.string "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "deposit_received", default: false
    t.index ["salon_id"], name: "index_appointments_on_salon_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "salons", force: :cascade do |t|
    t.string "name"
    t.string "owner"
    t.string "address"
    t.string "phone"
    t.string "instagram"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "category"
    t.string "time"
    t.string "price"
    t.string "name"
    t.bigint "salon_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["salon_id"], name: "index_services_on_salon_id"
  end

  create_table "student_inquiries", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "phone"
    t.string "email"
    t.string "technique"
    t.string "travel"
    t.string "lessonType"
    t.bigint "salon_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["salon_id"], name: "index_student_inquiries_on_salon_id"
    t.index ["user_id"], name: "index_student_inquiries_on_user_id"
  end

  create_table "user_consults", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "phone"
    t.string "graycvg"
    t.string "hairhx"
    t.string "allergies"
    t.bigint "user_id", null: false
    t.bigint "salon_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["salon_id"], name: "index_user_consults_on_salon_id"
    t.index ["user_id"], name: "index_user_consults_on_user_id"
  end

  create_table "user_images", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_images_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.boolean "admin", default: false
    t.string "firstname"
    t.string "lastname"
    t.string "username"
    t.string "email"
    t.string "password_digest", default: ""
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "appointments", "salons"
  add_foreign_key "appointments", "users"
  add_foreign_key "services", "salons"
  add_foreign_key "student_inquiries", "salons"
  add_foreign_key "student_inquiries", "users"
  add_foreign_key "user_consults", "salons"
  add_foreign_key "user_consults", "users"
  add_foreign_key "user_images", "users"
end
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
Project is: evolving. Future plans include coordinating with business owner on final features and refactors to optimize UI, including media queries for mobile users. 

## Inspiration
The inspiration for The Blonde Boheme came as an initiative to improve the current website for a friend, [@the.blonde.boheme.](https://www.instagram.com/the.blonde.boheme/), a luxury hair service provider in Rochester, New York. Currently using a mix of instagram, linktree, and wix to advertise her business, I wanted to build a website that was better fit her brand and improved current/future clients user experience. 

## Contact
Created by [Nicole Candiotti](https://www.linkedin.com/in/nicole-candiotti/) 
Feel free to contact me for any questions! 

