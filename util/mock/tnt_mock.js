
/*activity
*找活动列表页面
*通过筛选条件获得的活动列表数据
*/
Mock.mock('/front/activity/getActivity',{
	"code":0,
	"data": [{
		'count':500,
		'info|500':[{
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

/*activity
活动列表页——获取全部专业类型
*/
Mock.mock('/front/colleges/getCollegesType',{
	"code":0,
	"data|6": [{
		id:'@integer(1,10)',
		name:"TTTT",
	}],
	// "totalData":'@integer(200,3000)',
})

/*activity
活动列表页——获取全部活动的类型
 */
Mock.mock('/front/activity/getActivityType',{
	"code":0,
	"data|8": [{
		id:'@integer(1,10)',
		name:"DDDD",
	}],
	// "totalData":'@integer(200,3000)',
})

/*singleActivity
活动详情页——获取活动的主办院校信息
 */
Mock.mock('/front/activity/getAcHostMajor',{
	"code":0,
	"result": [{
		'id':'@integer(1,10)',
		'magor_logo_name':'',
        'major_cover_name':'',
        'z_name':'@cword(6)',
        // 'province':[{
            'province':'@cword(3)',
            'city':'@cword(3)'
        // }],
	}],
	// "totalData":'@integer(200,3000)',
})

/*singleActivity
活动详情页——获取热门活动推荐列表
 */
Mock.mock('/front/activity/getPopularAcInfo',{
	"code":0,
	"result": [{
		'count':4,
		'acInfo|4':[{
			'id':'@integer(1,10)',
			'active_img':'img',
        	'begin_time':'2018.3.15',
        	'active_name':'@cword(6)',
		}],
       
	}],
})

/*singleActivity
活动详情页——我要报名
 */
Mock.mock('/front/activity/activitySign',{
	"code":0,
	"msg":'@cword(6)',
})

/*singleActivity
活动详情页——活动详细信息
 */
Mock.mock('/front/activity/getAppointAcInfo',{
	"code":0,
	"result": [{
		'id':1,
		'active_name':'@cword(6)',
    	'begin_time':'2018-02-13 14:50',
    	'end_time':'2018-02-13 14:50',
    	'address':'@cword(6)',
    	active_type:'提前面试',
        start_state:2,
        introduce:'@cword(6)',
	}],
})