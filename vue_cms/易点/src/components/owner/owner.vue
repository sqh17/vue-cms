<template>
    <div class="bg">
        <my-title title="个人中心"></my-title>
        <div class="mytop">
        	<a href="#">
                <div class="topleft">
                    <img src="../../../static/images/head-img.jpg" height="80" width="80" class="toppic">
                </div>
                <div class="topmiddle">
                	<p class="name">昵称：默恋微凉</p>
                    <p class="name">性别: 男</p>
                </div>
                <div class="topright">
                    <img src="../../../static/images/chat-info-qr.png" style="width:70px;height:70px">
                </div>
            </a>
        </div>
        <div class="mymiddle">
        	<div>
        		<ul>
        			<li><a href="#">
        				<!-- <img src="../../../static/images/me_more-my-album.png"> -->
        				相册</a></li>
        			<li><a href="#">收藏</a></li>
        		</ul>
        	</div>
			<div>
        		<ul>
        			<li><a href="#">钱包</a></li>
        			<li><a href="#">卡包</a></li>
        		</ul>
        	</div>
        	<div>
        		<ul>
        			<li><a href="#">表情</a></li>
        		</ul>
        	</div>
        	<div>
        		<ul>
        			<li><a href="#">设置</a></li>
        		</ul>
        	</div>
        </div>
       
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
	.bg{
		height: 100%;
		width: 100%;
		background-image: url(../../../static/images/login-bg.jpg);
	}
	.mytop{
		height: 100px;
		width: 100%;
		border-bottom: 1px solid #ccc;

	}
	.toppic{
		border-radius: 50%;
		/* margin-left: 20px;
		margin-top: 10px; */
	}
	.topleft{
		float: left;
		height: 82px;
		width: 82px;
		border:1px solid #ccc;
		margin-left: 20px;
		margin-top: 10px;
	}
	.topmiddle{
		float: left;
		margin-top: 36px;
		margin-left: 20px;

	}
	.name{
		font-size: 18px;
	}
	/* .topmiddle p:nth-child(2){
		margin-left: 13px;
	} */
	.topright{
		float: right;
		margin-right: 15px;
		margin-top: 20px;
	}
	.mymiddle{
		height: 500px;
		width: 100%;
		/* background:#F7F7F7; */
	}
	ul{
		/* background: white; */
		margin-top: 40px;
	}
	li{
		list-style: none;
		margin:10px;
		font-size: 20px;
		height: 30px;
		line-height: 30px;
	}
	li img {
		margin-top: -5px;
	}
</style>

