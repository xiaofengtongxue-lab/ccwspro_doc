# 请求地址 / API Key

完成注册充值后，需要在控制台获取请求地址和 API Key。后续配置 Codex 或其他工具时都会用到这两个信息。

![API 密钥页面](/images/screenshots/api-key-list.png)

## 获取 API Key

1. 登录 CCWSPro 控制台。
2. 进入「API Key」或「密钥管理」页面。
3. 点击「创建 Key」。
4. 复制生成的 Key，并保存到本地安全位置。

![创建 API 密钥](/images/screenshots/api-key-create.png)

::: warning 安全提醒
API Key 等同于账号调用凭证，不要公开到 GitHub、截图、群聊或文章正文中。
:::

## 请求地址

CCWSPro 当前统一请求地址为：

```text
https://docs.ccws.pro
```

如果配置的是 Codex、CC Switch 的 Codex Provider，或者工具明确要求填写 OpenAI 兼容的 Base URL，请在后面加上 `/v1`：

```text
https://docs.ccws.pro/v1
```

## 环境变量示例

Codex 场景可以这样填写：

```bash
export OPENAI_BASE_URL="https://docs.ccws.pro/v1"
export OPENAI_API_KEY="你的 API Key"
```

## 检查清单

- Base URL 没有多余空格。
- Codex 配置使用 `https://docs.ccws.pro/v1`。
- Key 使用的是当前账号下最新有效的 Key。
- 工具配置中的模型名称和 CCWSPro 支持的模型一致。
- 如果使用团队账号，确认当前 Key 有调用权限。
