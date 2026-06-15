import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CCWSPro 文档',
  description: 'CCWSPro 使用、配置与部署说明',
  cleanUrls: true,
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
      { text: '使用指南', link: '/guide/register' },
      { text: '疑难解答', link: '/troubleshooting/' },
      { text: '发布上线', link: '/publish/deploy' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '注册账号', link: '/guide/register' },
            { text: '请求地址 / Key', link: '/guide/api-key' },
            { text: '充值 / 续费', link: '/guide/recharge' },
            { text: '售后与支持', link: '/guide/support' },
            { text: '商务合作', link: '/guide/business' }
          ]
        },
        {
          text: '工具配置',
          items: [
            { text: 'Node.js 与 Git 环境', link: '/guide/nodejs-git' },
            { text: '配置切换工具', link: '/guide/config-switch' },
            { text: 'Claude Code 配置', link: '/guide/claude-code' },
            { text: 'Codex 配置', link: '/guide/codex' }
          ]
        }
      ],
      '/troubleshooting/': [
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
      '/publish/': [
        {
          text: '发布上线',
          items: [
            { text: '部署到线上', link: '/publish/deploy' },
            { text: '自定义域名', link: '/publish/custom-domain' },
            { text: '替换站点图片', link: '/publish/image-replacement' }
          ]
        }
      ]
    },
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
