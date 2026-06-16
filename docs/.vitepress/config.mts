import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CCWSPro 文档',
  description: 'CCWSPro 注册、充值、环境配置与疑难解答',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  srcExclude: ['publish/**/*.md'],
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: '/images/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '注册与充值', link: '/guide/register' },
      { text: '环境配置', link: '/guide/nodejs-git' },
      { text: '疑难解答', link: '/troubleshooting/' }
    ],
    sidebar: [
      {
        text: '注册与充值',
        items: [
          { text: '注册账号', link: '/guide/register' },
          { text: '充值 / 续费', link: '/guide/recharge' },
          { text: '售后与支持', link: '/guide/support' },
          { text: '商务合作', link: '/guide/business' }
        ]
      },
      {
        text: '环境配置',
        items: [
          { text: 'Node.js 与 Git 环境', link: '/guide/nodejs-git' },
          { text: '请求地址 / API Key', link: '/guide/api-key' },
          { text: '配置切换工具', link: '/guide/config-switch' },
          { text: 'Codex 配置', link: '/guide/codex' }
        ]
      },
      {
        text: '疑难解答',
        items: [
          { text: '总览', link: '/troubleshooting/' },
          { text: '安装与启动', link: '/troubleshooting/install' },
          { text: '认证与 API Key', link: '/troubleshooting/auth' },
          { text: '网络与连接', link: '/troubleshooting/network' },
          { text: '请求错误', link: '/troubleshooting/request-error' },
          { text: '权限问题', link: '/troubleshooting/permission' },
          { text: '缓存与计费', link: '/troubleshooting/cache-billing' },
          { text: '工具兼容', link: '/troubleshooting/integration' },
          { text: 'Codex CLI', link: '/troubleshooting/codex' },
          { text: '进阶优化', link: '/troubleshooting/advanced' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新'
    },
    footer: {
      message: 'CCWSPro 文档仅作为自有站点说明模板，请按实际产品信息替换内容。',
      copyright: 'Copyright © 2026 CCWSPro'
    }
  }
})
