
const Router = require('@koa/router');
const router = new Router();

const User = require('./controller/user')

router.get('/getUser', (ctx) => {
    const req = ctx.req;

    ctx.body = [
        {
            id: 1, name: '小明3',
            age: ctx.query.age,
            sex: ctx.query.sex,
            qq:ctx.query.qq
        },
        {
            id: 2, name: '小李',
            age: ctx.query.age,
            sex: ctx.query.sex,
            qq:ctx.query.qq
        }
    ]
})

export default router