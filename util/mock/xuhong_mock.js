/*Operate
* 运营管理模块——首页
* 获取所有资讯类型
*/
Mock.mock('/admin/operate/getInformationType',{
	"code": 0,
	"msg": Mock.mock('@cword(3, 5)'),
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
* 运营管理模块——首页
* 上传一级页面的banner
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

Mock.mock('/putPictrue',{
	
})
