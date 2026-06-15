# 配置切换工具

当用户同时使用多个 API 服务或多个账号时，可以提供一个配置切换说明，帮助他们快速切换 Base URL 和 Key。

![配置编辑器](/images/screenshots/config-editor.svg)

## 推荐配置项

| 字段 | 说明 |
| --- | --- |
| name | 配置名称，例如 `CCWSPro` |
| baseUrl | 请求地址 |
| apiKey | 当前账号的 API Key |
| model | 默认模型名称 |

## 示例

```json
{
  "name": "CCWSPro",
  "baseUrl": "https://api.example.com/v1",
  "apiKey": "替换为你的 Key",
  "model": "gpt-4.1"
}
```

## 使用建议

- 不要把配置文件提交到公开仓库。
- 多人协作时只共享模板，不共享真实 Key。
- 切换配置后，用一个简单请求验证是否生效。
