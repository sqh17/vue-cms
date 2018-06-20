<template>
    <div class="bg">
        <my-title title="查找一下"></my-title>
        <div id="box">
     			<input type="text" v-model="keyword" @keyup="get(e)" placeholder="请输入要查询的词语">
          <button class="search-btn">搜一下</button>
     			<ul>
      				<li v-for="value in myData">{{value}}</li>
     			</ul>
     			<p v-show="myData.length==0">暂无数据...</p>
		    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        	myData:[],
     		  keyword:'',
        }
    },methods:{

    	get:function(){
      		this.$http.jsonp('https://sug.so.360.cn/suggest?word=' +this.keyword+ '&encodein=utf-8&encodeout=utf-8')
      		.then(function(res){
      			// console.log(res.data.s);
                this.myData = res.data.s;
            });
    }
    }
}
</script>
<style scoped>
  #box{

   margin-top: 20px;
   margin-left: 10px;
   margin-right: 5px;
  }
  input{
    width: 250px;
    height: 35px;
  }
  ul{
    margin-top: -5px;
  }
  li{
    list-style: none;
    margin-left: -35px;

  }
  p{
    height:100px;
    width: 100px;
    margin-top: -20px;
    margin-left: 10px;
    display: block;
  }

</style>

