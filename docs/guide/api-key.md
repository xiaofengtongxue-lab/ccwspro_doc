# 请求地址 / Key

CCWSPro 的接口接入通常需要两个信息：请求地址和 API Key。正式上线前，请把这里的示例地址替换为你的真实地址。

![API Key 页面](/images/screenshots/api-key.svg)

## 获取 API Key

1. 登录 CCWSPro 控制台。
2. 进入「API Key」或「密钥管理」页面。
3. 点击「创建 Key」。
4. 复制生成的 Key，并保存到本地安全位置。

::: warning 安全提醒
API Key 等同于账号调用凭证，不要公开到 GitHub、截图、群聊或文章正文中。
:::

## 请求地址

请以你自己的站点后台显示为准。常见格式如下：

```text
https://api.example.com/v1
```

## 环境变量示例

```bash
export OPENAI_BASE_URL="https://api.example.com/v1"
export OPENAI_API_KEY="你的 API Key"
```

## 检查清单

- Base URL 没有多余空格。
- Key 使用的是当前账号下最新有效的 Key。
- 工具配置中的模型名称和站点支持的模型一致。
- 如果使用团队账号，确认当前 Key 有调用权限。
