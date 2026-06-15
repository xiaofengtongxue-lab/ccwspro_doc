# 部署到线上

这个项目是纯静态 VitePress 文档站，可以部署到 Vercel、Cloudflare Pages、Netlify、GitHub Pages 或自己的服务器。

## 构建命令

```bash
npm install
npm run docs:build
```

## 构建产物

```text
docs/.vitepress/dist
```

## Vercel

推荐配置：

| 配置项 | 值 |
| --- | --- |
| Framework Preset | VitePress |
| Install Command | `npm install` |
| Build Command | `npm run docs:build` |
| Output Directory | `docs/.vitepress/dist` |

## Cloudflare Pages

推荐配置：

| 配置项 | 值 |
| --- | --- |
| Framework preset | None 或 VitePress |
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Node.js version | 20 或 22 |

## 自己的服务器

把 `docs/.vitepress/dist` 上传到服务器静态目录，再用 Nginx 指向该目录即可。
