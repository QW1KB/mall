import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    // axios 拦截器
    instance.interceptors.request.use(config => {
            // console.log(config);
            return config
        }, err => {
            // console.log(err);
        })
        //相应拦截
    instance.interceptors.response.use(
        res => {

            return res.data
        },
        err => { console.log(err); })


    // 发送真正的网络请求
    return instance(config)
}