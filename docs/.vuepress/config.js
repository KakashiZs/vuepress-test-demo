module.exports = {
    title: 'Title of Document', // head > title 标签里的内容
    description: 'this is description of the website', // 内容保存在 head > meta
    
    // 导航和侧边栏项目设置
    themeConfig: {
        // 右上角的导航, 可以添加外链和本地文档链接
        nav: [
            { text: '主页', link: '/' },
            { text: '导航1', link: 'http://www.baidu.com' },
            { text: '导航2', link: '/readme.md' },
            { text: '导航3', link: 'http://www.bing.com' }
        ],
        sidebar: [
            ['/', '简介'],
            {
                title: 'basic',
                // collapsable: true,
                children: [
                    '/basic/button.md',
                    '/basic/icon.md'
                ]
            },
            {
                title: '数据展示',
                collapsable: true,
                children: [
                    '/data-display/slider.md'
                ]
            },
            ['/', '关于']
        ]
    },
    plugins: [
        ['demo-code', {
            minHeight: 0,
            showText: 'code',
            hideText: 'hide',
        }]
    ]
}
