Blog.PostRoute = Ember.Route.extend({
  setupController: function(controller, post){
    controller.set("content", post);
  },
  model: function(params){
    return Blog.Post.find(params.post_id);
  }
});
