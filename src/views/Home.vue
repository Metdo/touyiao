<template>
    <div class="home">
        <HomeHead />
        <HomeNav />
        <!-- <HomeList/> -->
        <!-- <router-view /> -->
    </div>
</template>

<script> 

//引入页面样式


import HomeHead from '../components/HomeHead';
import HomeNav  from '../components/HomeNav';
import HomeList from '../components/HomeList';

// import Home2 from '../views/2.vue';



export default {
    name: 'home',
    components: {
        HomeHead,
        HomeNav,
        HomeList,
        // Home2
    }

}
</script>

<style>
/* .home{
    padding-top:81px;
} */
</style>
