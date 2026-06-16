# Codex 配置

本页用于说明如何把 CCWSPro 接入 Codex CLI 或其他 OpenAI 兼容工具。

## 环境变量方式

```bash
export OPENAI_BASE_URL="https://{控制台显示的接口域名}/v1"
export OPENAI_API_KEY="你的 API Key"
```

## 配置文件方式

如果工具支持配置文件，可以把 Base URL、Key、默认模型写入对应配置项。

```toml
model = "gpt-4.1"

[providers.ccwspro]
base_url = "https://{控制台显示的接口域名}/v1"
api_key = "你的 API Key"
```

## 验证方式

```bash
codex --version
```

确认命令可用后，在测试项目中发起一次简单任务，观察是否能正常请求模型。

## 常见错误

- Key 复制不完整。
- Base URL 少了 `/v1` 或多了路径。
- 模型名称不在 CCWSPro 支持列表中。
- 当前网络无法连接接口域名。
