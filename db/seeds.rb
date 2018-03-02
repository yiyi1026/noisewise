# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Weight.delete_all

# user
guest1 = User.create!({username: 'Mario'})
guest2 = User.create!({username: 'Mushroom'})


weight1 = Weight.create!({user_id: guest1.id, weight:209, date: Date.new(2018,2,26)})
weight2 = Weight.create!({user_id: guest1.id, weight:208.6, date: Date.new(2018,2,27)})
weight3 = Weight.create!({user_id: guest2.id, weight:207, date: Date.new(2018,2,28)})
weight4 = Weight.create!({user_id: guest2.id, weight:206.5, date: Date.new(2018,3,1)})


