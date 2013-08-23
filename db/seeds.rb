# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
post = Post.create(title: 'first', body: 'This is first blog post.', publisher: 'zhongxiang')
Post.create(title: 'second', body: 'This is second blog post.', publisher: 'zhongxiang')
Comment.create(content: 'Nice!', author: 'zhong', post: post)
