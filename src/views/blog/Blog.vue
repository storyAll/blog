<template>
  <div class="blog">
    <div class="pages">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div class="blog-content">
              <img width="100%" src="../../assets/sn.jpg" alt="">
              <div class="blog-detail">
                <h4><a href="">How To Design Fresh and Clean</a></h4>
                <div class="date">
                  <span><i class="fa fa-calendar"></i> July 22, 2016</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi sit aperiam quia voluptatem
                  odio, facere iusto magni sunt, cumque quae, molestias temporibus ducimus repellendus!</p>
                <div class="btn btn-default">Read More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog'
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
