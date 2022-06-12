<template>
  <div>
    <!--    search模块-->
    <TypeNav/>
    <div class="main">
      <div class="py-container">
        <!--bread ,选过的元素,面包屑-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <!--  面包屑的位置-->
          <ul class="fl sui-tag">
            <!--            <li class="with-x">手机</li>-->
            <!--  导航列表点击内容 -->
            <li class="with-x" v-if="searchParams.categoryName">{{ searchParams.categoryName }}
              <em @click="removeCategoryName"> ×</em>
            </li>
            <!--  搜索框的内容-->
            <li class="with-x" v-if="searchParams.keyword">{{ searchParams.keyword }}
              <em @click="removeKeyword"> ×</em>
            </li>
            <!-- 品牌信息展示  -->
            <li class="with-x" v-if="searchParams.trademark">{{ searchParams.trademark.split(':')[1] }}
              <em @click="removeTrademark"> ×</em>
            </li>
            <!-- 商品属性值面包屑的地方 -->
            <li class="with-x" v-for="(attrValue, index) in searchParams.props" :key="index">
              <!-- 将选中的属性内容展示 -->
              {{ attrValue.split(':')[1] }}
              <em @click="removeAttr(index)"> ×</em>
            </li>

            <!--            <li class="with-x">华为<i>×</i></li>
                        <li class="with-x">OPPO<i>×</i></li>-->
          </ul>
        </div>

        <!--selector  这个是子组件 点击搜索或者导航栏的内容会跳转 -->
        <SearchSelector @trademarkList="trademarkInfo" @AttrInfo="GetattrInfo"/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li class="active">
                  <a href="#">综合</a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li>
                  <a href="#">价格⬆</a>
                </li>
                <li>
                  <a href="#">价格⬇</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="(good, index) in goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="item.html" target="_blank"><img :src="good.defaultImg"/></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ </em>
                      <i>{{ good.price }}.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a :title="good.title">{{ good.title }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>{{ good.id }}</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:viod(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="fr page">
            <div class="sui-pagination clearfix">
              <ul>
                <li class="prev disabled">
                  <a href="#">«上一页</a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li class="dotted"><span>...</span></li>
                <li class="next">
                  <a href="#">下一页»</a>
                </li>
              </ul>
              <div><span>共10页&nbsp;</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  <h1>路由参数{{ $route.path }}</h1>
    &lt;!&ndash;  <h1>params参数&#45;&#45;{{ keyword }}</h1>
      <h1>query参数&#45;&#45;{{ query }}</h1>&ndash;&gt;
    <h1>params参数&#45;&#45;{{ $route.params.keyword }}</h1>
    <h1>query参数&#45;&#45;{{ $route.query.k }}</h1>-->
</template>

<script setup lang="ts">
import SearchSelector from './SearchSelector/SearchSelector.vue'
import { useStore } from 'vuex'
import {
  computed,
  nextTick,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
  watch
} from 'vue'
import { useRouter } from 'vue-router'
import Mymitt from '@/plugins/jsPlugins/mymitt.js'

const store = useStore()
// 实例化一个路由
const Router = useRouter()
//钩子函数:beforeCreate、created、beforeMount.执行都是在mounted之前
//整理参数不能在：beforeCreate因为不能获取VC属性、方法(vue2的写法) vue3.2以后setup先执行
onBeforeMount(() => {
  // console.log(searchParams)
  // 合并对象 合并替换这些参数
  Object.assign(searchParams, query, params)
})

//组件挂载完毕次钩子执行一次,发请求
onMounted(() => {
  //在发请求之前:整理用户搜索的参数
  //组件挂载完毕发一次请求
  getData()
  //获取用户信息
})
// 从路由中获取查询的参数
let params = ref(Router.currentRoute.value.params)
let query = ref(Router.currentRoute.value.query)
// 这个 searchParams 是记录 点击搜索页面的各个参数 应该换成reactive更好
// ts 的数组必须抽离出来
let MyProps: any[] = []
let searchParams = ref({
//带给服务器的数据
// 一、二、三级分类的id
  category1Id: '',
  category2Id: '',
  category3Id: '',
  // 分类的名字
  categoryName: '',
  // 关键字
  keyword: '',
  //平台售卖属性操作带的参数
  props: MyProps,
  //商品 评分
  trademark: '',
  // 排序
  order: '',
  // 页面
  pageNo: 1,
  // 每一页展示数据的个数
  pageSize: 10
})

/* import { defineProps } from 'vue'
defineProps({
  keyword: String || Number,
  query: String || Number
}) */
//发送请求
function getData () {
  //通知Vuex发请求、仓库存储数据
  store.dispatch('getSearchList', searchParams.value)
}

// 删除导航点击的query
function removeCategoryName () {
  // 删除名字  设置undefined 可以 使得参数传递不过去
  searchParams.value.categoryName = ''
  searchParams.value.category1Id = ''
  searchParams.value.category2Id = ''
  searchParams.value.category3Id = ''
  // 再次发请求 监听路由会发送请求 所以在这个地方可以不发
  // getData()

  // console.log(query)
  // Object.assign(searchParams, query, params)
  // 修改路由的信息
  // let location: any = { name: 'search' }
  //合并对象
  // location.params =params
  // console.log(params)
  // console.log('参数',location)
  // Router.push(location)
  Router.push({
    name: 'search',
    params: Router.currentRoute.value.params
  })
}

// 删除关键字
function removeKeyword () {
  // 删除名字  设置undefined 可以 使得参数传递不过去
  searchParams.value.keyword = ''
  // 再次发请求
  // getData()

  // 重新跳转路由
  // let location: any = { name: 'search' }
  //合并对象
  // location.query =query
  // console.log('参数',location)
  Router.push({
    name: 'search',
    query: Router.currentRoute.value.query
  })
  // 移除搜索框的内容 mitt用上 替代之前的。 Vue3中已经没有了EventBus跨组件通信，替代方案mitt.js，但原理方式EventBus是一样的
  Mymitt.emit('clearKeyword')

}

// 这个地方需要使用 computed获取数据
const goodsList = computed(() => store.state.search.searchList.goodsList)
// const searchList = computed(() => store.state.search.searchList)
// 监听路由
watch(Router.currentRoute, (newValue) => {
  // console.log(router.currentRoute.value)
  // 当路由的参数发生变化，再次进行合并参数
  Object.assign(searchParams.value, newValue.query, newValue.params)
  // console.log('ss',query)
  // console.log(searchParams)
  // console.log('newValue:',newValue.query)
  // 再次发请求
  getData()
  // 置空id
  searchParams.value.category1Id = ''
  searchParams.value.category2Id = ''
  searchParams.value.category3Id = ''

  /* nextTick(() => {
    // 监听到变化的时候，传输数值
  }) */
})

// 接收子组件商品 的内容
function trademarkInfo (trademark: any) {
  // 将接受的内容传递给面包屑 这个地方需要使用模板字符串
  searchParams.value.trademark = `${trademark.tmId}:${trademark.tmName}`
  // console.log(trademark)
  // 再次发请求 获取search模块数据展示
  getData()
}

// 置空品牌信息
function removeTrademark () {
  searchParams.value.trademark = ''
  getData()
}

// 处理子组件传来的商品信息
function GetattrInfo (attr: any, attrValue: any) {
  // 先用一个数组接收
  let newProps: any = `${attr.attrId}:${attrValue}:${attr.attrName}`
  // 先判断一下这个数据是否被选中过
  if (searchParams.value.props.includes(newProps)) {
    searchParams.value.props.push(newProps)
    //再次发请求，获取最新的数据展示即可
    getData()
  }
}

//商品属性值面包屑删除回调
function removeAttr(index:any){
 searchParams.value.props.splice(index, 1);
  //在发一次请求
  getData();
}

</script>
<script lang="ts"></script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>
