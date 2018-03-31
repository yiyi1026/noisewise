# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  tag        :string           not null
#  user_id    :integer          not null
#  done       :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
