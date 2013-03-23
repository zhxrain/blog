Blog.Router.map(function() {
  this.resource('posts', function(){
    this.route('post', { path: "/post/:post_id" });
    this.route('new');
  });
  this.route('home', { path: "/" });
});
