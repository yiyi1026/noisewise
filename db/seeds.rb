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

weight1   = Weight.create!({ date: Date.new(2018,3,1),weight_value: 206.0,user_id: guest1.id })
weight2   = Weight.create!({ date: Date.new(2018,3,2),weight_value: 206.6,user_id: guest1.id })
weight3   = Weight.create!({ date: Date.new(2018,3,3),weight_value: 204.8,user_id: guest1.id })
weight4   = Weight.create!({ date: Date.new(2018,3,4),weight_value: 203.4,user_id: guest1.id })
weight5   = Weight.create!({ date: Date.new(2018,3,5),weight_value: 202.9,user_id: guest1.id })
weight6   = Weight.create!({ date: Date.new(2018,3,6),weight_value: 203.7,user_id: guest1.id })
weight7   = Weight.create!({ date: Date.new(2018,3,7),weight_value: 203.7,user_id: guest1.id })
weight8   = Weight.create!({ date: Date.new(2018,3,8),weight_value: 204.5,user_id: guest1.id })
weight9   = Weight.create!({ date: Date.new(2018,3,9),weight_value: 203.9,user_id: guest1.id })
weight10  = Weight.create!({ date: Date.new(2018,3,10),weight_value: 204.3,user_id: guest1.id })
weight11  = Weight.create!({ date: Date.new(2018,3,11),weight_value: 203.6,user_id: guest1.id })
weight12  = Weight.create!({ date: Date.new(2018,3,12),weight_value: 203.9,user_id: guest1.id })
weight13  = Weight.create!({ date: Date.new(2018,3,1),weight_value: 206.4,user_id: guest2.id })
weight14  = Weight.create!({ date: Date.new(2018,3,3),weight_value: 204.6,user_id: guest2.id })
weight15  = Weight.create!({ date: Date.new(2018,3,5),weight_value: 203.9,user_id: guest2.id })
weight16  = Weight.create!({ date: Date.new(2018,3,6),weight_value: 203.4,user_id: guest2.id })
weight17  = Weight.create!({ date: Date.new(2018,3,7),weight_value: 204.5,user_id: guest2.id })
weight18  = Weight.create!({ date: Date.new(2018,3,8),weight_value: 204.5,user_id: guest2.id })
weight19  = Weight.create!({ date: Date.new(2018,3,9),weight_value: 205.2,user_id: guest2.id })
weight20  = Weight.create!({ date: Date.new(2018,3,10),weight_value: 204.5,user_id: guest2.id })
weight21  = Weight.create!({ date: Date.new(2018,3,11),weight_value: 203.5,user_id: guest2.id })
weight22  = Weight.create!({ date: Date.new(2018,3,12),weight_value: 204.6,user_id: guest2.id })
weight23  = Weight.create!({ date: Date.new(2018,3,13),weight_value: 205.1,user_id: guest1.id })
weight24  = Weight.create!({ date: Date.new(2018,3,14),weight_value: 204.6,user_id: guest1.id })
weight25  = Weight.create!({ date: Date.new(2018,3,15),weight_value: 204.7,user_id: guest1.id })
weight26  = Weight.create!({ date: Date.new(2018,3,16),weight_value: 204.2,user_id: guest1.id })
weight27  = Weight.create!({ date: Date.new(2018,3,13),weight_value: 204.1,user_id: guest2.id })
weight28  = Weight.create!({ date: Date.new(2018,3,14),weight_value: 205.5,user_id: guest2.id })
weight29  = Weight.create!({ date: Date.new(2018,3,15),weight_value: 204.1,user_id: guest2.id })
weight30  = Weight.create!({ date: Date.new(2018,3,16),weight_value: 202.4,user_id: guest2.id })
weight31  = Weight.create!({ date: Date.new(2018,2,5),weight_value: 210.0,user_id: guest1.id })
weight32  = Weight.create!({ date: Date.new(2018,2,5),weight_value: 208.8,user_id: guest2.id })
weight33  = Weight.create!({ date: Date.new(2018,2,23),weight_value: 207.0,user_id: guest2.id })
weight34  = Weight.create!({ date: Date.new(2018,2,24),weight_value: 206.1,user_id: guest2.id })
weight35  = Weight.create!({ date: Date.new(2018,2,25),weight_value: 205.4,user_id: guest2.id })
weight36  = Weight.create!({ date: Date.new(2018,2,27),weight_value: 206.0,user_id: guest2.id })
weight37  = Weight.create!({ date: Date.new(2018,3,2),weight_value: 205.4,user_id: guest2.id })
weight38  = Weight.create!({ date: Date.new(2018,3,4),weight_value: 203.8,user_id: guest2.id })
weight39  = Weight.create!({ date: Date.new(2018,3,17),weight_value: 204.3,user_id: guest1.id })
weight40  = Weight.create!({ date: Date.new(2018,3,17),weight_value: 201.5,user_id: guest2.id })
weight41  = Weight.create!({ date: Date.new(2018,3,18),weight_value: 203.4,user_id: guest1.id })
weight42  = Weight.create!({ date: Date.new(2018,3,18),weight_value: 202.5,user_id: guest2.id })
weight43  = Weight.create!({ date: Date.new(2018,3,19),weight_value: 203.0,user_id: guest1.id })
weight44  = Weight.create!({ date: Date.new(2018,3,19),weight_value: 203.6,user_id: guest2.id })
weight45  = Weight.create!({ date: Date.new(2018,3,20),weight_value: 203.2,user_id: guest1.id })
weight46  = Weight.create!({ date: Date.new(2018,3,20),weight_value: 201.5,user_id: guest2.id })
weight47  = Weight.create!({ date: Date.new(2018,3,21),weight_value: 203.2,user_id: guest1.id })
weight48  = Weight.create!({ date: Date.new(2018,3,21),weight_value: 200.9,user_id: guest2.id })
weight49  = Weight.create!({ date: Date.new(2018,3,22),weight_value: 201.6,user_id: guest1.id })
weight50  = Weight.create!({ date: Date.new(2018,3,22),weight_value: 201.1,user_id: guest2.id })
weight51  = Weight.create!({ date: Date.new(2018,3,23),weight_value: 199.2,user_id: guest2.id })
weight52  = Weight.create!({ date: Date.new(2018,3,23),weight_value: 201.9,user_id: guest1.id })
weight53  = Weight.create!({ date: Date.new(2018,3,24),weight_value: 201.8,user_id: guest1.id })
weight54  = Weight.create!({ date: Date.new(2018,3,24),weight_value: 198.4,user_id: guest2.id })
weight55  = Weight.create!({ date: Date.new(2018,3,25),weight_value: 201.3,user_id: guest1.id })
weight56  = Weight.create!({ date: Date.new(2018,3,25),weight_value: 198.1,user_id: guest2.id })
weight57  = Weight.create!({ date: Date.new(2018,3,26),weight_value: 199.4,user_id: guest1.id })
weight58  = Weight.create!({ date: Date.new(2018,3,26),weight_value: 199.1,user_id: guest2.id })
weight59  = Weight.create!({ date: Date.new(2018,3,27),weight_value: 200.8,user_id: guest1.id })
weight60  = Weight.create!({ date: Date.new(2018,3,27),weight_value: 199.0,user_id: guest2.id })
weight61  = Weight.create!({ date: Date.new(2018,3,28),weight_value: 200.7,user_id: guest1.id })
weight62  = Weight.create!({ date: Date.new(2018,3,29),weight_value: 199.4,user_id: guest1.id })
weight63  = Weight.create!({ date: Date.new(2018,3,29),weight_value: 199.1,user_id: guest2.id })
weight64  = Weight.create!({ date: Date.new(2018,3,28),weight_value: 198.5,user_id: guest2.id })
weight65  = Weight.create!({ date: Date.new(2018,3,30),weight_value: 198.7,user_id: guest1.id })
weight66  = Weight.create!({ date: Date.new(2018,3,30),weight_value: 198.7,user_id: guest2.id })
weight67  = Weight.create!({ date: Date.new(2018,3,31),weight_value: 198.4,user_id: guest1.id })
weight68  = Weight.create!({ date: Date.new(2018,3,31),weight_value: 198.1,user_id: guest2.id })
weight69  = Weight.create!({ date: Date.new(2018,4,2),weight_value: 200.0,user_id: guest2.id })
weight70  = Weight.create!({ date: Date.new(2018,4,3),weight_value: 198.4,user_id: guest1.id })
weight71  = Weight.create!({ date: Date.new(2018,4,2),weight_value: 199.5,user_id: guest1.id })
weight72  = Weight.create!({ date: Date.new(2018,4,3),weight_value: 198.9,user_id: guest2.id })
weight73  = Weight.create!({ date: Date.new(2018,4,1),weight_value: 199.7,user_id: guest1.id })
weight74  = Weight.create!({ date: Date.new(2018,4,1),weight_value: 199.6,user_id: guest2.id })
weight75  = Weight.create!({ date: Date.new(2018,4,4),weight_value: 197.5,user_id: guest1.id })
weight76  = Weight.create!({ date: Date.new(2018,4,4),weight_value: 197.3,user_id: guest2.id })
weight77  = Weight.create!({ date: Date.new(2018,4,5),weight_value: 199.0,user_id: guest1.id })
weight78  = Weight.create!({ date: Date.new(2018,4,5),weight_value: 198.0,user_id: guest2.id })
weight79  = Weight.create!({ date: Date.new(2018,4,6),weight_value: 197.2,user_id: guest2.id })
weight80  = Weight.create!({ date: Date.new(2018,4,6),weight_value: 199.2,user_id: guest1.id })
weight81  = Weight.create!({ date: Date.new(2018,4,7),weight_value: 199.0,user_id: guest1.id })
weight82  = Weight.create!({ date: Date.new(2018,4,7),weight_value: 196.0,user_id: guest2.id })
weight83  = Weight.create!({ date: Date.new(2018,4,8),weight_value: 199.0,user_id: guest1.id })
weight84  = Weight.create!({ date: Date.new(2018,4,8),weight_value: 196.0,user_id: guest2.id })
weight85  = Weight.create!({ date: Date.new(2018,4,9),weight_value: 198.6,user_id: guest1.id })
weight86  = Weight.create!({ date: Date.new(2018,4,9),weight_value: 196.4,user_id: guest2.id })
weight87  = Weight.create!({ date: Date.new(2018,4,11),weight_value: 197.9,user_id: guest1.id })
weight88  = Weight.create!({ date: Date.new(2018,4,10),weight_value: 198.0,user_id: guest1.id })
weight89  = Weight.create!({ date: Date.new(2018,4,10),weight_value: 196.0,user_id: guest2.id })
weight90  = Weight.create!({ date: Date.new(2018,4,11),weight_value: 196.4,user_id: guest2.id })
weight91  = Weight.create!({ date: Date.new(2018,4,12),weight_value: 197.1,user_id: guest1.id })
weight92  = Weight.create!({ date: Date.new(2018,4,12),weight_value: 195.4,user_id: guest2.id })
weight93  = Weight.create!({ date: Date.new(2018,4,15),weight_value: 196.1,user_id: guest1.id })
weight94  = Weight.create!({ date: Date.new(2018,4,14),weight_value: 197.6,user_id: guest1.id })
weight95  = Weight.create!({ date: Date.new(2018,4,13),weight_value: 198.9,user_id: guest1.id })
weight96  = Weight.create!({ date: Date.new(2018,4,15),weight_value: 193.8,user_id: guest2.id })
weight97  = Weight.create!({ date: Date.new(2018,4,13),weight_value: 195.0,user_id: guest2.id })
weight98  = Weight.create!({ date: Date.new(2018,4,14),weight_value: 193.6,user_id: guest2.id })
weight99  = Weight.create!({ date: Date.new(2018,4,16),weight_value: 196.9,user_id: guest1.id })
weight100 = Weight.create!({ date: Date.new(2018,4,16),weight_value: 195.0,user_id: guest2.id })
weight101 = Weight.create!({ date: Date.new(2018,4,17),weight_value: 197.2,user_id: guest1.id })
weight102 = Weight.create!({ date: Date.new(2018,4,17),weight_value: 194.3,user_id: guest2.id })
weight103 = Weight.create!({ date: Date.new(2018,4,18),weight_value: 196.1,user_id: guest1.id })
weight104 = Weight.create!({ date: Date.new(2018,4,18),weight_value: 193.3,user_id: guest2.id })
weight105 = Weight.create!({ date: Date.new(2018,4,19),weight_value: 195.9,user_id: guest1.id })
weight106 = Weight.create!({ date: Date.new(2018,4,19),weight_value: 193.0,user_id: guest2.id })
weight107 = Weight.create!({ date: Date.new(2018,4,20),weight_value: 197.5,user_id: guest1.id })
weight108 = Weight.create!({ date: Date.new(2018,4,20),weight_value: 191.7,user_id: guest2.id })
weight109 = Weight.create!({ date: Date.new(2018,4,21),weight_value: 190.9,user_id: guest2.id })
weight110 = Weight.create!({ date: Date.new(2018,4,22),weight_value: 190.7,user_id: guest2.id })
weight111 = Weight.create!({ date: Date.new(2018,4,23),weight_value: 190.6,user_id: guest2.id })
weight112 = Weight.create!({ date: Date.new(2018,4,24),weight_value: 190.9,user_id: guest2.id })
weight113 = Weight.create!({ date: Date.new(2018,4,25),weight_value: 190.5,user_id: guest2.id })
weight114 = Weight.create!({ date: Date.new(2018,4,26),weight_value: 190.5,user_id: guest2.id })
weight115 = Weight.create!({ date: Date.new(2018,4,27),weight_value: 197.4,user_id: guest1.id })
weight116 = Weight.create!({ date: Date.new(2018,4,27),weight_value: 191.4,user_id: guest2.id })
weight117 = Weight.create!({ date: Date.new(2018,4,28),weight_value: 197.6,user_id: guest1.id })
weight118 = Weight.create!({ date: Date.new(2018,4,28),weight_value: 191.0,user_id: guest2.id })
weight119 = Weight.create!({ date: Date.new(2018,4,29),weight_value: 191.2,user_id: guest2.id })
weight120 = Weight.create!({ date: Date.new(2018,4,29),weight_value: 197.9,user_id: guest1.id })
weight121 = Weight.create!({ date: Date.new(2018,4,30),weight_value: 196.3,user_id: guest1.id })
weight122 = Weight.create!({ date: Date.new(2018,4,30),weight_value: 190.3,user_id: guest2.id })
weight123 = Weight.create!({ date: Date.new(2018,4,21),weight_value: 197.5,user_id: guest1.id })
weight124 = Weight.create!({ date: Date.new(2018,4,22),weight_value: 196.5,user_id: guest1.id })
weight125 = Weight.create!({ date: Date.new(2018,5,1),weight_value: 197.0,user_id: guest1.id })
weight126 = Weight.create!({ date: Date.new(2018,5,1),weight_value: 190.3,user_id: guest2.id })
weight127 = Weight.create!({ date: Date.new(2018,5,2),weight_value: 196.2,user_id: guest1.id })
weight128 = Weight.create!({ date: Date.new(2018,5,2),weight_value: 189.0,user_id: guest2.id })
weight129 = Weight.create!({ date: Date.new(2018,5,3),weight_value: 196.6,user_id: guest1.id })
weight130 = Weight.create!({ date: Date.new(2018,5,3),weight_value: 188.2,user_id: guest2.id })
