# CC Switch 使用教程

CC Switch 是一个本机桌面配置管理工具。你可以用它保存 CCWSPro 的请求地址和 API Key，并在 Codex 等命令行工具之间切换配置。

![配置编辑器](/images/screenshots/config-editor.svg)

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

## 添加 CCWSPro 配置

1. 打开 CC Switch。
2. 进入 Codex 对应的配置区域。
3. 点击「添加供应商」或右上角的「+」按钮。
4. 选择自定义配置或 OpenAI 兼容配置。
5. 填入 CCWSPro 的请求地址、API Key 和模型名称。
6. 保存配置。

推荐填写：

| 字段 | 说明 |
| --- | --- |
| 名称 | 建议填写 `CCWSPro`，方便后续识别 |
| 请求地址 | 以控制台显示为准，Codex 通常需要带 `/v1` |
| API Key | 粘贴当前账号生成的有效 Key |
| 模型名称 | 填写 CCWSPro 当前支持的模型名称 |

配置示例：

```json
{
  "name": "CCWSPro",
  "baseUrl": "https://{控制台显示的接口域名}/v1",
  "apiKey": "粘贴你的 API Key",
  "model": "gpt-4.1"
}
```

## 启用并验证

1. 在 CC Switch 中选择刚添加的 `CCWSPro` 配置。
2. 点击「启用」。
3. 关闭当前终端窗口，并重新打开终端。
4. 运行一次 Codex 测试任务，确认请求能正常发出。

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
