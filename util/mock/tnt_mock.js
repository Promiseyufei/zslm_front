
/*activity
*找活动列表页面
*通过筛选条件获得的活动列表数据
*/
Mock.mock('/front/activity/getActivity',{
	"code":0,
	"data": [{
		'count':45,
		'info|45':[{
			'id':'@integer(1,10)',
			'active_name':'@cword(18)',
			'province':[{
				'province':'@cword(3)',
				'city':'@cword(3)'
			}],
			'begin_time':'5-23',
			'end_time':'8-15',
			'active_img':'tupian',
			'activity_type':'@cword(4)',
			'z_name':'@cword(8)',
			'start_state':'@integer(0,2)',
		}],
	}],
	// "totalData":'@integer(200,3000)',
})