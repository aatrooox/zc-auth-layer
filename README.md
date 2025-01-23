# Auth Layer

提供一个基于 @sidebase/nuxt-auth 的权限校验层

> 这是 blog.zzao.club 项目一个拓展层，正在踩坑中
> 任何新的发现都会更新在[博客](https://blog.zzao.club)中

## 前置条件

- 本项目针对 extends 配置为 github仓库的 layers 扩展方式 （也就是分仓库扩展）。对于**单体项目**中扩展 layers 来获得更好的项目分层体验，参考[#相关资料第一条](#相关资料)
- 需要使用 layer 的 Nuxt 项目也启用 nuxt4
- 要在自己的项目中使用，确保和我有一致的 app.vue


## 必看信息

- layers 拥有最高的优先级，且 extends: [], index 越小，优先级越高，就是一个基建的过程，地基会被上层覆盖。
- 在主项目和 layers 都启用 nuxt4 后，app.config.ts 可以正常合并
- 主项目和 layers 应该具有相同的 app.vue，因为 layers 的优先级更高，会覆盖主项目。（等待新的配置参数出现，如忽略 app.vue 的合并）
- layers 中使用了其他 modules, 在主项目的nuxt.config.ts 中，需要配置 `install: true` （ 可以查看 blog.zzao.club 仓库的[配置](https://github.com/aatrooox/blog.zzao.club/blob/main/nuxt.config.ts)）用于下载对应的依赖。
- 依赖项注意不要放在：devDependencies， 要放在dependencies，不然添加了 install: true，也无法下载 layer 的依赖项。如果后期发现了这个问题，手动改了 package.json，记得重新 pnpm install

## 基于Github仓库的继承方式

在 nuxt.config.ts 中配置：

```ts
extends: [
    ['github:aatrooox/zc-auth-layer', { install: true }]
]
```

## 基于npm包的继承方式

- 直接包名
- 需要 pnpm install zc-auth-layer

nuxt.config.ts 中配置：

```ts
extends: [
    'zc-auth-layer'
]
```

packge.json 中配置：
```json
  "dependencies": {
    ...
    "zc-auth-layer": "0.0.2"
  }
```

## 相关资料

- [在 Nuxt4 的单体项目中扩展 layers](https://www.youtube.com/watch?v=XGcJiG0fZ8Y)
- [官方简介 1](https://nuxt.com/docs/getting-started/layers)
- [官方详细介绍](https://nuxt.com/docs/guide/going-further/layers)

