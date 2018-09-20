<template>
  <div class="blog">
    <div class="pages">
      <div class="container">
        <div class="row"  v-for="(item,index) in blogList" :key="index">
          <div class="col s12">
            <div class="blog-content">
              <img width="100%" :src="item.imgUrl" alt="">
              <div class="blog-detail">
                <h4><a href="">{{item.title}}</a></h4>
                <div class="date">
                  <span><i class="fa fa-calendar"></i> {{item.releaseTime}}</span>
                </div>
                <p>{{item.content}}</p>
                <div @click="getDetail(item.id)">
                  <router-link tag="a" to="/blogDetail" class="btn btn-default">
                    查看全部
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      blogList: []
    }
  },
  created () {
    this.getBlogList()
  },
  methods: {
    getBlogList: function () {
      this.$get('blog/findAll')
        .then(res => {
          this.blogList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDetail: function (id) {
      this.setId(id)
    },
    ...mapMutations({
      setId: 'UPDATE_ID'
    })
  }
}
</script>

<style scoped lang="less">
  .blog {
    margin-top: 8vh;
    text-align: left;
    .pages {
      padding: 0 20px;
      .blog-content{
        padding: 20px;
        .blog-detail {
          /*font-size:18px;*/
          color: #999;
          border: 1px solid #ddd;
          padding: 20px;
          h4 {
            margin: 0;
            a {
              color: #000;
              font-weight: 600;
            }
          }
          .date {
            margin: 10px 0;
          }
          .btn-default {
            background-color: #222;
            color: #f6f6f6;
            margin: 10px 0;
          }
        }
      }
    }
  }
</style>
