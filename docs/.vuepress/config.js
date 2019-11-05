module.exports = {
    base: '/gulu-vue/',
    title: 'Zebra UI',
    description: '一套为开发者学习准备的基于 Vue 2.0 的组件库',
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '文档',
                link: '/guide/'
            },
            {
                text: '交流',
                link: 'https://github.com/118396/gulu-vue'
            },
        ],

        sidebar: [{
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/icon',
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/slides',
                    '/components/collapse',
                    '/components/cascader',
                    '/components/nav',
                    '/components/pager',
                    '/components/validate',
                    '/components/table',
                    '/components/uploader',
                ]
            },
        ]
    }
}