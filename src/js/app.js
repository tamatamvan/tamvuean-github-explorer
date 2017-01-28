var Vue = require('vue');
Vue.config.debug = true;

new Vue({
  el: '#container',
  data: {
    fullRepoName:'',
    username: '',
    repo: ''
  },
  methods: {
    changeRepo: function(){
      var splitData = this.fullRepoName.split('/');
      this.username = splitData[0];
      this.repo = splitData[1];

      console.group("Vue Data");
      console.log("Full Repo Name: ", this.fullRepoName);
      console.log("Username: ", this.username);
      console.log("Repo: ", this.repo);
      console.groupEnd("Vue Data");
    }
  }
})
