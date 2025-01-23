# Auth Layer

提供一个基于 @sidebase/nuxt-auth 的权限校验层

> 这是 blog.zzao.club 项目一个拓展层，正在踩坑中
> 任何新的发现都会更新在[博客](https://blog.zzao.club)中

## 注意

- 本项目针对 extends 配置为 github仓库的 layers 扩展方式 （也就是分仓库扩展）。对于**单体项目**中扩展 layers 来获得更好的项目分层体验，参考[#相关资料第一条](#相关资料)
- 需要使用 layer 的 Nuxt 项目也启用 nuxt4



## 问题记录


- blog extend auth， 而 auth 的 app.vue 会直接把 blog 的 / 路由覆盖掉，目前看来缺少一些忽略机制。 即使 auth 里已经没有 app.vue ，还是会覆盖路由
- 把 auth 改成 nuxt4后，app/app.vue 设置为和blog 一致，再加上一个自己的页面 /auth ，blog 项目继承后可以正常使用
- 


## 确认信息

- layers 拥有最高的优先级，且 extends: [], index 越小，优先级越高，就是一个基建的过程，地基会被上层覆盖。
- 在主项目和 layers 都启用 nuxt4 后，app.config.ts 可以正常合并
- 主项目和 layers 应该具有相同的 app.vue，因为 layers 的优先级更高，会覆盖主项目。（等待新的配置参数出现，如忽略 app.vue 的合并）
- layers 中使用了其他 modules, 在主项目的nuxt.config.ts 中，需要配置 `install: true` （ 可以查看 blog.zzao.club 仓库的[配置](https://github.com/aatrooox/blog.zzao.club/blob/main/nuxt.config.ts)）用于下载对应的依赖。


## 相关资料

- [在 Nuxt4 的单体项目中扩展 layers](https://www.youtube.com/watch?v=XGcJiG0fZ8Y)

