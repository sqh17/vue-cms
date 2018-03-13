<template>
    <div class="tmpl">
        <my-title title="购物车"></my-title>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(item,index) in prods" :key="item.id">
                    <mt-switch v-model="item.isSelected"></mt-switch>
                    <img :src="item.thumb_path">
                    <div class="pay-calc">
                        <p>{{item.title}}</p>
                        <div class="calc">
                            <span>￥{{item.sell_price}}</span>
                            <span @click="substract(index)">-</span>
                            <span>{{item.num}}</span>
                            <span @click="add(index)">+</span>
                            <a href="javascript:;" @click="del(index)">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品{{payment.totalCount}}件，总价￥{{payment.totalPrice}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import ShopCartTools from '../commons/shopCartTools.js';
export default {
    data() {
            return {
                prods: []
            }
        }, created() {
            //获取购物车数据数组(Localstorage)
            let shopCart = ShopCartTools.getShopCart();
            if (shopCart.length === 0) return; //禁止在购物车没有商品的情况下发起请求
            let url = this.getUrl(shopCart);
            this.$http.get(url)
                .then(res => {
                    let temp = res.body.message;
                    temp.forEach((p) => {
                        p.isSelected = true;
                        for (var i = shopCart.length - 1; i >= 0; i--) {
                            if (shopCart[i].id == p.id) {
                                p.num = shopCart[i].num;
                                break;
                            }
                        }
                    });
                    this.prods = temp; //temp当前具备的所有属性。赋值过去并响应式
                }, res => {
                    console.log('获取购物车数据失败');
                });

        }, methods: {
            getUrl(shopCart) {
                let url = this.$myConfig.host + '/api/goods/getshopcarlist/';
                shopCart.forEach(function(p) {
                    url += p.id + ',';
                });
                return url.substring(0, url.length - 1);
            },
            add(index) {
                this.prods[index].num++;
            },
            substract(index) {
                if (this.prods[index].num > 1) {
                    this.prods[index].num--;
                }
            },
            del(index) {
                if (window.confirm('亲,确定要删除吗?')) {
                    //删除当前this.prods
                    this.prods.splice(index, 1);
                    //删除Localstorage中的数据
                    ShopCartTools.delProd(index);
                }
            }
        } //声明计算属性 一定要在内部使用this.要监视的属性
        , computed: {
            payment() {
                let totalPrice = 0;
                let totalCount = 0;
                this.prods.forEach(function(p) {
                    if (p.isSelected) {
                        totalCount++;
                        totalPrice += p.num * p.sell_price;
                    }
                });
                return {
                    totalPrice,
                    totalCount
                };
            }
        }
}
</script>
<style scoped>
.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}

.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}

.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3) {
    display: inline-block;
}

.pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}

.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}

.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}

.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}

.calc a {
    margin-left: 20px;
}

.show-1,
.show-2 {
    display: inline-block;
}

.show-1,
.show-2 {
    margin-left: 30px;
}

.show-price {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
