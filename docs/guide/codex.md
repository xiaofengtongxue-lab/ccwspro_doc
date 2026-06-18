# Codex 配置

Codex 常见有两种使用方式：客户端和命令行。普通用户建议优先使用客户端，界面更直观，也更方便查看项目、会话历史和代码变更；命令行适合已经熟悉终端、需要在脚本或远程环境中使用 Codex 的用户。

开始前请先准备好：

- 已完成 [Node.js 与 Git 环境](/guide/nodejs-git)。
- 已获取 CCWSPro 的 [请求地址 / API Key](/guide/api-key)。
- 已安装并配置 [CC Switch 使用教程](/guide/config-switch)。

::: tip 推荐
如果你只是想把 CCWSPro 接入 Codex 日常使用，推荐路线是：`Codex 客户端` + `CC Switch`。这样不需要手动编辑配置文件，也更容易在不同 Provider 之间切换。
:::

## 客户端方式（推荐）

Codex 客户端适合大多数用户。它可以直接打开本地项目文件夹，在图形界面里发起任务、查看对话、检查改动，并继续之前的会话。

### 1. 安装 Codex 客户端

打开 [Codex App 官方页面](https://developers.openai.com/codex/app)，按自己的系统下载安装包。

| 系统 | 说明 |
| --- | --- |
| macOS | 下载 macOS 版本；Intel 芯片的 Mac 选择 Intel 版本 |
| Windows | 下载 Windows 版本 |
| Linux | 暂无桌面客户端，建议使用命令行方式 |

![Codex 客户端下载安装占位图](/images/screenshots/codex-client-download-placeholder.svg)

安装完成后，打开 Codex 客户端。首次启动时，按页面提示完成登录或授权。

### 2. 通过 CC Switch 启用 CCWSPro

打开 CC Switch，确认当前启用的是 `CCWS-PRO` Provider。如果你还没有添加 Provider，先按 [CC Switch 使用教程](/guide/config-switch) 完成配置。

需要重点确认：

- Provider 名称为 `CCWS-PRO` 或其他你能识别的名称。
- API 请求地址填写 `https://docs.ccws.pro/v1`。
- API Key 已复制完整。
- 启用 Provider 后，重新启动 Codex 客户端。

### 3. 打开项目文件夹

在 Codex 客户端中打开你要处理的项目文件夹。如果页面提供运行位置选择，优先选择 `Local`，让 Codex 在你的电脑本地项目中工作。

![Codex 客户端打开项目占位图](/images/screenshots/codex-client-open-project-placeholder.svg)

### 4. 发起第一次测试

打开项目后，先发送一个简单任务确认配置是否生效：

```text
请用一句话介绍这个项目的主要功能，不要修改文件。
```

如果 Codex 能正常回复，说明客户端已经可以通过当前 Provider 发起请求。

![Codex 客户端首次对话占位图](/images/screenshots/codex-client-first-message-placeholder.svg)

### 5. 后续使用建议

- 普通需求直接在客户端里描述任务。
- 需要修改代码时，先让 Codex 说明计划，再确认执行。
- 切换 Provider 后，建议重启 Codex 客户端再验证。
- 如果切换 Provider 后找不到原来的会话，可参考 [切换 Provider 后显示 Codex 会话历史](/guide/config-switch#切换-provider-后显示-codex-会话历史)。

## 命令行方式（进阶）

命令行方式适合熟悉终端的用户，也适合 Linux、远程服务器或需要脚本化运行的场景。

### 1. 安装 Codex CLI

macOS / Linux 可以使用官方安装脚本：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Windows 可以在 PowerShell 中执行：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

也可以使用包管理工具安装：

::: code-group

```bash [npm]
npm install -g @openai/codex
```

```bash [Homebrew]
brew install --cask codex
```

:::

安装完成后，关闭当前终端窗口，重新打开终端。

### 2. 验证命令是否可用

执行：

```bash
codex --version
```

如果能看到版本号，说明 Codex CLI 已安装成功。

### 3. 推荐用 CC Switch 写入配置

命令行方式也推荐使用 CC Switch 管理 Provider。你只需要在 CC Switch 中启用 `CCWS-PRO`，然后重新打开终端运行 Codex。

```bash
cd 你的项目目录
codex
```

![Codex CLI 启动占位图](/images/screenshots/codex-cli-start-placeholder.svg)

### 4. 手动配置方式

如果你暂时不使用 CC Switch，也可以手动配置 Codex。请优先使用用户级配置文件，不要把 API Key 写进项目仓库。

配置文件位置：

| 系统 | 配置文件 |
| --- | --- |
| macOS / Linux | `~/.codex/config.toml` |
| Windows | `C:\Users\你的用户名\.codex\config.toml` |

参考配置如下：

```toml
model_provider = "ccwspro"
model = "以控制台支持的模型名称为准"

[model_providers.ccwspro]
name = "CCWSPro"
base_url = "https://docs.ccws.pro/v1"
wire_api = "responses"
env_key = "OPENAI_API_KEY"
```

::: warning 注意
Codex 的 `base_url` 需要带 `/v1`，请填写 `https://docs.ccws.pro/v1`。
:::

然后设置环境变量：

::: code-group

```bash [macOS / Linux]
export OPENAI_API_KEY="你的 API Key"
```

```powershell [Windows]
setx OPENAI_API_KEY "你的 API Key"
```

:::

设置后重新打开终端，再进入项目目录运行：

```bash
cd 你的项目目录
codex
```

## 验证与排查

如果 Codex 无法正常请求，优先检查：

- CC Switch 当前启用的 Provider 是否为 `CCWS-PRO`。
- Codex 请求地址是否为 `https://docs.ccws.pro/v1`。
- API Key 是否复制完整、是否仍然有效。
- 模型名称是否在 CCWSPro 当前支持范围内。
- 修改配置后是否重新打开终端或重启客户端。

如果命令行提示 `codex: command not found`，通常是安装路径没有加入 PATH。先重新打开终端；如果仍然失败，建议改用官方安装脚本或 Homebrew 重新安装。

如果客户端可以打开但请求失败，先回到 CC Switch 中重新启用一次 Provider，再重启 Codex 客户端验证。

## 需要替换的截图

当前页面先放了默认占位图。后续建议补充这些真实截图：

- Codex 客户端下载安装页面。
- Codex 客户端打开项目文件夹页面。
- Codex 客户端第一次发送测试消息页面。
- Codex CLI 在终端中启动成功的页面。
