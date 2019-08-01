<template>
    
  <div class="top_menu_bar">
     
    <div class="top_menu_more">
      <div class="list_shadow"></div>
      <a class="more_btn" href="javascript:void(0)">
        <span class="cross"></span>
      </a>
    </div>
    <div class="top_menu_list">
      <!-- <a
        href="javascript:void(0)"
        data-channel="__all__"
        data-query="channel=__all__"
        class="btn"
      >推荐</a> -->
       <router-link to="/" class="btn" active-class="active" exact>推荐</router-link>
      <router-link to="/navVideo" class="btn" active-class="active">视频</router-link>
      <router-link to="/navHot" class="btn" active-class="active">热点</router-link>
      <router-link to="/navSociety" class="btn" active-class="active">社会</router-link>
      <router-link to="/navRecreation" class="btn" active-class="active">娱乐</router-link>

      <!-- <a
        href="javascript:void(0)"
        data-channel="video"
        data-query="channel=video"
        class="btn cur"
      >视频</a> -->
      <!-- <a
        href="javascript:void(0)"
        data-channel="news_hot"
        data-query="channel=news_hot"
        class="btn"
      >热点</a> -->
      <a
        href="javascript:void(0)"
        data-channel="news_society"
        data-query="channel=news_society"
        class="btn"
      >社会</a>
      <a
        href="javascript:void(0)"
        data-channel="news_entertainment"
        data-query="channel=news_entertainment"
        class="btn"
      >娱乐</a>
      <a
        href="javascript:void(0)"
        data-channel="news_military"
        data-query="channel=news_military"
        class="btn"
      >军事</a>
      <a
        href="javascript:void(0)"
        data-channel="news_tech"
        data-query="channel=news_tech"
        class="btn"
      >科技</a>
      <a
        href="javascript:void(0)"
        data-channel="news_car"
        data-query="channel=news_car"
        class="btn"
      >汽车</a>
      <a
        href="javascript:void(0)"
        data-channel="news_house"
        data-query="channel=news_house"
        class="btn"
      >房产</a>
      <a
        href="javascript:void(0)"
        data-channel="new_furnish"
        data-query="channel=new_furnish"
        class="btn"
      >家居</a>
      <a
        href="javascript:void(0)"
        data-channel="news_sports"
        data-query="channel=news_sports"
        class="btn"
      >体育</a>
      <a
        href="javascript:void(0)"
        data-channel="news_finance"
        data-query="channel=news_finance"
        class="btn"
      >财经</a>
    </div>
  </div>
</template>

<script>
export default {
    // data(){
    //     return {
    //         title:['推荐','视频','热点','社会','娱乐','军事','科技','汽车','房产','家具','体育','财经']
    //     }
    // },


    methods:{
        aaa(){
            this.$router.push({path:'home2',query:{"id":"asdas"}})
        }
    }
};
</script>

<style>
.active {
   color: #fe4070;
}
</style>
