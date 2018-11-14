# zslm_front

> 专硕联盟前端

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## 框架目录结构

> src
>>     components
>>>         admin       后台公共组件
>>>         common      公共组件
>>>         front       前台公共组件
>>>         index.js    公共组件入口文件
>>     config
>>>         providers
>>>>            http-service.js axios请求二次封装      
>>>         filters.js  公共过滤器
>>>         methods.js  公共方法
>>>         navigation.js  后台管理员右侧导航栏定义
>>     router      
>>>         admin.js    后台管理路由定义文件
>>>         front.js    前台页面路由定义文件
>>>         index.js    路由入口文件
>>     views           页面级组件
>>>         admin       后台管理页面组件
>>>         front       前台页面组件
>>     App.vue         挂载组件
>>     admin.vue       后台路由出口
>>     front.vue       前台路由出口
>>     main.js         入口文件 
> static              静态文件存放处
>>     css           
>>     front
>>     img
>>     js 
> util             
>>     mock            mock模拟数据

