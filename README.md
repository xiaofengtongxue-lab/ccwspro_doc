# CCWSPro 文档站

这是一个基于 VitePress 的 CCWSPro 说明文档站，信息架构参考了 CCTQ-Doc，但内容已改为可替换的自有站点说明模板。

## 本地启动

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

构建产物在：

```text
docs/.vitepress/dist
```

## 主要目录

- `docs/guide/`：账号、Key、充值、工具配置说明
- `docs/troubleshooting/`：常见问题
- `docs/publish/`：部署、自定义域名、图片替换说明
- `docs/public/images/`：站点图片与截图占位图

## 图片替换

把你自己的站点截图放到 `docs/public/images/screenshots/`，然后按需修改 Markdown 中的图片路径。详细说明见：

[图片替换说明](docs/publish/image-replacement.md)
