<template>
    <div class="detail">
      <h1></h1>
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
        .then(res => {
          this.blogData = res.data
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

<style scoped>

</style>
