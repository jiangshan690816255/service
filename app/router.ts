
// const getUser=()=>{

//     return "";//users.find(f => f.id == ctx.query.id);

// }

// export default getUser
import {ref ,reactive, Reactive}from 'vue'
const Router = require('@koa/router');
const router = new Router();

import User from './controller/user.ts'

//router.prefix('/user')
router.get('/getuser', User.getUser)
router.get('/getUserid', User.getUserid)

export default router