Blog.Post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  publisher: DS.attr('string'),
  comments: DS.hasMany('Blog.Comment')
});
