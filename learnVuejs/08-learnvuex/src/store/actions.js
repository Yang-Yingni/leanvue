
export default {
//异步操作的中转
  //action中方法默认参数为context和payload（其中 context的意思为上下文，即context里装的东西是所在邻域范围内的
  aChangeInfoId(context,payload) {
    // setTimeout(() => {
    //   context.commit('changeInfoId')//通过commit调用mutations里的方法（即action相当于一个中转
    //   console.log(payload);
    // }, 1000);

  //若异步操作成功时需要告知成功，或者返回数据怎么办？
  //利用promise将其包装！！
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        context.commit('changeInfoId')//通过commit调用mutations里的方法（即action相当于一个中转
        console.log(payload);
        resolve('异步操作得到的数据')//通过resolve返回异步操作得到的数据
      }, 1000);
    })
    //注意“.then()”不写在这的promise后面，而是写在调用这个action方法的dispath函数后面
  }
}