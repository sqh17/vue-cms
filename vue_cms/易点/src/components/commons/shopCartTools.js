var ShopCartTools = {
    //添加到Localstorage中
    addShopCart(prod) {
        let shopCart = this.getShopCart();
        let findProd = shopCart.find(function(p, index, arr) {
            //该函数会遍历该数组。知道return接受一个true为止结束遍历并返回当前元素或者下标
            return p.id == prod.id;
        });
        if (findProd) { //如果找不到元素返回undefined 找不到下标返回-1
            findProd.num += prod.num;
        } else {
            shopCart.push(prod);
        }
        //数据持久化JSON.stringify(shopCart) 将对象转换成字符串
        this.save(shopCart);
    },
    getTotalCount() { //获取购物车总数
        let shopCart = this.getShopCart();
        let sum = 0;
        shopCart.forEach(function(p) {
            sum += p.num;
        });
        return sum;
    },
    getShopCart() {
        return JSON.parse(localStorage.getItem('shopcart') || '[]');
    },
    save(sc) { //保存新数组
        localStorage.setItem('shopcart', JSON.stringify(sc));
    },
    delProd(index) { //删除元素
        let shopCart = this.getShopCart(); //获取原来的数据
        shopCart.splice(index, 1);
        this.save(shopCart);
    }
}











export default ShopCartTools;
