Blog.Adapter = DS.RESTAdapter.extend({
});

Blog.Adapter.map('Blog.Post', {
    comments: {embedded: 'always'}
});

Blog.Store = DS.Store.extend({
  adapter:  Blog.Adapter.create()
});
