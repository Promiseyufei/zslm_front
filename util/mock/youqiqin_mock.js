/*files
* 文件管理页面
* 文件管理，全部文件
* 获取上传过文件信息
*/


//在表单里展示文件信息
Mock.mock('/admin/files/getUploadFile',{
	 
	"data": [{
				'name': '@date("yyyy"+"年")'+'@cword(11)'+'.pdf' ,
				'data': '@cword(1)',
		        // 'name': '@cword(11)',
		        'major':'@cword(11)'+'MBA',
		        'type': '@cword(4)',
		        'year': '@date("yyyy")',
		        'homepage': '@cword(1)',
		        'time': '@datetime("yyyy-MM-dd  HH:mm:ss")',
			},
			],
	"datas":[{
		'pages':'@integer(60, 100)',
		'page':'@integer(100, 999)'
	}]
	
})

