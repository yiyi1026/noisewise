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

class Todo < ApplicationRecord

  validates :date, :title, :tag, presence: true
  # avoid three-state boolean, null: false also works
  validates :done, inclusion: { in: [true, false] }

  # avoid redundant data for each user on same day
  validates_uniqueness_of :title, scope: [:user_id, :date]

  # todo should be planned ahead
  validate :date_cannot_be_in_the_past, on: [:create]
  
  # associations
  belongs_to :user

  def date_cannot_be_in_the_past
    errors.add(:date, "Todo date can't be in the past") if
      !date.blank? and date < Time.now.to_date

  end

  # def tag_names=(tag_names)
  #   self.tags = tag_names.map do |tag_name|
  #     Tag.find_or_create_by(name: tag_name)
  #   end
  # end
end
