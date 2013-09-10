Blog.Comment = DS.Model.extend({
  author: DS.attr('string'),
  content: DS.attr('string'),
  created_at: DS.attr('date'),
  post: DS.belongsTo('Blog.Post')
});
