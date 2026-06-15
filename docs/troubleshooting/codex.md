# Codex CLI

## Codex 读取不到 Key

检查环境变量：

```bash
echo $OPENAI_BASE_URL
echo $OPENAI_API_KEY
```

如果为空，说明当前终端没有加载配置。

## 请求到了错误的服务

如果你同时配置过多个服务商，请确认当前 Base URL 指向 CCWSPro。

## 模型不可用

请在 CCWSPro 控制台确认当前账号可用模型，并把 Codex 配置里的模型名称改成一致。
