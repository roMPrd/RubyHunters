class Bounty < ApplicationRecord
  belongs_to :user
  has_many :solutions
end
