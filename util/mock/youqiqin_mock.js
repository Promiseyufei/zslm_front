/*files
*文件管理页面
*获取表格内容、文件总数
*/
Mock.mock('/admin/files/getUploadFile',{
	"code":0,
	"data|4": [{
				'id':'@integer(1,10)',
				'showweight': '@integer(1,10)' ,
				'filename': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf',
		        'universmajor':'@cword(11)'+'MBA',
		        'filetype': '@cword(4)',
		        'fileyear': '@date("yyyy")',
		        'showhomepage': '@cword(1)',
		        'onlinetime': '@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	"total":'@integer(1000, 2000)',
})
/*files
*文件管理页面
*刷新页面
*/
Mock.mock('/admin/files/updateFile',{
	"code":0,
	"data|4": [{
				'id':'@integer(1,10)',
				'showweight': '@integer(1,10)' ,
				'filename': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf',
		        'universmajor':'@cword(11)'+'MBA',
		        'filetype': '@cword(4)',
		        'fileyear': '@date("yyyy")',
		        'showhomepage': '@cword(1)',
		        'onlinetime': '@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
})

/*files
*文件管理页面
*删除表格某一行
*/
Mock.mock('/admin/files/deleteFile',{
	"code":0,
	"data|4": [{
				'id':'@integer(1,10)',
				'showweight': '@integer(1,10)' ,
				'filename': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf',
		        'universmajor':'@cword(11)'+'MBA',
		        'filetype': '@cword(4)',
		        'fileyear': '@date("yyyy")',
		        'showhomepage': '@cword(1)',
		        'onlinetime': '@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
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
	"total":'@integer(1000, 2000)',
	
})


/*universMajorList
*院校专业列表页面
*获取表格内容
*/
Mock.mock('/admin/information/getMajorPageMessage',{
	"code":0,
	"data|4": [{
				"weight":'@integer(1, 100)',
				'id':'@integer(1, 100)',
				'name': '@cword(11)'+'MBA',
		        'project':'@integer(1, 100)',
		        'time':'@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	"total":'@integer(1000, 2000)',
	// "count":'@integer(1000, 2000)',
	
})


/*SelectUnivers
*选择院校专业页面
*获取城市的名称
*/
Mock.mock('/admin/SelectUnivers/getcity-info',{
	"code":0,
	"onecityName":'@cword(2)',
	"twocityName":'@cword(2)',
	"count":'@integer(1000, 2000)',
	"oneCity|3":[
		{	
			"line|5":[
				{"majorname":'@cword(6)'}
			]
		},
	],
	"twoCity|3":[
		{	
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
	"total":'@integer(1000, 2000)',
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



/*coachList
*辅导-列表
*获取表格内容
*/
Mock.mock('/message/coachList/gettableInfo',{
	"code":0,
	"data|4": [{
				"weight":'@integer(1, 100)',
				'id':'@integer(1, 100)',
				'name': '@cword(11)'+'MBA',
		        'project':'@integer(1, 100)',
		        'time':'@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	"total":'@integer(1000, 2000)',
	// "count":'@integer(1000, 2000)',
	
})


/*choiceactivity
*辅导-列表
*获取表格内容
*/
Mock.mock('/admin/choiceactivity/getcityInfo',{
	"code":0,
	"data|4":[{
			"id":'@integer(1, 100)',
			"adviceState":'@cword(2)',
			"showState":'@cword(2)',
			"activityName":'@cword(10)',
			"activityType":'@cword(4)',
			"activityCity":'@cword(2)',
			"mainUnivers":'@cword(8)',
			"joinType":'@cword(2)',
		}
	],
	"total":'@integer(1000, 2000)',
})


/*informationList
*活动-列表
*获取表格内容
*/
Mock.mock('/message/informationList/gettableInfo',{
	"code":0,
	"data|4": [{
				'id':'@integer(1, 100)',
				"showweight":'@integer(1, 100)',
				"informTitle":'@cword(12)',
				'informState': '@cword(4)',
		        'informSource':'@cword(4)',
		        'onlineTime':'@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	"total":'@integer(1000, 2000)',
	// "count":'@integer(1000, 2000)',
	
})




/*recordHome
*消息管理页面
*获取表格内容、文件总数
*/
Mock.mock('/admin/recordHome/getUploadFile',{
	"code":0,
	"data|4": [{
				'id':'@integer(10000,20000)',
				'messageType': '@cword(1,6)' ,
				'messageObject': '@cword(4,7)',
		        'sendTime':'@datetime("yyyy-MM-dd  HH:mm:ss")',
		        'sendState': '@cword(2)',
		        'sendCont': '@cword(40)',
			},
			],
	// "total":'@integer(1000, 2000)',
})


/*recordHome
*消息管理页面
*进入页面
*/
Mock.mock('/admin/recordHome/intoPage',{
	"code":0,
	"data|4": [{
				'id':'@integer(10000,20000)',
				'messageType': '@cword(1,6)' ,
				'messageObject': '@cword(4,7)',
		        'sendTime':'@datetime("yyyy-MM-dd  HH:mm:ss")',
		        'sendState': '@cword(2)',
		        'sendCont': '@cword(40)',
			},
			],
	"totalData":'@integer(1000,2000)'
})
/*recordHome
*消息管理页面
*刷新页面
*/
Mock.mock('/admin/recordHome/updateFile',{
	"code":0,
	"data|4": [{
				'id':'@integer(10000,20000)',
				'messageType': '@cword(1,6)' ,
				'messageObject': '@cword(4,7)',
		        'sendTime':'@datetime("yyyy-MM-dd  HH:mm:ss")',
		        'sendState': '@cword(2)',
		        'sendCont': '@cword(40)',
			},
			],
})

/*recordHome
*消息管理页面
*删除表格某一行
*/
Mock.mock('/admin/recordHome/deleteFile',{
	"code":0,
	"data|4": [{
				'id':'@integer(1,10)',
				'showweight': '@integer(1,10)' ,
				'filename': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf',
		        'universmajor':'@cword(11)'+'MBA',
		        'filetype': '@cword(4)',
		        'fileyear': '@date("yyyy")',
		        'showhomepage': '@cword(1)',
		        'onlinetime': '@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
})


/*recordDetail
*选择院校专业页面
*获取城市的名称
*/
Mock.mock('/admin/recordDetail/getcityInfo',{
	"code":0,
	"messageObjc":'@cword(1,10)',
	"careJoin|2":[
		{	
			"titl":'@cword(4)',
			"cont|3":[
				{"content":'@cword(4)'}
			],
		},
	],
	"rightUpCon|4":[
		{	
			"title":'@cword(4)',
			"content|3":'@cword(1,10)',
		},
	],
	"data|4": [{
				'id':'@integer(1,10)',
				'account': '@integer(1,10)' ,
				'nickname': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf',
		        'name':'@cword(11)'+'MBA',
		        'sex': '@cword(4)',
		        'address': '@cword(4)',
		        'highEduc': '@cword(4)',
		        'belongUnivers': '@date("yyyy")',
		        "industry":'@date("yyyy")',
		        'workFix': '@cword(1)',
			},
			],
	"totalData":'@integer(200,3000)',
	
})

/*recordDetail
*选择院校专业页面
*获取城市的院校专业名称
*/
Mock.mock('/admin/recordDetail/clickgetcity-info',{
	"code":0,
	"region":[{"name":'@cword(2)'}],
	"Name|3":[
		{	
			"line|5":[
				{"majorname":'@cword(6)'}
			]
		},
	]
	
})


/*setMessageDetail
*消息管理
*获取城市的名称
*/
Mock.mock('/admin/setMessageDetail/getcityInfo',{
	"code":0,
	"messageObjc":'@cword(1,10)',
	"careJoin|2":[
		{	
			"titl":'@cword(4)',
			"cont|3":[
				{"content":'@cword(4)'}
			],
		},
	],
	"rightUpCon|4":[
		{	
			"title":'@cword(4)',
			"content|3":'@cword(1,10)',
		},
	],
	"data|4": [{
				'id':'@integer(1,10)',
				'account': '@integer(1,10)' ,
				'nickname': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf',
		        'name':'@cword(11)'+'MBA',
		        'sex': '@cword(4)',
		        'address': '@cword(4)',
		        'highEduc': '@cword(4)',
		        'belongUnivers': '@date("yyyy")',
		        "industry":'@date("yyyy")',
		        'workFix': '@cword(1)',
			},
			],
	"totalData":'@integer(200,3000)',
	
})



/*messageNotice
*活动信息
*消息通知
*/
Mock.mock('/admin/messageNotice/getcityInfo',{
	"code":0,
	"messageObjc":'@cword(1,10)',
	"careJoin|2":[
		{	
			"titl":'@cword(4)',
			"cont|3":[
				{"content":'@cword(4)'}
			],
		},
	],
	"rightUpCon|4":[
		{	
			"title":'@cword(4)',
			"content|3":'@cword(1,10)',
		},
	],
	"data|4": [{
				'id':'@integer(1,10)',
				'account': '@integer(1,10)' ,
				'nickname': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf',
		        'name':'@cword(11)'+'MBA',
		        'sex': '@cword(4)',
		        'address': '@cword(4)',
		        'highEduc': '@cword(4)',
		        'belongUnivers': '@date("yyyy")',
		        "industry":'@date("yyyy")',
		        'workFix': '@cword(1)',
			},
			],
	"totalData":'@integer(200,3000)',
	
})







/*font-radioButton
*选院校
*获取按钮值
*/
Mock.mock('/front/colleges/getmajor',{
	"code":0,
	"allMajorname|25":[
		{"z_name":'@cword(2)'}
	],
	// "Name|3":[
	// 	{	
	// 		"line|5":[
	// 			{"majorname":'@cword(6)'}
	// 		]
	// 	},
	// ]
	
})
