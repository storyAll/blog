<template>
  <el-form ref="form" :model="form">
    <el-form-item>
      <el-input v-model="form.title"  placeholder="标题"></el-input>
    </el-form-item>
    <el-form-item>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList2"
        list-type="picture">
        <el-button size="medium" type="primary">点击上传图片</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <editor id='tinymce' v-model='form.content' :init='init'></editor>
    </el-form-item>
    <el-form-item class="submit">
        <el-button size="medium" @click="addBlog"  type="primary">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapGetters} from 'vuex'
import {MessageBox} from 'element-ui'
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  components: {
    Editor
  },
  data () {
    return {
      customHtml: '',
      init: {
        language_url: '/static/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/lightgray',
        height: 300,
        plugins: 'link lists  table colorpicker textcolor wordcount contextmenu',
        menubar: false,
        toolbar:
          'bold italic underline strikethrough header | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink code | removeformat table',
        branding: false
      },
      form: {
        title: '',
        content: '',
        imgUrl: ''
      },
      fileList2: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    addBlog: function () {
      this.$post('blog/add', {
        'username': this.user.username,
        'title': this.form.title,
        'content': this.form.content,
        'imgUrl': this.form.imgUrl
      }).then(res => {
        if (res.code === 200) {
          MessageBox.alert('提交成功')
          this.$router.push('/blog')
        } else {
          MessageBox.alert('提交失败')
          this.$router.push('/home')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    tinymce.init({})
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

<style scoped lang="less">
  .upload-demo {
    .el-upload__tip{
      padding-left:10px;
    }
  }
  .submit{
    button{
      width: 120px;
    }
  }
</style>
