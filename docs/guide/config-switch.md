# CC Switch 使用教程

CC Switch 是一个本机桌面配置管理工具。你可以用它保存 CCWSPro 的请求地址和 API Key，并在 Codex 等命令行工具之间切换配置。

![CC Switch 配置界面](/images/screenshots/cc-switch-codex-add-entry.png)

## 适合什么时候用

- 你同时有多个 API 服务或多个账号。
- 你不想每次手动修改 Codex 配置文件。
- 你需要在 CCWSPro 和其他配置之间快速切换。

## 安装 CC Switch

macOS 用户可以通过 Homebrew 安装：

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

也可以从 [CC Switch Releases](https://github.com/farion1231/cc-switch/releases) 页面下载最新安装包。

安装完成后打开 CC Switch。首次启动时，如果它提示导入已有配置，可以按页面提示导入；如果你是第一次配置 Codex，也可以直接新建配置。

## 安装完成后配置 CCWSPro

### 1. 进入 Codex 配置

1. 打开 CC Switch。
2. 点击顶部的 Codex 图标。
3. 点击右上角的「+」按钮。

![进入 Codex 配置并添加供应商](/images/screenshots/cc-switch-codex-add-entry.png)

### 2. 选择自定义配置

1. 在「添加新供应商」页面，确认当前选择的是「Codex 供应商」。
2. 在预设供应商中点击「自定义配置」。
3. 如果页面内容较多，可以向下滚动继续填写。

![选择 Codex 自定义配置](/images/screenshots/cc-switch-custom-provider.png)

### 3. 填写 CCWSPro 信息

按下面内容填写：

| 字段 | 说明 |
| --- | --- |
| 供应商名称 | 建议填写 `CCWS-PRO`，方便后续识别 |
| 官网链接 | 填写 `https://www.ccws.pro` |
| API Key | 粘贴当前账号生成的有效 Key |
| API 请求地址 | 以控制台显示为准，Codex 通常需要带 `/v1`，例如 `https://www.ccws.pro/v1` |

填写完成后，点击右下角「添加」。

![填写 CCWSPro 供应商信息](/images/screenshots/cc-switch-provider-form.png)

::: tip 提示
「完整 URL」开关保持默认关闭即可。除非工作人员特别说明，否则只需要填写兼容 OpenAI Response 格式的服务端点地址。
:::

### 4. 启用配置并重启 Codex

1. 回到 CC Switch 列表，找到刚添加的 `CCWS-PRO`。
2. 点击「启用」。
3. 关闭当前终端窗口，并重新打开终端。
4. 重新启动 Codex 后，发起一次简单测试，确认请求能正常发出。

![启用 CCWSPro 配置](/images/screenshots/cc-switch-enable-provider.png)

## 验证与排查

如果仍然请求失败，优先检查：

- 请求地址是否以控制台显示为准。
- Codex 使用的请求地址是否带 `/v1`。
- API Key 是否复制完整。
- 模型名称是否在 CCWSPro 当前支持范围内。

## 使用建议

- 不要把配置文件提交到公开仓库。
- 多人协作时只共享配置字段，不共享真实 Key。
- 以后尽量通过 CC Switch 修改和切换配置，减少手动编辑配置文件造成的冲突。
- 切换配置后，重新打开终端再验证是否生效。
