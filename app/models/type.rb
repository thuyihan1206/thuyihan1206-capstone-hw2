class Type < ActiveRecord::Base
  has_many :thing_types, inverse_of: :type, dependent: :destroy
  has_many :things, through: :thing_types
end