/*files
*文件管理页面
*获取表格内容、文件总数
*/
Mock.mock('/admin/files/getUploadFile',{
	"code":0,
	"data|4": [{
				'name': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf' ,
				'data': '@cword(1)',
		        'major':'@cword(11)'+'MBA',
		        'type': '@cword(4)',
		        'year': '@date("yyyy")',
		        'homepage': '@cword(1)',
		        'time': '@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	"count":'@integer(1000, 2000)',
	
})

/*files
*文件管理页面
*获取查询条件
*/
Mock.mock('/admin/files/huoQuChaXunTaioJian',{
	 
	"data": [{
				'name': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf' ,
				'data': '@cword(1)',
		        // 'name': '@cword(11)',
		        'major':'@cword(11)'+'MBA',
		        'type': '@cword(4)',
		        'year': '@date("yyyy")',
		        'homepage': '@cword(1)',
		        'time': '@datetime("yyyy-MM-dd  HH:mm:ss")',
			}],
	
})


/*data
*分享数据页面
*获取表格内容、文件总数
*/
Mock.mock('/admin/data/getdata-table',{
	"code":0,
	"data|4": [{
				'content': '@cword(10)',
				'id': '@integer(1, 100)' ,
				'type':'@cword(4)',
		        'pagedata':'@integer(1, 100)',
		        'wxdata':'@integer(1, 100)',
		        'wxdatas':'@integer(1, 100)',
		        'wbdata':'@integer(1, 100)',
		        'wbdatas':'@integer(1, 100)',
		        'datas':'@integer(1, 100)',
				
			},
			],
	"count":'@integer(1000, 2000)',
	
})


/*universMajorList
*院校专业列表页面
*获取表格内容
*/
Mock.mock('/admin/UniversMajorList/gettable-info',{
	"code":0,
	"data|4": [{
				"weight":'@integer(1, 100)',
				'id':'@integer(1, 100)',
				'name': '@cword(11)'+'MBA',
		        'project':'@integer(1, 100)',
		        'time':'@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	"count":'@integer(1000, 2000)',
	// "count":'@integer(1000, 2000)',
	
})


/*SelectUnivers
*选择院校专业页面
*获取城市的名称
*/
Mock.mock('/admin/SelectUnivers/getcity-info',{
	"code":0,
	"region|2":[{"name":'@cword(2)'}],
	"count":'@integer(1000, 2000)',
	"Name|3":[
		{	
			// "column":[
			// 	{"cityname":'@cword(2)'}
			// ],
			"line|5":[
				{"majorname":'@cword(6)'}
			]
		},
	]
	
})

/*SelectUnivers
*选择院校专业页面
*获取城市的院校专业名称
*/
Mock.mock('/admin/SelectUnivers/clickgetcity-info',{
	"code":0,
	"region":[{"name":'@cword(2)'}],
	"Name|3":[
		{	
			// "column":[
			// 	{"cityname":'@cword(2)'}
			// ],
			"line|5":[
				{"majorname":'@cword(6)'}
			]
		},
	]
	
})


/*activityList
*活动-列表
*获取表格内容
*/
Mock.mock('/message/activityList/gettable-info',{
	"code":0,
	"data|4": [{
				"weight":'@integer(1, 100)',
				'id':'@integer(1, 100)',
				'name': '@cword(11)'+'MBA',
		        'project':'@integer(1, 100)',
		        'time':'@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	"count":'@integer(1000, 2000)',
	// "count":'@integer(1000, 2000)',
	
})


/*hostuniversmajor
*活动-设置主办院校专业名称
*获取城市的名称
*/
Mock.mock('/message/hostuniversmajor/getcity-info',{
	"code":0,
	"region|2":[{"name":'@cword(2)'}],
	"count":'@integer(1000, 2000)',
	"Name|3":[
		{	
			// "column":[
			// 	{"cityname":'@cword(2)'}
			// ],
			"line|5":[
				{"majorname":'@cword(6)'}
			]
		},
	]
	
})

/*hostuniversmajor
*活动-设置主办院校专业名称
*获取城市的院校专业名称
*/
Mock.mock('/message/hostuniversmajor/clickgetcity-info',{
	"code":0,
	"region":[{"name":'@cword(2)'}],
	"Name|3":[
		{	
			// "column":[
			// 	{"cityname":'@cword(2)'}
			// ],
			"line|5":[
				{"majorname":'@cword(6)'}
			]
		},
	]
	
})

