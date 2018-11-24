/*
*
* 看咨询的搜索列表
* */
Mock.mock('/admin/files/getUploadFile',{
    "code":0,
    "data|4": [{
        'id':1,
        'zx_name':'xxx',
        'create_time':'xx',
        'z_text':'xxxx',
        'z_image':'xxx'
    },
    ],
})

/*
*
* 轮播图
* */

Mock.mock('/front/consult/getConsultListBroadcast',{
    "code":0,
    "data|4": [{
        'id':1,
        'zx_name':'xxx',
        'create_time':'xx',
        'z_image':'xxx'
    },
    ],
})

/*
*
* 推荐阅读
* */
Mock.mock('/front/consult/getRecommendRead?pageNumber=0',{
    "code":0,
    "data":{
        'count':5,
        'info|4':[{
            'id':1,
            'zx_name':'2018年度北京地区MBA招生项目分析报告',
            'create_time':'2014.12.18',
            'z_image':'../../assets/img/picture.jpg'
        },
        ],
    }
})


/*
 *
 * 行业列表type=1
 * */
Mock.mock('/front/consult/getRecommendRead?type=1&pageNumber=0',{
    "code":0,
    "data":{
        'count':5,
        'info|4':[{
            'id':1,
            'zx_name':'2018年度北京地区MBA招生项目分析报告',
            'create_time':'2014.12.18',
            'z_image':'../../assets/img/picture.jpg'
        },
        ],
    }
})


/*
* /front/consult/getConsultType
* 导航类型
* */

Mock.mock('/front/consult/getConsultType',{
    "code":0,
    "data":[
        {
            'id':0,
            'name':'ALL'
        },
        {
            'id':1,
            'name':'MBA分析'
        },
        {
            'id':2,
            'name':'MBA分析'
        },
        {
            'id':3,
            'name':'MBA分析'
        },
    ]
})

/*
* mba文章
* */

Mock.mock('/front/consult/getRecommendRead',{
    "code":0,
    "data|9":[
        {
            'id':1,
            'zx_name':'xxx',
            'brief_introduction':'咨询简介',
            'create_time':'创建时间',
            'z_image':'咨询封面',
            'author':'ssss'
        },

    ]
})