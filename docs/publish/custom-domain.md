# 自定义域名

Vercel、Cloudflare Pages、Netlify 和 GitHub Pages 都支持自定义域名。

## 推荐选择

如果域名 DNS 已经托管在 Cloudflare，优先使用 Cloudflare Pages，域名绑定和证书签发会更顺。

如果你想要 GitHub 推送后自动部署，Vercel 也很省心。

## 绑定流程

1. 在部署平台添加你的域名。
2. 按平台提示添加 DNS 记录。
3. 等待 DNS 生效。
4. 确认 HTTPS 证书签发成功。
5. 打开域名检查页面、图片和搜索是否正常。

## 常见 DNS 记录

| 类型 | 用途 |
| --- | --- |
| CNAME | 子域名，例如 `docs.example.com` |
| A | 根域名指向平台 IP 或服务器 IP |
| TXT | 平台域名所有权验证 |

::: tip
不同平台给出的 DNS 记录不同，最终以平台控制台提示为准。
:::
