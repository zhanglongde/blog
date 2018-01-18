import Vue from 'vue'
import config from '../config'

export default {
  userName: 'zhanglongde',
  url: {
    account: config.apiRoot + '/users',
    repo: config.apiRoot + '/repos'
  },
  getAccount (userName) {
    // https://api.github.com/users/zhanglongde
    return Vue.axios.get(`${this.url.account}/${userName}`)
  },
  getRepos (userName) {
    // https://api.github.com/users/zhanglongde/repos
    return Vue.axios.get(`${this.url.account}/${userName}/repos`)
  },
  getRepo (userName, repoName) {
    // https://api.github.com/repos/zhanglongde/zhanglongde.github.io
    return Vue.axios.get(`${this.url.repo}/${userName}/${repoName}`)
  },
  getRepoIssues (userName, repoName) {
    // https://api.github.com/repos/zhanglongde/zhanglongde.github.io/issues
    return Vue.axios.get(`${this.url.repo}/${userName}/${repoName}/issues`)
  },
  getIssueComments (userName, repoName, issueNumber) {
    // https://api.github.com/repos/zhanglongde/zhanglongde.github.io/issues/63/comments
    return Vue.axios.get(`${this.url.repo}/${userName}/${repoName}/issues/${issueNumber}/comments`)
  }
}
