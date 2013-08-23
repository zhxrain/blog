class Comment < ActiveRecord::Base
  attr_accessible :author, :content, :post
  belongs_to :post
end
