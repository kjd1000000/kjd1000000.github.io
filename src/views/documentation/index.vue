<template>
  <div class="app-container documentation-container">
    <iframeDseign ></iframeDseign>
    <div class="block1"></div>
    <!-- <div class="block2"></div> -->
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'
import iframeDseign from './iframeDseign'

export default {
  name: 'Documentation',
  components: { DropdownMenu ,iframeDseign},
  data() {
    return {
      articleList: [
        { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
        { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
        { title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
        { title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
        { title: 'v4.0 篇', href: 'https://juejin.im/post/5c92ff94f265da6128275a85' },
        { title: '自行封装 component', href: 'https://segmentfault.com/a/1190000009090836' },
        { title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（上）', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（下）', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
      ]
    }
  },
  methods(){
    
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  padding-top:0px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    padding: 0 16px;
    margin: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
  .block1{
        display: block;
    position: absolute;
    width: 100%;
    background-color: white;
    height: 50px;
    top: 0px;
  }
  .block2{
           display: block;
    position: absolute;
    width: 100%;
    background-color: white;
    height: 90px;
    bottom: 26px;
  }
}
</style>
