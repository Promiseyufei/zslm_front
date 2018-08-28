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


Mock.mock('/putPictrue',{
	"object|1": [{
			"code": 0,
			"msg": "success"
		},
		{
			"code": 1,
			"msg": "没有该用户信息"
		},
		{
			"code": 1,
			"msg": "密码错误"
		},
		{
			"code": 1,
			"msg": "没有该用户信息"
		},
	]
})