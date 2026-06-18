# CCWSPro 文档站

这是一个基于 VitePress 的 CCWSPro 用户使用说明书，重点覆盖注册充值、环境配置和疑难解答。

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

- `docs/guide/`：账号、API Key、充值、工具配置说明
- `docs/troubleshooting/`：常见问题
- `docs/publish/`：维护者使用的部署、自定义域名和图片管理说明
- `docs/public/images/`：公开文档使用的图片与截图资源

## 图片维护

把产品截图放到 `docs/public/images/screenshots/`，然后按需修改 Markdown 中的图片路径。维护说明见：

[图片维护说明](docs/publish/image-replacement.md)
