
module.exports = {
  template: require('./template.html'),
  data: function() {
    return {
      path: '/',
      files: []
    };
  },
  props: {
    user: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    }
  },
  methods: {
    getFiles: function() {
      this.$http.get('https://api.github.com/repos/' + this.fullRepoUrl + '/contents' + this.path,
      function(data) {
        this.files = data;
      })
    }
  },
  computed: {
    fullRepoUrl: function() {
      return this.username + '/' + this.repo;
    }
  },
  created: function() {
    if (this.username && this.repo) this.getFiles();
  }
}
