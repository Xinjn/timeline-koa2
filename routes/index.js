const router = require('koa-router')()
// 数据模型
const { SuccessModel, ErrorModel } = require('../model/resModel')
// 数据库 api
const {
  getHotList,
  getUpdateNode,
  postFollows, // 加入追踪
  deleteFollows
} = require('../controller/timeline')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

// router.get("/string", async (ctx, next) => {
//   ctx.body = "koa2 string";
// });

// 获取时间线热榜列表
router.get('/api/hot/timeline', async (ctx, next) => {
  const query = ctx.request.query
  console.log('------query-------', query)

  const result = await getHotList()
  ctx.body = new SuccessModel(result)
})

// 获取最近更新接口
router.get('/api/nodes/updates', async (ctx, next) => {
  const result = await getUpdateNode()
  ctx.body = new SuccessModel(result)
})

// 加入追踪
router.post('/api/follows', async (ctx, next) => {
  // post 请求参数放在 ctx.request.body 中
  const body = ctx.request.body

  if (!body.id) return new ErrorModel('id 不能为空')

  const result = await postFollows(body.id)
  if (result) {
    ctx.body = new SuccessModel('追踪成功')
  } else {
    ctx.body = new ErrorModel('追踪失败')
  }
})

// 取消追踪
router.delete('/api/follows', async (ctx, next) => {
  // post 请求体参数 放在 ctx.request.body 中
  const body = ctx.request.body

  if (!body.id) return new ErrorModel('id 不能为空')

  const result = await deleteFollows(body.id)
  if (result) {
    ctx.body = new SuccessModel('取消追踪成功')
  } else {
    ctx.body = new ErrorModel('取消追踪失败')
  }
})

module.exports = router
