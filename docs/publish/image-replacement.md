# 替换站点图片

当前项目里的图片都是占位图，正式发布前建议替换为你自己站点的真实截图。

## 图片目录

```text
docs/public/images/
docs/public/images/screenshots/
```

VitePress 会把 `docs/public/` 下的文件原样复制到网站根路径。因此：

```text
docs/public/images/screenshots/register-login.svg
```

在 Markdown 中可以这样引用：

```md
![注册登录页面](/images/screenshots/register-login.svg)
```

## 最省事的替换方式

保持文件名不变，直接覆盖当前占位图：

```text
register-login.svg
api-key.svg
recharge.svg
config-editor.svg
```

如果你使用 PNG 或 JPG，需要同步修改 Markdown 中的后缀。

## 建议截图规格

| 类型 | 建议尺寸 | 说明 |
| --- | --- | --- |
| 首页封面 | 960 x 640 | 用于首页视觉图 |
| 页面截图 | 1200 x 760 | 用于教程步骤 |
| 二维码 | 600 x 600 | 用于客服或商务联系 |

## 替换后检查

```bash
npm run docs:build
npm run docs:preview
```

确认所有图片都能加载，移动端不会出现过宽、变形或遮挡正文的问题。
