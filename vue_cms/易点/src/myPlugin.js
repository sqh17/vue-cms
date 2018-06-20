let config = {
    host: 'http://localhost:8899'
}
export default {
    install: function(Vue) {
        Vue.prototype.$myConfig = config;
    }
}
