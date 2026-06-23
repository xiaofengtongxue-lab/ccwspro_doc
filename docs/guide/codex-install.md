# Codex 下载安装

新用户建议先完成 Codex 下载安装，确认工具能打开，再继续注册、充值、生成 API Key 和配置环境。

Codex 常见有两种使用方式：客户端和命令行。普通用户建议优先使用客户端，界面更直观，也方便查看项目、会话历史和代码变更；命令行适合已经熟悉终端、Linux、远程服务器或需要脚本化运行的用户。

## 客户端方式（推荐）

### 1. 打开官方下载页面

打开 [Codex 官方下载页面](https://openai.com/zh-Hans-CN/codex/get-started/)，按自己的系统下载安装包。

| 系统 | 说明 |
| --- | --- |
| macOS | 点击页面上的“下载 macOS 版” |
| Windows | 在官方页面选择 Windows 入口，按提示跳转到 Microsoft Store 下载 |
| Linux | 暂无桌面客户端，建议使用命令行方式 |

::: tip 下载不顺时
如果 Microsoft Store 暂时无法下载，可以先使用下方的命令行方式安装 Codex CLI，先把工具用起来。等客户端可以正常下载后，再切回客户端方式。
:::

![Codex 官方下载页面](/images/screenshots/codex-client-download.png)

### 2. 安装并打开 Codex

下载完成后，按系统安装器提示安装 Codex。安装完成后打开 Codex 客户端，首次启动时按页面提示完成登录或授权。

### 3. 打开项目文件夹

在 Codex 客户端中选择一个本地项目文件夹。如果你还没有项目，可以先新建一个空文件夹用于测试。

![Codex 客户端选择项目文件夹](/images/screenshots/codex-client-open-project.png)

::: tip 提示
这一步只需要确认 Codex 客户端能正常打开和选择文件夹。后续接入 CCWSPro 请求地址和 API Key，需要继续完成注册、充值与环境配置。
:::

## 命令行方式（备选）

命令行方式适合熟悉终端的用户，也适合 Linux、远程服务器或客户端暂时无法安装的场景。

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

### 2. 更新 Codex CLI

如果已经安装过 Codex CLI，建议先更新到当前可用版本。按你当时的安装方式选择一种即可。

::: code-group

```bash [官方脚本 macOS / Linux]
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell [官方脚本 Windows]
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

```bash [npm]
npm install -g @openai/codex@latest
```

```bash [Homebrew]
brew update
brew upgrade --cask codex
```

:::

更新完成后，关闭当前终端窗口，重新打开终端。

### 3. 验证命令是否可用

执行：

```bash
codex --version
```

如果能看到版本号，说明 Codex CLI 已安装成功。

![Codex CLI 启动成功](/images/screenshots/codex-cli-start.png)

## 下一步

完成 Codex 下载安装后，继续按顺序完成：

1. [注册 / 登录](/guide/register)
2. [充值 / 续费](/guide/recharge)
3. [请求地址 / API Key](/guide/api-key)
4. [Node.js 与 Git 环境](/guide/nodejs-git)
5. [CC Switch 使用教程](/guide/config-switch)
6. [Codex 配置](/guide/codex)
