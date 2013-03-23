Blog.PostsRoute = Ember.Route.extend({
  setupController: function(controller){
    var posts = Blog.Post.find();
    controller.set("posts", posts);
    console.log(posts);
  }
});
