<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- 声明式导航,必须要有to属性-->
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea animate__animated  animate__fadeIn animate__delay-1s">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
          <!-- 有业务逻辑处理，使用编程式导航 -->
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Mymitt from '@/plugins/jsPlugins/mymitt.js'

onMounted(() => {
  // 清除关键字
  const clear = () => {
    keyword.value='';
  }
  Mymitt.on('clearKeyword',clear)
})
//实例化一个路由，然后获取路由信息
const router = useRouter()

const keyword = ref('')
const k = ref('')

function goSearch () {
  // 路由传参,可以通过字符串形式
  // router.push('/search/' + keyword.value + '?k=' + keyword.value)
  // 模板字符串传参,不需要加上前面的路径了
  // router.push({ path: `${keyword.value}?k=${keyword.value}` })
  // 传递对象
  //有push和replace
  let location = {
    name: 'search',
    // 将点击的query 内容也传递过来
    params: { keyword: keyword.value || undefined },
    query:router.currentRoute.value.query
  }
  // location.query=router.currentRoute.value.query;
  router.replace(location).catch(err => {
    console.log(err)
  })

  /* console.log(router.currentRoute.value.fullPath)
  console.log(keyword.value) */
  /*  // console.log(router.options)

   console.log(router.getRoutes()[0].path)
  console.log(router.resolve('/home').fullPath)
  const data = router.resolve('/home').fullPath
  if (router.resolve('/home').fullPath !== '/home') {
    console.log(22)
  } */
}
</script>
<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }

      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }

        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }

        }
      }
    }
  }
}
</style>
