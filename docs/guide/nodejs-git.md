# Node.js 与 Git 环境

如果你需要在本地使用 Codex、CC Switch 或其他命令行工具，建议先准备 Node.js 和 Git。Node.js 用来运行 npm 生态里的命令行工具，Git 用来下载项目、管理代码和配合后续部署。

## 安装前先确认

建议安装：

- Node.js：选择 LTS 版本。
- npm：安装 Node.js 时会自动附带。
- Git：选择当前系统对应的稳定版本。

::: tip 提示
LTS 是长期维护版本，更适合日常使用。不要为了追新安装实验版本，除非你明确知道自己需要它。
:::

## macOS 安装

### 方式一：使用 Homebrew

如果你的电脑已经安装 Homebrew，可以直接在终端执行：

```bash
brew install node git
```

安装完成后，关闭当前终端窗口，再重新打开一个终端。

### 方式二：使用官方安装包

如果你不熟悉命令行，可以使用官方安装包：

- Node.js：[nodejs.org](https://nodejs.org/)
- Git：[git-scm.com/downloads](https://git-scm.com/downloads)

下载后按安装器提示一路安装即可。安装完成后，同样需要重新打开终端。

## Windows 安装

### 方式一：使用官方安装包

1. 打开 [nodejs.org](https://nodejs.org/)，下载 LTS 版本安装包。
2. 打开 [git-scm.com/downloads](https://git-scm.com/downloads)，下载 Windows 版本安装包。
3. 双击安装包，按默认选项安装。
4. 安装完成后，重新打开 PowerShell、命令提示符或 Windows Terminal。

### 方式二：使用 winget

如果你的系统支持 winget，可以在 PowerShell 中执行：

```powershell
winget install --id OpenJS.NodeJS.LTS -e
winget install --id Git.Git -e
```

安装完成后，关闭当前终端窗口，再重新打开一个终端。

## 验证安装结果

重新打开终端后，依次执行：

```bash
node -v
npm -v
git --version
```

如果三条命令都能看到版本号，说明 Node.js、npm 和 Git 已经安装成功。

还可以检查命令路径：

::: code-group

```bash [macOS]
which node
which npm
which git
```

```powershell [Windows]
where node
where npm
where git
```

:::

这些命令会显示工具安装在电脑上的具体位置。只要能显示路径，通常就说明系统已经能找到它们。

## 配置 Git 用户信息

第一次使用 Git 时，建议先设置提交时显示的姓名和邮箱：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

设置后可以用下面命令确认：

```bash
git config --global --list
```

如果能看到 `user.name` 和 `user.email`，说明 Git 基础配置已经完成。

## 常见问题

### node、npm 或 git 命令找不到

通常是安装后终端没有重新加载环境变量。先关闭所有终端窗口，再重新打开终端执行验证命令。

如果还是找不到：

- 确认安装包已经完整安装成功。
- Windows 用户确认安装 Git 时没有取消添加 PATH 的选项。
- macOS 用户如果使用 Homebrew，确认 `brew doctor` 没有明显错误提示。

### npm 下载速度慢

如果 npm 安装工具时速度很慢，可以先换网络环境再试。不要随意复制陌生来源的一键换源命令，避免后续下载到不可控的软件包。

### 已经装过 Node.js，还需要重装吗

不一定。只要 `node -v` 和 `npm -v` 都能正常显示版本号，并且后续工具可以正常安装，就可以继续使用当前版本。遇到兼容问题时，再考虑升级到 LTS 版本。

### 需要安装 nvm、fnm 或 Volta 吗

普通用户不需要一开始就安装版本管理工具。只有当你需要同时维护多个 Node.js 版本，或者不同项目要求不同 Node.js 版本时，再考虑使用 nvm、fnm 或 Volta。

## 下一步

完成 Node.js 和 Git 环境后，可以继续配置：

- [请求地址 / API Key](/guide/api-key)
- [CC Switch 使用教程](/guide/config-switch)

::: tip 提示
后续如果安装 Codex 或其他命令行工具失败，先回到本页重新执行验证命令，确认 Node.js、npm 和 Git 都能正常使用。
:::
