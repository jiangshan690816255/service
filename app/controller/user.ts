
import { Reactive, reactive } from "vue";
//import { Request, Response, NextFunction } from 'express';

const users = reactive([
    {
        id: 1, name: '小明3',
        age: 11,
        sex: '男',
        qq: '123456'
    },
    {
        id: 2, name: '小李',
        age: 33,
        sex: '56',
        qq: 'sjs1234'
    }
]);


const getUser = async (ctx, next) => {
    ctx.body = users;
    // const getUser = () => {
    //     return users;
    // }


    // const getUserid = (id: number) => {
    //     return users.find(f => f.id == id);
    // }
}

const getUserid = async (ctx, next) => {
    ctx.body = users.find(f => f.id == ctx.query.id);
}

export default {
    getUser,
    getUserid
};