const path = require('path')

module.exports={
    configureWebpack:(config)=>{
        Object.assign(config,{
            //开发生产共同配置
            resolve:{
                alias:{
                    '@' : path.resolve(__dirname,'./src')
                }
            }
        })
    }

}