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
				// 'date1': '@cword(1)' ,
				'content': '@cword(10)',
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


/*data
*院校专业列表页面
*获取表格内容
*/
Mock.mock('/admin/UniversMajorList/gettable-info',{
	"code":0,
	"data|4": [{
				'id':'@integer(1, 100)',
				'name': '@cword(11)'+'MBA',
		        'project':'@integer(1, 100)',
		        'time':'@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	// "count":'@integer(1000, 2000)',
	
})

