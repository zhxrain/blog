Blog.Router.map(function() {
  this.resource('posts', function(){
    this.route('new');
  });
  this.route('home', { path: "/" });
});
