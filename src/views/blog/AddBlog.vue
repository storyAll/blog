<template>
  <div class="add-blog">
    <editor></editor>
  </div>
</template>

<script>
import Editor from 'components/Editor'
export default {
  components: {Editor},
  data () {
    return {
      title: ''
    }
  }
}
</script>

<style scoped lang="less">
  .add-blog{
    margin-top: 8vh;
    text-align: left;
    padding: 20px;
  }
</style>
