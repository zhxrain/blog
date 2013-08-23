Blog.Comment = DS.Model.extend({
  author: DS.attr('string'),
  content: DS.attr('string'),
  create_at: DS.attr('date'),
  post: DS.belongsTo('Blog.Post')
});
