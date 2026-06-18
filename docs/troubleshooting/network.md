# 网络与连接

## 连接超时

先检查基础请求地址是否能解析：

```bash
ping www.ccws.pro
```

再检查 Codex 使用的 `/v1` 接口是否可访问：

```bash
curl -I https://www.ccws.pro/v1
```

## DNS 问题

如果浏览器能打开官网，但命令行无法访问接口，可能是 DNS 或代理配置不一致。

建议：

- 切换网络环境。
- 关闭或调整代理。
- 检查系统 DNS。
- 在终端里单独验证 `www.ccws.pro`。

## 代理冲突

如果使用了代理工具，请确认 HTTP_PROXY、HTTPS_PROXY、ALL_PROXY 等环境变量没有误伤本地工具。
