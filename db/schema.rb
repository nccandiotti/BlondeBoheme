# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_04_12_162308) do
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
    t.boolean "deposit_received"
    t.index ["salon_id"], name: "index_appointments_on_salon_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "consults", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "phone"
    t.string "graycvg"
    t.string "hairHx"
    t.string "mugShot"
    t.string "inspo"
    t.bigint "user_id", null: false
    t.bigint "salon_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["salon_id"], name: "index_consults_on_salon_id"
    t.index ["user_id"], name: "index_consults_on_user_id"
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
  add_foreign_key "consults", "salons"
  add_foreign_key "consults", "users"
  add_foreign_key "services", "salons"
  add_foreign_key "student_inquiries", "salons"
  add_foreign_key "student_inquiries", "users"
  add_foreign_key "user_consults", "salons"
  add_foreign_key "user_consults", "users"
  add_foreign_key "user_images", "users"
end
