Blog.PostsRoute = Ember.Route.extend({
  setupController: function(controller, posts){
    controller.set("content", posts);
  },
  model: function(){
    return Blog.Post.find();
  }
});
