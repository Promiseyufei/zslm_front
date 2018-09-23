/* Operate
* 运营管理模块——首页
* 获取所有资讯类型
*/
Mock.mock('/admin/operate/getInformationType', {
	"code": 0,
	'msg': Mock.mock('@cword(3, 5)'),
	"data|4": [
		{
			'id|+1': 0,
			"name|+1": [
		        "辅导机构列表页",
		        "资讯频道首页",
		        "活动列表页",
		        "院校列表页"
		    ]
		}
	]
})

/*Operate
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

/*Operate
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

/*Operate
* 运营管理模块——资讯推荐添加
* 获取咨询列表添加分页数据
*/
Mock.mock('/admin/operate/getInformPagingData',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)'),
	"data|4": [
		{
			'id|+1': 0,
			"name": Mock.mock('@cword(5, 15)'),
			"z_type|1-100": 100,
			"create_time": Mock.mock('@now')
		}
	]
})

/*Operate
* 运营管理模块——首页
* 上传一级页面的banner
*/
Mock.mock('/admin/operate/createBannerAd',{
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




/*Operate
* 运营管理模块——广告位管理
* 上传一级页面的广告
*/
Mock.mock('/admin/operate/createPageBillboard',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})

/*Operate
* 运营管理模块——首页
* 删除一级页面的banner
*/
Mock.mock('/admin/operate/deleteBannerAd',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})

/*Operate
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

/*Operate
* 运营管理模块——资讯推荐区
* 修改指定区域的名称
*/
Mock.mock('/admin/operate/setAppointRegionName',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})






Mock.mock('/putPictrue',{
	
})

/*message
* 信息发布模块——信息推荐
* 上传院校logo
*/
Mock.mock('/admin/message/setUploadPhoto',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)')
})
