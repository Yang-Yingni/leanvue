//因为commit函数中传入的type名得写为字符串形式，且必须与mutations中方法名保持一致
//然鹅这样容易写错，并且复制来复制去hin麻烦
//所以创建这个文件来保存mutations里的type名，到时候就会有提示了

export const INCREASE = 'increase'
export const DECREASE = 'decrease'

