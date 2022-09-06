# 时间线服务端

## 安装

```JS
npm install
```
## 启动

```JS
npm run dev
```

## API

## 文档

## 时间线管理后台

# 分支说明

-   master 生产分支
-   test 测试分支
-   dev 开发分支
-   开发新功能时从 test 分支切出新分支进行开发
-   新功能开发完成后合并回 test 分支推送至远程仓库触发测试环境的 CI/CD
-   需要 AB 测试的时候可以使用以 test\_为开头的分支进行测试环境的多分支构建
-   需要上线时，在 test 分支上打 tag 触发生产环境的 CI/CD 上线

## 启动

开发模式：
React（前端） + koa2（服务端） + mysql（数据库） + docker（运维部署）

需要通过 docker component 启动所有容器，进行开发

因为数据存放到 koa2 + mysql 中，所以需要同时运行 react + koa2

因开发环境引用本地第三方库，所以 docker 中未进行 npm insatll，而是把编译后的文件进行容器化部署，
