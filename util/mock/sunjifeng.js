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
    "tatol":12,
    "data|4": [{
        'id':1,
        'zx_name':'2018年度北京地区MBA招生项目分析报告',
        'create_time':'2014.12.18',
        'z_image':'../../assets/img/picture.jpg'
    },
    ],
})
