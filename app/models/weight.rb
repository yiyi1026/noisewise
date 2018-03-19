# == Schema Information
#
# Table name: weights
#
#  id           :integer          not null, primary key
#  date         :date             not null
#  weight_value :float            not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Weight < ApplicationRecord
  validates :user_id, :user, :date, :weight_value, presence: true

  # each user should have at most one weight for each day
  validates_uniqueness_of :date, scope: %i[user_id]
  validates :weight_value, numericality: { greater_than: 0 }
  #associations
  belongs_to :user

end
