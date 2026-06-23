import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CCWSPro 文档',
  description: 'CCWSPro 用户使用说明书：Codex 安装、注册、充值、API Key、环境配置与常见问题',
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
      { text: '安装 Codex', link: '/guide/codex-install' },
      { text: '注册', link: '/guide/register' },
      { text: '充值', link: '/guide/recharge' },
      { text: 'API Key', link: '/guide/api-key' },
      { text: '环境配置', link: '/guide/nodejs-git' },
      { text: '疑难解答', link: '/troubleshooting/' }
    ],
    sidebar: [
      {
        text: '1. 下载安装 Codex',
        items: [
          { text: 'Codex 下载安装', link: '/guide/codex-install' }
        ]
      },
      {
        text: '2. 注册账号',
        items: [
          { text: '注册 / 登录', link: '/guide/register' }
        ]
      },
      {
        text: '3. 充值账户',
        items: [
          { text: '充值 / 续费', link: '/guide/recharge' },
          { text: '兑换码兑换', link: '/guide/recharge#兑换码兑换' }
        ]
      },
      {
        text: '4. 生成 API Key',
        items: [
          { text: '请求地址 / API Key', link: '/guide/api-key' }
        ]
      },
      {
        text: '5. 配置使用环境',
        items: [
          { text: 'Node.js 与 Git 环境', link: '/guide/nodejs-git' },
          { text: 'CC Switch 使用教程', link: '/guide/config-switch' },
          { text: 'Codex 配置', link: '/guide/codex' },
          { text: 'Codex 生图教程', link: '/guide/codex-image' }
        ]
      },
      {
        text: '6. 疑难解答',
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
          { text: '进阶优化', link: '/troubleshooting/advanced' },
          { text: '售后与支持', link: '/guide/support' },
          { text: '商务合作', link: '/guide/business' }
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
      message: 'CCWSPro 用户使用说明书，帮助你完成 Codex 安装、注册、充值、API Key、环境配置和常见问题排查。',
      copyright: 'Copyright © 2026 CCWSPro'
    }
  }
})
