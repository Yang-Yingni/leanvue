export default {
    template:`
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
            <p>{{name}}</p>
        </div>
    `,
    data(){
        return{
            message:'你好呀',
            name:'我是你爸爸'
        }
    },
    methods:{
        btnClick(){
            console.log('click');          
        }
    }
} 