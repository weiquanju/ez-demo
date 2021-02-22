
import Axios from "axios";
import qs from 'qs';
const ezAccessToken = '_EZ_T_'
const ezExpireTime = '_EZ_ET_'
// 萤石开放平台key
const ezAppKey = 'xxx';
// 萤石开放平台secret
const ezAppSecret = 'xxx';

const ezData = {
    set token(val = '') {
        localStorage.setItem(ezAccessToken, val)
    },
    get token() {
        return localStorage.getItem(ezAccessToken) || undefined
    },
    set expireTime(val = 0) {
        localStorage.setItem(ezExpireTime, val)
    },
    get expireTime() {
        return parseInt(localStorage.getItem(ezExpireTime)) || 0
    },
}

export const getToken = async () => {
    debugger
    if (ezData.expireTime > new Date().getTime()) {
        return ezData.token
    }
    const { data } = await Axios.post('https://open.ys7.com/api/lapp/token/get', qs.stringify({
        appKey: ezAppKey,
        appSecret: ezAppSecret
    }), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })

    if (data.code == 200) {
        const {
            accessToken: accessToken = "",
            expireTime: expireTime = 0,
        } = data.data
        
        ezData.token = accessToken;
        ezData.expireTime = expireTime

        return accessToken
    }
    throw new Error(data.msg || 'get ezviz token failure!')
}