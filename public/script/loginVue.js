let app=new Vue({
    el:"#app",
    data:{
        uID:""
    },
    methods:{
        onLogin(){
            if(app.uID||app.uID===''){
                // alert("Wrong UserName or Password")
            }
        }
    }
})