# 配置切换工具

当你同时使用多个 API 服务或多个账号时，可以用配置切换工具快速切换 Base URL 和 Key。

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
  "baseUrl": "https://{控制台显示的接口域名}/v1",
  "apiKey": "粘贴你的 API Key",
  "model": "gpt-4.1"
}
```

## 使用建议

- 不要把配置文件提交到公开仓库。
- 多人协作时只共享配置字段，不共享真实 Key。
- 切换配置后，用一个简单请求验证是否生效。
