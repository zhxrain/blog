Blog.ApplicationRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('posts');
  }
});
