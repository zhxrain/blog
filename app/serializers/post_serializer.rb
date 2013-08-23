class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :publisher, :comments
end
