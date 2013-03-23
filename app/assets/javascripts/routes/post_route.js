Blog.PostRoute = Ember.Route.extend({
  model: function(params){
    return Blog.Post.find(params.post_id);
  }
});
