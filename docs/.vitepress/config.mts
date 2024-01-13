import {defineConfig} from 'vitepress';

export default defineConfig({
    title: 'MagicMC',
    titleTemplate: ':title - MagicMC',
    base: '/',
    head: [['meta', {name: 'theme-color', content: '#3c8772'}]],
    srcDir: './src',
    outDir: './dist',
    description: '为玩家带一个来更好的 Minecarft',
    markdown: {
        async config(md) {
        }
    },
    lang: 'zh-CN',
    lastUpdated: true,
    ignoreDeadLinks: true,
    themeConfig: {
        nav: [
            {text: '开始', link: '/guide/index', activeMatch: '/guide/'},
            {
                text: 'Wiki',
                items: [
                    {text: 'Wiki', link: '/wiki/index'}
                ]
            },
            {text: '关于我们', link: '/about/index', activeMatch: '/about/'},
            {
                text: '开发者',
                items: [
                    {text: '关于开发者', link: '/developer/index'}
                ]
            }],
        sidebar: {
            '/guide/': [
                {text: '开始', link: '/guide/index'},
            ],
            '/wiki/': [
                {text: 'Wiki', link: '/wiki/index'}
            ],
            '/about/': [
                {text: '关于我们', link: '/about/index'}
            ],
            '/developer/': [
                {text: '关于开发者', link: '/developer/index'}
            ]
        },
        footer: {
            message: 'Released under the <a href="https://github.com/MagicMC-Dev/MagicMC-Doc/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2022-2024 <a href="https://github.com/MagicMC-Dev">INSide_734</a>'
        },
        editLink: {
            pattern: 'https://github.com/MagicMC-Dev/MagicMC-Doc/edit/main/docs/src/:path', text: '修正文档',
        },
        socialLinks: [{icon: 'github', link: 'https://github.com/MagicMC-Dev'}],
        lastUpdatedText: '上次更新时间',
        docFooter: {
            prev: '上一节', next: '下一节'
        }
    }
})
