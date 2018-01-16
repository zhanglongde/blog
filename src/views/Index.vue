<template>
  <div class="by-container index">
    <div class="by-content">
      <div class="left-col">
        <div class="left-header">
          <div class="avatar">avatar</div>
          <h1 class="author">zhanglongde</h1>
          <p class="sub-title">
            Life is a series commas,not periods.
          </p>
        </div>
        <div class="left-bottom">
          <ul class="left-menu">
            <li class="left-menu-item"><a href="#">主页</a></li>
            <li class="left-menu-item"><a href="#">所有文章</a></li>
            <li class="left-menu-item"><a href="#">标签云</a></li>
            <li class="left-menu-item"><a href="#">关于我</a></li>
          </ul>
          <ul class="left-nav">
            <li class="left-menu-item"><a href="#">Email</a></li>
            <li class="left-menu-item"><a href="#">Github</a></li>
            <li class="left-menu-item"><a href="#">知乎</a></li>
            <li class="left-menu-item"><a href="#">豆瓣</a></li>
          </ul>
        </div>
      </div>
      <div class="right-col">
         <article class="article-index">
           <h1 class="article-header">
             <a href="#">高性能javascript</a>
           </h1>
           <p class="article-entry">
             这本书还是比较经典的，只是出得有点久了，少了当下比较流行的MVC、MVP、MVVM框架的东西，
             有一章讲DOM的，感觉比较适合jQuery的时代。
           </p>
           <div class="article-info"></div>
         </article>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
      }
    }
  }
</script>
