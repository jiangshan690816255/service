
const Router = require('@koa/router');
const router = new Router();
import { Reactive, reactive, ref } from "vue";
//import { Request, Response, NextFunction } from 'express';
//import redis from '../common/redisHelper.ts'

import Koa from 'koa';
const app = new Koa();




let users = reactive([
    {
        uid: 1, name: '小明3',
        age: 11,
        sex: '男',
        qq: '123456',
        modifyTime: ''
    }
]);

const getUser = async (ctx: any) => {
    const [rows, fields] = await ctx.mysql.execute("select * from myuser");//await ctx.redis.get("users");
    if (rows != null) {
        ctx.response.body = rows;
    }
}


const getUserid = async (ctx: any) => {
    const uid = parseInt(ctx.query.id);

    const [rows, fields] = await ctx.mysql.execute(`select * from myuser where id=${uid} limit 1`);//await ctx.redis.get("users");
    if (rows != null) {
        ctx.response.body = rows[0];
    }
    else
        ctx.response.body = [];
}

const saveUser = async (ctx: any) => {
    let res = "faild";
    if (ctx.request.body) {
        let user = reactive(ctx.request.body)


        //let _users = reactive([]);
        const uid = parseInt(user.id);

        if (uid > 0) {
            //ctx.redis.set("users", JSON.stringify(_users));
            const [rows, fields] = await ctx.mysql.execute(`select * from myuser where id=${uid} limit 1;`);
            await ctx.mysql.execute(`update  myuser set username='${user.username}',age='${user.age}',modifyTime=now() where id=${uid}`);
            res = "success";
            //}
        }
        else if (uid == 0) {
            await ctx.mysql.execute(`insert myuser(username,age,modifyTime) values('${user.username}','${user.age}',null);`);
            //user.uid = users.sort(f => f.uid).reverse()[0].uid + 1;
            //users.push(user);

            //_users.push(user);
            //const a = JSON.stringify(_users);
            //ctx.redis.set("users", a);
            res = "success";
        }
        else { }

        ctx.response.body = res;
    }
}

const delUser = async (ctx: any) => {
    let res = "faild";
    if (ctx.query) {
        const uid = parseInt(ctx.query.uid);
        if (uid > 0) {
            const [re] = await ctx.mysql.execute(`delete from myuser where id='${uid}';`);
            if (re && re.affectedRows > 0)
                res = "success";
            // const i = ref(users.findIndex(f => f.uid == uid));
            // if (i.value > -1) {
            //     users.splice(i.value, 1);
            //     res = "success";
            // }
        }
    }

    ctx.response.body = res;
}

router.get('/getuser', getUser)
router.get('/getUserid', getUserid)
router.post('/saveUser', saveUser)
router.get('/delUser', delUser)

export default router