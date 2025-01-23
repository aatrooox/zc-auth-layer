# Auth Layer

这是 blog.zzao.club 项目一个拓展层，正在踩坑中，有任何新的发现都会更新在[博客](https://blog.zzao.club)中

## 问题记录

- blog extend auth， 而 auth 的 app.vue 会直接把 blog 的 / 路由覆盖掉，目前看来缺少一些忽略机制。 即使 auth 里已经没有 app.vue ，还是会覆盖路由
- 把 auth 改成 nuxt4后，app/app.vue 设置为和blog 一致，再加上一个自己的页面 /auth ，blog 项目继承后可以正常使用
