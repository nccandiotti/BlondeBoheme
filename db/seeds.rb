Salon.destroy_all
Stylist.destroy_all
User.destroy_all
Service.destroy_all
Appointment.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "creating seeds..."

puts "creating salon"
Salon.create(name: "The Blonde Boheme", address: "House Of 'MaVriks: 1401 Stone Rd, Rochester, NY, 14615 (lower level, suite 100)", instagram: "https://www.instagram.com/the.blonde.boheme/" )
puts "salon created"
# --------------------
puts "creating stylist"
Stylist.create(admin: true, first_name: "Suzie", last_name: "Bernhardt" phone: "585 880-2679", instagram: "https://www.instagram.com/the.blonde.boheme/", email: "", password: "admin", username: "admin", salon_id:1, service_id:1)
puts "stylists created"

# --------------------
puts "creating user"
User.create(admin: false, first_name: "user", last_name: "user" phone: "585 880-2679", instagram: "", email: "", password: "user", username: "user", stylist_id: 1)
puts "user created"

# --------------------

puts "creating services"
Service.create(name: "Gloss + Blowout", category: "simplicity" , price:"$90+", time:60)
Service.create(name: "Gloss + Cut + Blowout", category: "simplicity" , price: "$135+":, time:90)
Service.create(name: "Virgin Retouch + Gloss + Blowout", category: "simplicity" , price:"$180+", time:120)
Service.create(name: "Virgin Retouch + Gloss + Cut + Blowout", category: "simplicity" , price:"$225", time:180)
Service.create(name: "K18 Treatment", category: "simplicity" , price:"$30", time:15)
Service.create(name: "Curls", category: "simplicity" , price:"$15", time:15)

Service.create(name: "Customized Coloring", category: "luxury" , price:"$110/hour", time:)
Service.create(name: "Nourishing Mask + Blowout", category: "therapeutic" , price:65, time:)
Service.create(name: "K18 Treatment + Blowout", category: "therapeutic" , price:80, time:)
Service.create(name: "Scalp Therapy and Blowout", category: "therapeutic" , price:135, time:60)
puts "services created"



# -----------------------

puts "seeding complete"