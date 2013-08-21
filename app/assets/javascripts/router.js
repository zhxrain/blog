Blog.Router.map(function() {
  this.resource('posts', function(){
    this.route('index', { path: "/" });
    this.route('post', { path: "/:post_id" });
  });
});
