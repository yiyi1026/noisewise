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


weight1 = Weight.create!({user_id: guest1.id, weight:210, date: Date.new(2018,2,5)})
weight2 = Weight.create!({user_id: guest1.id, weight:206, date: Date.new(2018,3,1)})
weight3 = Weight.create!({user_id: guest1.id, weight:206.6, date: Date.new(2018,3,2)})
weight4 = Weight.create!({user_id: guest1.id, weight:204.8, date: Date.new(2018,3,3)})
weight5 = Weight.create!({user_id: guest1.id, weight:203.4, date: Date.new(2018,3,4)})
weight6 = Weight.create!({user_id: guest1.id, weight:202.9, date: Date.new(2018,3,5)})
weight7 = Weight.create!({user_id: guest1.id, weight:203.7, date: Date.new(2018,3,6)})
weight8 = Weight.create!({user_id: guest1.id, weight:203.7, date: Date.new(2018,3,7)})
weight9 = Weight.create!({user_id: guest1.id, weight:204.5, date: Date.new(2018,3,8)})
weight10 = Weight.create!({user_id: guest1.id, weight:203.9, date: Date.new(2018,3,9)})
weight11 = Weight.create!({user_id: guest1.id, weight:204.3, date: Date.new(2018,3,10)})
weight12 = Weight.create!({user_id: guest1.id, weight:203.6, date: Date.new(2018,3,11)})
weight13 = Weight.create!({user_id: guest1.id, weight:203.9, date: Date.new(2018,3,12)})




weight14 = Weight.create!({user_id: guest2.id, weight:208.8, date: Date.new(2018,2,28)})
weight15 = Weight.create!({user_id: guest2.id, weight:206.4, date: Date.new(2018,3,1)})
weight16 = Weight.create!({user_id: guest2.id, weight:205.4, date: Date.new(2018,3,2)})
weight17 = Weight.create!({user_id: guest2.id, weight:204.6, date: Date.new(2018,3,3)})
weight18 = Weight.create!({user_id: guest2.id, weight:203.6, date: Date.new(2018,3,4)})
weight19 = Weight.create!({user_id: guest2.id, weight:203.9, date: Date.new(2018,3,5)})
weight20 = Weight.create!({user_id: guest2.id, weight:203.4, date: Date.new(2018,3,6)})
weight21 = Weight.create!({user_id: guest2.id, weight:204.5, date: Date.new(2018,3,7)})
weight22 = Weight.create!({user_id: guest2.id, weight:204.5, date: Date.new(2018,3,8)})
weight23 = Weight.create!({user_id: guest2.id, weight:205.2, date: Date.new(2018,3,9)})
weight24 = Weight.create!({user_id: guest2.id, weight:204.5, date: Date.new(2018,3,10)})
weight25 = Weight.create!({user_id: guest2.id, weight:203.5, date: Date.new(2018,3,11)})
weight26 = Weight.create!({user_id: guest2.id, weight:204.6, date: Date.new(2018,3,12)})


