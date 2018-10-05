<template>
    <div class="detail">
      <h3>{{blogDetail.title}}</h3>
      <h6>{{blogDetail.releaseTime}}</h6>
      <p v-html="blogDetail.content"></p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      blogDetail: {}
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail: function () {
      this.$post('blog/queryById', {'id': this.id})
        .then((res) => {
          this.blogDetail = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    id: function () {
      this.getDetail()
    }
  },
  computed: {
    ...mapGetters([
      'id'
    ])
  }
}
</script>

<style scoped lang="less">
.detail{
  padding-top: 8vh;
}
</style>
