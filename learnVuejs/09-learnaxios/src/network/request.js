import axios from 'axios'

export function request(config) {//这里的参数config为一个对象，和之前axios(config)一样，（内容大概就是url之类的
  // return new Promise((resolve,reject) => {
  //   //1.创建axios实例
  //   const instance = axios.create({
  //     baseURL:'http://123.207.32.32:8000',
  //     timeout: 3000,
  //   })
  //   //2.发送真正的网络请求
  //   instance(config)
  //     .then(res => {
  //       resolve(res)
  //     })
  //     .catch(err => {
  //       reject(err)
  //     })
  //   //以上这段代码如何理解？
  //   //instance(config)实际上是一个axios,而axios会返回一个promise，所以有“.then()”和“.catch()”
  //   //    而最外层又被一个promise包住，所以可以再调用resolve和reject函数
  //   //    又因为这个promise在request()中被return出去了，所以可以在调用request()的地方后面加“.then”和“.catch” （见main.js
  // })


  //是不是很晕嘻嘻嘻，但是以上可以化简！！！
  //因为instance(config)实际上会返回一个promise，所以没必要再return new Promise对这些代码进行包装
  //化简如下：（化简版本多加了“2.axios拦截器”部分

  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout: 3000,
  })

  //2.axios拦截器
  //2.1 请求拦截 即axios.interceptors.request.use(func1(param1),func2(param2))
  //  这个函数传入两个参数，而这两个参数又是带参数的函数
  //  若发送请求成功，axios拦截器会把该次请求的配置（即config对象）作为第一个函数的参数，并回调该函数
  //  若发送请求失败，axios拦截器会把错误信息作为第二个函数的参数，并回调该函数
  instance.interceptors.request.use( config => {
    console.log(config);
    return config //注意要把拦截的配置信息返回出去！！不然之后咋发送请求？
    //那么啥时候会用到请求拦截呢？
      //1.请求的config不符合网站标准，需要更改时
      //2.需要在发送请求时，页面显示图标时
      //3.某些网络请求必须携带一些特殊信息（如登陆状态的tokon），判断是否携带时
  },err => {
    console.log(err);     
  })

  //2.2 响应拦截  axios.interceptors.response.use(func1(param1),func2(param2))
  //  若服务器响应成功，axios拦截器会把服务器返回的结果作为第一个函数的参数，并回调该函数
  //  若服务器响应失败，axios拦截器会把错误信息作为第二个函数的参数，并回调该函数
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data //注意一定要把拦截结果返回出去，一般只返回结果中的数据（即res.data
  }, err => {
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)
    //直接return instance() 就相当于return promise

}