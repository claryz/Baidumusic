<template>
  <div>
    <!-- 新歌 -->
    <div class="topBg">
      <img src="http://hiphotos.qianqian.com/ting/pic/item/e850352ac65c1038cb0f3cb0b0119313b07e894b.jpg" alt />
    </div>
    <div class="center" v-for="item in songList" :key="item.id">
      <ul>
        <li>
          <p>{{item.title}}</p>
          <p>{{item.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      songList:[]
    }
  },
 created(){
this.getList();
},
  methods:{
    getList(){
      let test = this.HOST+'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1';
      this.$axios.get(test)
      .then(res=>{
        this.songList = res.data.song_list
 
        // console.log(res)
      })
      .catch()
      
    }
  }
};
</script>
<style  scoped>
ul li{
    margin-top: 10px;
    padding-bottom: 5px;
    list-style: none;
    border-bottom: 1px solid #999;
}
.topBg img {
  width: 100%;
  height: 150px;
}
.center {
    width:80%;
    height: auto;
    margin: 0 auto;
}
li p {
    margin: 0;
    color: #191919;
    font-size: 14px;
}
p:nth-of-type(2){
    color: #919191;
    font-size: 12px;
}
.lastLi {
    border: none;
}

</style>