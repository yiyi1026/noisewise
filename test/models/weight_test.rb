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

require 'test_helper'

class WeightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
