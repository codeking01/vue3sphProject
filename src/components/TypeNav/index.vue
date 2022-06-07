<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!--  事件委派||事件代理 -->
      <div @mouseleave="leaveShow" :class="{specialcur:true}" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动分类     -->
        <!--        <transition :enter-active-class="
        " :leave-active-class="leaveClass">-->
        <!--          name="custom-classes-transition"-->
        <!--          enter-active-class="animated bounceInDown"-->
        <!--          leave-active-class="animated bounceInDown"-->

        <div class="sort" v-show="show">
          <!--  使用事件委派，父类传递给子类 -->
          <div class="all-sort-list2" @click="goSearch">
            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId">
              <h3 @mouseenter="ChangeIndex(index)" :class="{cur:index==Currentindex}">
                <a href="javascript:" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId"
                   class="animate__animated  animate__fadeInDown">{{ c1.categoryName }}</a>
              </h3>
              <!-- 二级三级分类    -->
              <div class="item-list clearfix">
                <div class="subitem animate__animated  animate__fadeInDown" v-for="(c2,index) in c1.categoryChild"
                     :key="c2.categoryChild">
                  <dl class="fore">
                    <dt>
                      <a href="javascript:" :data-categoryName="c2.categoryName"
                         :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryChild">
                        <a href="javascript:" :data-categoryName="c3.categoryName"
                           :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        </transition>-->

      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { throttle } from 'lodash'
import Router from '@/router'
import { useRouter } from 'vue-router'

//组件的显示标志
const show = ref(true)
//实例化一个路由，然后获取路由信息
const router = useRouter()

//实例化一个store对象
const store = useStore()
const categoryList = computed(() => store.state.home.categoryList)
onMounted(() => {

    //装载以后可以使得它隐藏
    if (router.currentRoute.value.path != '/home') {
      show.value = false
    }
  }
)

//鼠标移入 使得列表内容出现
function enterShow () {
  if (router.currentRoute.value.path != '/home') {
    show.value = true
  }
}

//这个用来判断操作鼠标移上去的标志
const Currentindex = ref(-1)
const ChangeIndex = throttle(function (value: any) {
  Currentindex.value = value
}, 50)

function leaveShow () {
  Currentindex.value = -1
  if (router.currentRoute.value.path !== '/home') {
    show.value = false
  }
}

//点击搜索
function goSearch (event: any) {
  // console.log(event.target)let
  //event.target.dataset 取出来的数据 前面的命名必须规范写成 :data-XXX
  let {
    categoryname,
    category1id,
    category2id,
    category3id
  } = event.target.dataset
  if (categoryname) {
    let location: any = { name: 'search' }
    let query: any = { categoryname: categoryname }
    if (category1id) {
      query.category1Id = category1id
    } else if (category2id) {
      query.category1Id = category2id
    } else if (category3id) {
      query.category1Id = category2id
    }
    // 需要把 parms参数也带进去
    //获取路由参数 是通过 router.currentRoute.value.params
    // console.log(router.currentRoute.value.params)
    // 将搜索框中的参数 也一并传递过去
    location.params=router.currentRoute.value.params;

    //合并对象
    location.query = query
    Router.push(location)
  }
}
</script>
<script lang="ts">
export default {
  name: 'typenav'
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        height: 100%;
        overflow: auto;
        /* height:480px;
         overflow: hidden;*/

        .item {
          h3 {
            line-height: 28.8px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .cur {
            background-color: skyblue;
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        //样式解决 很简单 .item:hover {background-color: skyblue}

      }
    }
  }
}

</style>
