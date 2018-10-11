/* Operate
* 运营管理模块——首页
* 获取所有资讯类型
*/
Mock.mock('/admin/operate/getIndexListName', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)'),
	"data|4": [
		{
			'id|+1': 0,
			"name|+1": [
		        "辅导机构列表页",
		        "资讯频道首页",
		        "活动列表页",
		        '院校列表页'
		    ]
    }
  ]
})

/* Operate
* 运营管理模块——首页
* 修改权值
*/
Mock.mock('/admin/operate/setBtWeight', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)')
})

/* message
* 信息发布模块——活动信息——活动信息编辑
* 获得活动省市字典
*/
Mock.mock('/admin/information/getMajorProvincesAndCities', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)'),
	"data|50": [
		{
			'id|+1': 0,
			"name|+1": [
		        Mock.mock('@province')
		    ]
    	}	
  	]
})


/* message
* 信息发布模块——活动信息——活动信息编辑
* 获得活动省市字典
*/
Mock.mock('/admin/information/getMajorType', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)'),
	"data|50": [
		{
			'id|+1': 0,
			"name|+1": [
		        "计算机科学与技术",
		        "大数据",
		        "教育学",
		        '工美艺术'
		    ]
    	}	
  	]
})

/* message
* 信息发布模块——活动信息——活动信息编辑——推荐信息
* 得到所有的推荐活动
*/
Mock.mock('/admin/information/getAllActivitys', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)'),
	"data|4": [
		{
			'id|+1': 0,
			"active_name": Mock.mock('@cword(3, 5)'),
		}
	]
})

/* message
* 信息发布模块—-院校专业——院校专业信息编辑——招生项目信息编辑
* 得到所有的招生项目
*/
Mock.mock('/getProject', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)'),
	"data|4": [
		{
			"id": Mock.mock('@cword(3, 5)'),
			"state|1-2": true,
			"weight|1-100": 100,
			"pj_name": Mock.mock('@cword(3, 5)'),
			"project_type": Mock.mock('@cword(3, 5)'),
		}
	]
})

/* message
* 信息发布模块——活动信息——活动信息编辑——推荐信息
* 获得所有的院校专业(在设置相关院校和推荐院校的手动设置时使用)
*/
Mock.mock('/admin/information/getAllCollege', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)'),
	"data|4": [
		{
			'id|+1': 0,
			"active_name": Mock.mock('@cword(3, 5)'),
		}
	]
})

/* message
* 信息发布模块——活动信息——活动信息编辑——推荐信息
* 自动设置推荐活动
*/
Mock.mock('/admin/information/setAutomaticRecActivitys', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)'),
})

/* Operate
* 运营管理模块——广告位管理
* 获取所有资讯类型
*/
Mock.mock('/admin/operate/getAllPageListName',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)'),
	"data|6": [
		{
			'id|+1': 0,
			"name|+1": [
		        "辅导机构列表页",
		        "资讯频道首页",
		        "咨询详情页",
		        "活动列表页",
		        "活动详情页",
		        "院校列表页"
		    ]
		}
	]
})

/* Operate
* 运营管理模块——首页
* 获取一级页面的banner
*/
Mock.mock('/admin/operate/getIndexBanner',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)'),
	"data|4": [
		{
			'id|+1': 0,
			"img": Mock.mock('@cword(3, 5)'),
			"img_alt": Mock.mock('@cword(3, 5)'),
			"re_url|1": Mock.mock('@url'),
			"re_alt|1": Mock.mock('@cword(5, 8)'),
			"show_weight|1-100": 100,
			"create_time": Mock.mock('@now')
		}
	]
})

/* Operate
* 运营管理模块——资讯推荐添加
* 获取咨询列表添加分页数据
*/
Mock.mock('/admin/operate/getInformPagingData',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)'),
	"data": {
		"count": 2340,
		"data|4": [
			{
				'id|+1': 0,
				"name": Mock.mock('@cword(5, 15)'),
				"z_type|1-100": 100,
				"create_time": Mock.mock('@now')
			}
		]
	}
})

/* Operate
* 运营管理模块——首页
* 上传一级页面的banner
*/
Mock.mock('/admin/operate/createBannerAd',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})

/* Operate
* 运营管理模块——资讯推荐添加
* 获取咨询列表添加分页数据
*/
Mock.mock('/admin/message/getActivity',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)'),
	"data|4": [
		{
			'id|+1': 0,
			"show_weight|1-100": 100,
			"name": Mock.mock('@cword(5, 15)'),
			"z_type": Mock.mock('@cword(5, 15)'),
			"create_time": Mock.mock('@now')
		}
	]
})

/* message
* 信息发布模块——辅导机构——编辑基本信息
* 清空所有项目
*/
Mock.mock('/deleteprojectDelete',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})

/* message
* 信息发布模块——辅导机构——优惠卷设置
* 清空所有的优惠卷
*/
Mock.mock('/deletecouponDelete',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})

/* message
* 信息发布模块——院校专业——信息编辑——招生信息编辑
* 编辑招生项目的状态
*/
Mock.mock('/admin/information/setProjectState',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})

// var date = function (option) {
// 	// console.log(option.body);
// 	var message = option.body;
// 	if (message.id) {};
// 	return {
// 		"code": 0,
// 		"msg": Mock.mock('@cword(3, 5)')
// 	}
// }
// Mock.mock('/ccc', 'post', date)



/* Operate
* 运营管理模块——广告位管理
* 上传一级页面的广告
*/
Mock.mock('/admin/operate/createPageBillboard',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})

/* Operate
* 运营管理模块——首页
* 删除一级页面的banner
*/
Mock.mock('/admin/operate/deleteBannerAd',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})

/* Operate
* 运营管理模块——资讯推荐区
* 获得指定区域的咨询内容
*/
Mock.mock('/admin/operate/getAppointRegionData',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)'),
	"data": [
			{
				"region_name": Mock.mock('@cword(3, 5)'),
				"zx_id|10": [
					{
						"id": Mock.mock('@cword(3, 5)'),
						"weight|1-100": 100,
						"zx_name": Mock.mock('@cword(3, 5)'),
						"information_type": Mock.mock('@cword(3, 5)'),
						"create_time": Mock.mock('@now')
					}
				]
			}
		]
})

/* news
* 信息管理模块——发信息
* 获取全部用户
*/
Mock.mock('/admin/news/getAllAccounts',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)'),
	"data": {
			"count": 3456,
			"data|10":[{
					'id|+1': 0,
					"photo": "18338409172",
					"account":Mock.mock('@integer'),
					"user_name":Mock.mock('@cname'),
					"real_name":Mock.mock('@cword(3, 5)'),
					"sex":"女",
					"address":Mock.mock('@county'),
					"schooling_id":Mock.mock('@cword(3, 5)'),
					"graduate_school":Mock.mock('@cword(3, 5)'),
					"industry":Mock.mock('@cword(3, 5)'),
					"worked_year|+1": 7,
				}]
		}
})

/* Operate
* 运营管理模块——资讯推荐区
* 修改指定区域的名称
*/
Mock.mock('/admin/operate/setAppointRegionName',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})




Mock.mock('/putPictrue',{
	
})

/* message
* 信息发布模块——信息推荐
* 上传院校logo
*/
Mock.mock('/admin/message/setUploadPhoto',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})
