class Post < ActiveRecord::Base
  attr_accessible :body, :title, :comments, :publisher
  has_many :comments
end
