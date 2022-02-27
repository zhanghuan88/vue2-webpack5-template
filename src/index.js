import Vue from 'vue';
import App from './App';
import './styles/index.scss';
const app = new Vue({
    render: h => h(App),
});
app.$mount('#app');
