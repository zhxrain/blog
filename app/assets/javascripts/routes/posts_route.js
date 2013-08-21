Blog.PostsIndexRoute = Ember.Route.extend({
  model: function(){
    return Blog.Post.find();
  }
});
