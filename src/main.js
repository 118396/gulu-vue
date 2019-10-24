import Vue from "vue";
import Demo from "./demo.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");




/* import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'



Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)




new Vue({
    el: '#app',
    data: {
        // loading1: false,
        // loading2: true,
        // loading3: false,
        // message: 'hi'
        // selectedTab: 'sports'
        // selectedTab: ['2','1']
        source: [{
            name: '湖北',
            children: [{
                    name: '武汉',
                    children: [{
                            name: '武昌'
                        },
                        {
                            name: '汉口'
                        },
                        {
                            name: '汉阳'
                        }
                    ]
                },
                {
                    name: '宜昌',
                    children: [{
                            name: '夷陵 '
                        },
                        {
                            name: '点军 '
                        },
                        {
                            name: '西陵 ',
                        }
                    ]
                }
            ]
        }, {
            name: '湖南',
            children: [{
                    name: '长沙',
                    children: [{
                            name: '岳麓 '
                        },
                        {
                            name: '天心 '
                        },
                        {
                            name: '芙蓉 ',
                        }
                    ]
                },
                {
                    name: '株洲',
                    children: [{
                            name: '天元 '
                        },
                        {
                            name: '芦淞 '
                        },
                        {
                            name: '荷塘 ',
                        }
                    ]
                }
            ]
        }]
    },
    created() {},

    methods: {
        // yyy(data) {
        //     console.log('yyy')
        // },
        // showToast1() {
        //     this.showToast('top')
        // },
        // showToast2() {
        //     this.showToast('middle')
        // },
        // showToast3() {
        //     this.showToast('bottom')
        // },
        // showToast(position) {
        //     this.$toast(`你的余额目前为 ${parseInt(Math.random() * 100)}。你的余额需要充值！`, {
        //         position,
        //         enableHtml: false,
        //         closeButton: {
        //             text: '已充值',
        //             callback() {
        //                 console.log('他说已经充值余额了')
        //             }
        //         },
        //         autoClose: 3,
        //     })
        // }
    }
}) */