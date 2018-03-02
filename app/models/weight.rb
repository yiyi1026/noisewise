# == Schema Information
#
# Table name: weights
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  weight     :float            not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Weight < ApplicationRecord
  validates :user_id, :user, :date, :weight, presence: true

  #associations
  belongs_to :user

end
