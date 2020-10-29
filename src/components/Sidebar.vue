<template>
  <div class="col col-sm-3 side">
    <div class="content-side">
      <div class="content-side__sticky">
        <div class="ad">
          <span>РЕКЛАМА</span>
        </div>
      </div>
      <div class="content-side__sticky">
        <div class="active-theme">
          <span>Активные темы</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .side {
    border-radius: 5px;
    border: 1px solid #fff;
    background: #fff;
  }
  .content-side{
    position: sticky;
    top: 64px;
    border: 1px solid #ffffff;
  }
  .content-side__sticky {
    margin: 15px 0;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }
  .ad {
    margin: 100px 0;
    overflow: hidden;

  }
  .active-theme {
    margin: 50px 0;
    overflow: hidden;
  }
</style>