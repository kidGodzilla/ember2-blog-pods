import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    createPost() {
      let index = this.controllerFor('index');

      let post = this.store.createRecord('post', {
        title: index.get('title'),
        text: index.get('text'),
        author: index.get('author'),
        createdDate: new Date()
      });

      post.save();

      Ember.$("#NewPost")[0].reset();
    }
  }
});
