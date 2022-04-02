import Vue from 'vue';
import App from './App';
import store from "./store/index";
import './styles/index.scss';

const app = new Vue({
    render: h => h(App),
    store
});
alert("11")
app.$mount('#app');
