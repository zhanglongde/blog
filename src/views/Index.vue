<template>
  <div class="by-container index">
    <div class="by-content">
      <div class="left-col">
        <div class="left-header">
          <div class="avatar-wrapper">
            <img src="../assets/images/dim.jpg"/>
          </div>
          <h1 class="author">zhanglongde</h1>
          <p class="sub-title">
            Life is a series commas,not periods.
          </p>
        </div>
        <div class="left-bottom">
          <ul class="left-menu">
            <li class="left-menu-item"><a href="/">主页</a></li>
            <li class="left-menu-item"><a href="#">所有文章</a></li>
            <li class="left-menu-item"><a href="#">标签云</a></li>
            <li class="left-menu-item"><a :href="resume">关于我</a></li>
          </ul>
          <ul class="left-nav">
            <li class="left-nav-item"><a :href="email">Email</a></li>
            <li class="left-nav-item"><a :href="github">Github</a></li>
            <li class="left-nav-item"><a href="#">知乎</a></li>
            <li class="left-nav-item"><a href="#">豆瓣</a></li>
          </ul>
        </div>
      </div>
      <div class="right-col">
         <article class="article-index" v-for="issue in issues">
           <h1 class="article-header">
             <a :href="issue.url">{{issue.title}}</a>
           </h1>
           <p class="article-entry scroll-v" v-html="getMdHTML(issue.body)"></p>
           <div class="article-info"></div>
         </article>
      </div>
    </div>
  </div>
</template>
<script>
  import GitHub from 'github-api'
  import API from '../service'
  import {markdown} from 'markdown'
  import config from '../config'
  export default {
    name: 'Index',
    data () {
      return {
        issues: [],
        ...config.account
      }
    },
    methods: {
      getAuth () {
        let gh = new GitHub({
          username: 'zhanglongde',
          password: '***'
          /* also acceptable:
           token: 'MY_OAUTH_TOKEN'
           */
        })

        var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
        me.listNotifications(function(err, notifications) {
          // do some stuff
        })

        var clayreimann = gh.getUser('zhanglongde');
        clayreimann.listStarredRepos(function(err, repos) {
          // look at all the starred repos!
          console.log(repos)
        })
      },
      async getRepoIssues () {
        try {
          let response = await API.getRepoIssues('zhanglongde', 'zhanglongde.github.io')
          console.log(response)
          this.issues = response.data
        } catch (error) {
          console.log(error)
        }
      },
      getMdHTML (html) {
        return markdown.toHTML(html)
      }
    },
    mounted () {
      this.getRepoIssues()
    }
  }
</script>
