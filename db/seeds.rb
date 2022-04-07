Salon.destroy_all
User.destroy_all
Service.destroy_all
Appointment.destroy_all
# AppointmentService.destroy_all


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "creating seeds..."

puts "creating salon"
Salon.create(name: "The Blonde Boheme", owner: "Suzie Bernhardt", address: "House Of 'MaVriks: 1401 Stone Rd, Rochester, NY, 14615 (lower level, suite 100)", phone:"585 880-2679", instagram: "https://www.instagram.com/the.blonde.boheme/" )
puts "salon created"
# --------------------
# puts "creating stylist"
# Stylist.create(first_name: "Suzie", last_name: "Bernhardt", phone: "585 880-2679", instagram: "https://www.instagram.com/the.blonde.boheme/", email: "stylist@stylist.com", username: "stylist", salon_id: 1)
# puts "stylists created"

puts "creating suzie admin"
User.create(admin: true, firstname: "Suzie", lastname: "Bernhardt", phone: "585 880-2679", email: "suzie@suzie.com", password: "admin", username: "admin")
puts "suzie admin created"

# --------------------
puts "creating user"
User.create(admin: false, firstname: "user", lastname: "user", phone: "585 880-2679", email: "user@user.com", password: "user", username: "user")
puts "user created"

# --------------------

puts "creating services"
Service.create(name: "Gloss + Blowout", category: "simplicity", price:"$90+", time:"1 hour", salon_id: Salon.first.id)
Service.create(name: "Gloss + Cut + Blowout", category: "simplicity" , price: "$135+", time:"1.5hours", salon_id: Salon.first.id)
Service.create(name: "Virgin Retouch + Gloss + Blowout", category: "simplicity" , price:"$180+", time:"2 hours", salon_id: Salon.first.id)
Service.create(name: "Virgin Retouch + Gloss + Cut + Blowout", category: "simplicity" , price:"$225", time:"2.5 hours", salon_id: Salon.first.id)
Service.create(name: "K18 Treatment", category: "simplicity" , price:"$30", time:"15 minutes", salon_id: Salon.first.id)
Service.create(name: "Curls", category: "simplicity" , price:"$15", time:"15 minutes", salon_id: Salon.first.id)

Service.create(name: "Customized Coloring", category: "luxury" , price:"$110/hour", time: "variable", salon_id: Salon.first.id)
Service.create(name: "Nourishing Mask + Blowout", category: "therapeutic" , price:"$65", time:"15 minutes", salon_id: Salon.first.id)
Service.create(name: "K18 Treatment + Blowout", category: "therapeutic" , price:"$80", time: "15 minutes",salon_id: Salon.first.id)
Service.create(name: "Scalp Therapy and Blowout", category: "therapeutic" , price:"$135", time:"1 hour", salon_id: Salon.first.id)
puts "services created"



# -----------------------

puts "seeding complete"