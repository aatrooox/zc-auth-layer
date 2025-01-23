# Auth Layer
提供一个基于 @sidebase/nuxt-auth 的权限校验层

> 这是 blog.zzao.club 项目一个拓展层，正在踩坑中
> 任何新的发现都会更新在[博客](https://blog.zzao.club)中


:::tip
需要使用 layer 的 Nuxt 项目也启用 nuxt4
:::


## 问题记录

- blog extend auth， 而 auth 的 app.vue 会直接把 blog 的 / 路由覆盖掉，目前看来缺少一些忽略机制。 即使 auth 里已经没有 app.vue ，还是会覆盖路由
- 把 auth 改成 nuxt4后，app/app.vue 设置为和blog 一致，再加上一个自己的页面 /auth ，blog 项目继承后可以正常使用


## 确认信息

- 在主项目和 layers 都启用 nuxt4 后，app.config.ts可以正常合并
- 主项目和 layers 应该具有相同的 app.vue，因为 layers 的优先级更高，会覆盖主项目。（等待新的配置参数出现，如忽略 app.vue 的合并）
