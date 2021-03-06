let admin_router = {
    routes: [
        {
            path: '/admin/login',
            name: '后台登录页',
            component:resolve =>void(require(['@/views/admin/login'], resolve))
        },
        {
            path: '/admin',
            name: '后台首页',
            component: resolve =>void(require(['@/admin'], resolve)),
            children: [

                // 文件管理
                {
                    path: 'files',
                    name: '文件管理',
                    component: resolve =>void(require(['@/views/admin/files'], resolve))
                },
                {
                    path: 'SelectUnivers',
                    name: '选择院校专业',
                    component: resolve =>void(require(['@/views/admin/SelectUnivers'], resolve))
                },
                {
                    path: 'UniversMajorList',
                    name: '选择院校专业2',
                    component: resolve =>void(require(['@/views/admin/UniversMajorList'], resolve))
                },
                {
                    path: 'filesManage/fileup/:majorname?',
                    name: '文件管理——上传文件',
                    component: resolve =>void(require(['@/views/admin/filesManage/FileUp'], resolve))
                },
                // 运营管理
                {
                    path: 'operate',
                    name: '运营管理',
                    component: resolve =>void(require(['@/views/admin/operate'], resolve))
                },
                {
                    path: 'operate/advise',
                    name: '运营管理——资讯频道首页推荐',
                    component: resolve =>void(require(['@/views/admin/operat/OperateAdvise'], resolve))
                },
                {
                    path: 'operate/addAdvise/:id',
                    name: '运营管理——资讯频道首页推荐——添加',
                    component: resolve =>void(require(['@/views/admin/operat/AddAdvise'], resolve))
                },
                {
                    path: 'operate/ad',
                    name: '运营管理——广告位管理',
                    component: resolve =>void(require(['@/views/admin/operat/Ad'], resolve))
                },
                {
                    path: 'operate/sharedata',
                    name: '分享数据',
                    component: resolve =>void(require(['@/views/admin/operat/sharedata'], resolve))

                },
                // 信息发布
                {
                    path: 'message/universMajorList',
                    name: '院校专业列表',
                    component: resolve =>void(require(['@/views/admin/UniversMajorList'], resolve))
                },
                {
                    path: 'message/messageHome/:majorId?',
                    name: '编辑-院校专业',
                    component: resolve =>void(require(['@/views/admin/message/collegeInformation/MessageHome'], resolve))
                },
                {
                    path: 'message/universityMessage/:majorId/:majorName/:proId?',
                    name: '编辑-招生项目',
                    component: resolve =>void(require(['@/views/admin/message/collegeInformation/UniversityMessage'], resolve))
                },
                {
                    path: 'message/activity/:actId',
                    name: '活动-活动信息编辑',
                    component: resolve =>void(require(['@/views/admin/message/activityInformation/Activity'], resolve))
                },
                {
                    path: 'message/notice/:id',
                    name: '消息通知',
                    component: resolve =>void(require(['@/views/admin/message/activityInformation/messageNotice'], resolve))
                },
                {
                    path: 'active/selectUnivers/:actid',
                    name: '选择院校专业3',
                    component: resolve =>void(require(['@/views/admin/message/activityInformation/selectMajor'], resolve))
                },
                {
                    path: 'message/advise/:id',
                    name: '活动信息-活动信息编辑-推荐信息',
                    component: resolve =>void(require(['@/views/admin/message/activityInformation/Advise'], resolve))
                },
                {
                    path: 'message/addActivity/:id',
                    name: '活动信息-添加活动',
                    component: resolve =>void(require(['@/views/admin/message/activityInformation/AddAdvise'], resolve))
                },
                {
                    path: 'message/addmajor/:id',
                    name: '活动信息-添加院校',
                    component: resolve =>void(require(['@/views/admin/message/activityInformation/AddMajor'], resolve))
                },
                {
                    path: 'message/hostuniversmajor',
                    name: '活动-设置主办院校专业',
                    component: resolve =>void(require(['@/views/admin/message/hostuniversmajor'], resolve))
                },
                {
                    path: 'message/activityList',
                    name: '活动-列表',
                    component: resolve =>void(require(['@/views/admin/message/activityInformation/activityList'], resolve))
                },
                {
                    path: 'message/coachList',
                    name: '辅导-列表',
                    component: resolve =>void(require(['@/views/admin/message/counselling/coachList'], resolve))
                },
                {
                    path: 'message/changeMessage/:cid?',
                    name: '辅导-新建/编辑——基本信息',
                    component: resolve =>void(require(['@/views/admin/message/counselling/changeMessage'], resolve))
                },
                {
                    path: 'message/coupon/:id?/:couponId?',
                    name: '辅导-新建/编辑——优惠卷设置',
                    component: resolve =>void(require(['@/views/admin/message/counselling/coupon'], resolve))
                },
                {
                    path: 'message/aboutActivity/:id?',
                    name: '辅导-新建/编辑——相关活动设置',
                    component: resolve =>void(require(['@/views/admin/message/counselling/aboutActivity'], resolve))
                },
                {
                    path: 'message/choiceactivity/:coachid',
                    name: '信息管理-辅导-相关活动-添加活动',
                    component: resolve =>void(require(['@/views/admin/message/counselling/choiceActivity'], resolve))
                },
                {
                    path: 'message/choiceactivitytest/:coachid',
                    name: '信息管理-辅导-相关活动-添加活动',
                    component: resolve =>void(require(['@/views/admin/message/counselling/choiceActivity'], resolve))
                },
                {
                    path: 'message/informationList',
                    name: '信息管理-资讯发布-资讯-列表',
                    component: resolve =>void(require(['@/views/admin/message/informationRelease/informationList'], resolve))
                },
                {
                    path: 'message/changeInformation/:infoId?',
                    name: '信息发布-资讯发布-资讯内容编辑',
                    component: resolve =>void(require(['@/views/admin/message/informationRelease/changeInformation'], resolve))
                },
                {
                    path: 'message/recommend/:infoId',
                    name: '信息发布-资讯发布-推荐信息',
                    component: resolve =>void(require(['@/views/admin/message/informationRelease/recommend'], resolve))
                },
                {
                    path: 'message/infoSelectMajor/:infoId?/:type?',
                    name: '信息发布-资讯发布-选择院校专业',
                    component: resolve =>void(require(['@/views/admin/message/informationRelease/infoSelectMajor'], resolve))
                },
                {
                    path: 'message/informationNotice/:infoId?',
                    name: '信息发布-资讯发布-消息通知',
                    component: resolve =>void(require(['@/views/admin/message/informationRelease/informationNotice'], resolve))
                },
                {
                    path: 'message/choReMajor',
                    name: '信息发布-资讯发布-选择相关院校',
                    component: resolve =>void(require(['@/views/admin/message/informationRelease/choiceRecommendMajor'], resolve))
                },
                {
                    path: 'message/setReRead/:infoId?',
                    name: '信息发布-资讯发布-设置相关推荐阅读',
                    component: resolve =>void(require(['@/views/admin/message/informationRelease/setReRead'], resolve))
                },
                {
                    path: 'message/adviseRead/:id',
                    name: '信息发布——资讯发布-添加资讯推荐',
                    component: resolve =>void(require(['@/views/admin/message/informationRelease/AddAdvise'], resolve))//添加资讯页面，与@/views/admin/operat/AddAdvise页面相同
                },
                
                //消息管理
                {
                    path: 'send/sendHome',
                    name: '/send/sendHome',
                    component: resolve =>void(require(['@/views/admin/sendMessage/send/sendHome'], resolve))
                },
                //消息管理-设置消息对象—特定行为的用户
                {
                    path: 'send/setMessageObject',
                    name: '/send/setMessageObject',
                    component: resolve =>void(require(['@/views/admin/sendMessage/send/setMessageObject'], resolve))
                },
                {
                    path: 'send/setMessageSelf',
                    name: '消息管理-设置消息对象—手动选择的用户',
                    component: resolve =>void(require(['@/views/admin/sendMessage/send/setMessageSelf'], resolve))
                },

                {
                    path: 'send/sendMessage',
                    name: '消息管理-设置消息对象—选择院校',
                    component: resolve =>void(require(['@/views/admin/sendMessage/send/sendMessage'], resolve))
                },
                {
                    path: 'send/selectAcitity',
                    name: '消息管理-设置消息对象—选择活动',
                    component: resolve =>void(require(['@/views/admin/sendMessage/send/selectAcitity'], resolve))
                },

                {
                    path: 'send/setMessageDetail',
                    name: '/send/setMessageDetail',
                    component: resolve =>void(require(['@/views/admin/sendMessage/send/setMessageDetail'], resolve))
                },
                {
                    path: 'record/recordHome',
                    name: '消息管理-历史消息记录',
                    component: resolve =>void(require(['@/views/admin/sendMessage/record/recordHome'], resolve))
                },
                {
                    path: 'record/recordDetail/:newsId',
                    name: '消息管理-历史消息记录详情',
                    component: resolve =>void(require(['@/views/admin/sendMessage/record/recordDetail'], resolve))
                },
                // 账户管理
                {
                    path: 'usermanagement/userfocusmajor',
                    name: '用户管理-关注院校',
                    component: resolve =>void(require(['@/views/admin/userManagement/userFocusMajor'], resolve))
                },
                {
                    path: 'usermanagement/userlist',
                    name: '用户管理-用户列表',
                    component: resolve =>void(require(['@/views/admin/userManagement/userList'], resolve))
                },
                {
                    path: 'usermanagement/userParticipateActivities',
                    name: '用户管理-参与活动',
                    component: resolve =>void(require(['@/views/admin/userManagement/userParticipateActivities'], resolve))
                },
                {
                    path: 'usermanagement/usercoupons',
                    name: '用户管理-优惠卷',
                    component: resolve =>void(require(['@/views/admin/userManagement/userCoupons'], resolve))
                },
                // {
                //     path: '/usermanagement/userparticipateactivities',
                //     name: '用户管理-关注活动',
                //     component: resolve =>void(require(['@/views/admin/usermanagement/userParticipateActivities'], resolve))
                // },
                //退款
                {
                    path: 'refund/refundlist',
                    name: '用户管理-退款管理',
                    component: resolve =>void(require(['@/views/admin/refund/refundList'], resolve))
                },
                {
                    path: 'refund/refunddetails/:id',
                    name: '用户管理-退款详情',
                    component: resolve =>void(require(['@/views/admin/refund/refundDetails'], resolve))
                },
            ]
        },




        // {
        //     path: '/admin',
        //     name: '首页',
        //     component: resolve =>void(require(['@/views/admin/news'], resolve))
        // },
        // {
        //     path: '/accounts',
        //     name: '导航',
        //     component: resolve =>void(require(['@/views/admin/accounts'], resolve))
        // },
        // {
        //     path: '/inf',
        //     name: '小块',
        //     component: resolve =>void(require(['@/views/admin/information'], resolve))
        // },
        // {
        //     path: '/login',
        //     name: '登录',
        //     component: resolve =>void(require(['@/views/admin/login'], resolve))
        // },

        // 文件管理
        // {
        //     path: '/files',
        //     name: '文件管理',
        //     component: resolve =>void(require(['@/views/admin/files'], resolve))
        // },
        // {
        //     path: '/SelectUnivers',
        //     name: '选择院校专业',
        //     component: resolve =>void(require(['@/views/admin/SelectUnivers'], resolve))
        // },


        // {
        //     path: '/UniversMajorList',
        //     name: '选择院校专业',
        //     component: resolve =>void(require(['@/views/admin/UniversMajorList'], resolve))
        // },
        // {
        //     path: '/filesManage/fileup/:majorname?',
        //     name: '文件管理——上传文件',
        //     component: resolve =>void(require(['@/views/admin/filesManage/FileUp'], resolve))
        // },
        // // 运营管理
        // {
        //     path: '/operate',
        //     name: '运营管理',
        //     component: resolve =>void(require(['@/views/admin/operate'], resolve))
        // },
        // {
        //     path: '/operate/advise',
        //     name: '运营管理——资讯频道首页推荐',
        //     component: resolve =>void(require(['@/views/admin/operat/OperateAdvise'], resolve))
        // },
        // {
        //     path: '/operate/addAdvise/:id',
        //     name: '运营管理——资讯频道首页推荐——添加',
        //     component: resolve =>void(require(['@/views/admin/operat/AddAdvise'], resolve))
        // },
        // {
        //     path: '/operate/ad',
        //     name: '运营管理——广告位管理',
        //     component: resolve =>void(require(['@/views/admin/operat/Ad'], resolve))
        // },
        // {
        //     path: '/operate/sharedata',
        //     name: '分享数据',
        //     component: resolve =>void(require(['@/views/admin/operat/sharedata'], resolve))

        // },
        // // 信息发布
        // {
        //     path: '/message/universMajorList',
        //     name: '院校专业列表',
        //     component: resolve =>void(require(['@/views/admin/UniversMajorList'], resolve))
        // },
        // {
        //     path: '/message/messageHome/:majorId?',
        //     name: '编辑-院校专业',
        //     component: resolve =>void(require(['@/views/admin/message/collegeInformation/MessageHome'], resolve))
        // },
        // {
        //     path: '/message/universityMessage/:majorId/:majorName/:proId?',
        //     name: '编辑-招生项目',
        //     component: resolve =>void(require(['@/views/admin/message/collegeInformation/UniversityMessage'], resolve))
        // },
        // {
        //     path: '/message/activity/:actId',
        //     name: '活动-活动信息编辑',
        //     component: resolve =>void(require(['@/views/admin/message/activityInformation/Activity'], resolve))
        // },
        // {
        //     path: '/message/notice/:id/:mid',
        //     name: '消息通知',
        //     component: resolve =>void(require(['@/views/admin/message/activityInformation/messageNotice'], resolve))
        // },
        // {
        //     path: '/active/selectUnivers/:actid',
        //     name: '选择院校专业',
        //     component: resolve =>void(require(['@/views/admin/message/activityInformation/selectMajor'], resolve))
        // },
        // {
        //     path: '/message/advise/:id/:major',
        //     name: '活动信息-活动信息编辑-推荐信息',
        //     component: resolve =>void(require(['@/views/admin/message/activityInformation/Advise'], resolve))
        // },
        // {
        //     path: '/message/addActivity/:id',
        //     name: '活动信息-添加活动',
        //     component: resolve =>void(require(['@/views/admin/message/activityInformation/AddAdvise'], resolve))
        // },
        // {
        //     path: '/message/addmajor/:id',
        //     name: '活动信息-添加院校',
        //     component: resolve =>void(require(['@/views/admin/message/activityInformation/AddMajor'], resolve))
        // },
        // {
        //     path: '/message/hostuniversmajor',
        //     name: '活动-设置主办院校专业',
        //     component: resolve =>void(require(['@/views/admin/message/hostuniversmajor'], resolve))
        // },
        // {
        //     path: '/message/activityList',
        //     name: '活动-列表',
        //     component: resolve =>void(require(['@/views/admin/message/activityInformation/activityList'], resolve))
        // },
        // {
        //     path: '/message/coachList',
        //     name: '辅导-列表',
        //     component: resolve =>void(require(['@/views/admin/message/counselling/coachList'], resolve))
        // },
        // {
        //     path: '/message/changeMessage/:cid',
        //     name: '辅导-新建/编辑——基本信息',
        //     component: resolve =>void(require(['@/views/admin/message/counselling/changeMessage'], resolve))
        // },
        // {
        //     path: '/message/coupon/:id?',
        //     name: '辅导-新建/编辑——优惠卷设置',
        //     component: resolve =>void(require(['@/views/admin/message/counselling/coupon'], resolve))
        // },
        // {
        //     path: '/message/aboutActivity/:id?',
        //     name: '辅导-新建/编辑——相关活动设置',
        //     component: resolve =>void(require(['@/views/admin/message/counselling/aboutActivity'], resolve))
        // },
        // {
        //     path: '/message/choiceactivity',
        //     name: '信息管理-辅导-相关活动-添加活动',
        //     component: resolve =>void(require(['@/views/admin/message/counselling/choiceactivity'], resolve))
        // },
        // {
        //     path: '/message/informationList',
        //     name: '信息管理-资讯发布-资讯-列表',
        //     component: resolve =>void(require(['@/views/admin/message/informationRelease/informationList'], resolve))
        // },
        // {
        //     path: '/message/changeInformation/:infoId?',
        //     name: '信息发布-资讯发布-资讯内容编辑',
        //     component: resolve =>void(require(['@/views/admin/message/informationRelease/changeInformation'], resolve))
        // },
        // {
        //     path: '/message/recommend/:infoId',
        //     name: '信息发布-资讯发布-推荐信息',
        //     component: resolve =>void(require(['@/views/admin/message/informationRelease/recommend'], resolve))
        // },
        // {
        //     path: '/message/infoSelectMajor/:infoId?/:type?',
        //     name: '信息发布-资讯发布-选择院校专业',
        //     component: resolve =>void(require(['@/views/admin/message/informationRelease/infoSelectMajor'], resolve))
        // },
        // {
        //     path: '/message/informationNotice/:infoId?',
        //     name: '信息发布-资讯发布-消息通知',
        //     component: resolve =>void(require(['@/views/admin/message/informationRelease/informationNotice'], resolve))
        // },
        // {
        //     path: '/message/choReMajor',
        //     name: '信息发布-资讯发布-选择相关院校',
        //     component: resolve =>void(require(['@/views/admin/message/informationRelease/choiceRecommendMajor'], resolve))
        // },
        // {
        //     path: '/message/setReRead/:infoId?',
        //     name: '信息发布-资讯发布-设置相关推荐阅读',
        //     component: resolve =>void(require(['@/views/admin/message/informationRelease/setReRead'], resolve))
        // },
        // {
        //     path: '/message/adviseRead',
        //     name: '信息发布——资讯发布-添加资讯推荐',
        //     component: resolve =>void(require(['@/views/admin/message/informationRelease/adviseRead'], resolve))//添加资讯页面，与@/views/admin/operat/AddAdvise页面相同
        // },
        


        // //消息管理
        // {
        //     path: '/send/sendHome',
        //     name: '/send/sendHome',
        //     component: resolve =>void(require(['@/views/admin/sendMessage/send/sendHome'], resolve))
        // },
        // //消息管理-设置消息对象—特定行为的用户
        // {
        //     path: '/send/setMessageObject',
        //     name: '/send/setMessageObject',
        //     component: resolve =>void(require(['@/views/admin/sendMessage/send/setMessageObject'], resolve))
        // },
        // {
        //     path: '/send/setMessageSelf',
        //     name: '消息管理-设置消息对象—手动选择的用户',
        //     component: resolve =>void(require(['@/views/admin/sendMessage/send/setMessageSelf'], resolve))
        // },

        // {
        //     path: '/send/sendMessage',
        //     name: '消息管理-设置消息对象—选择院校',
        //     component: resolve =>void(require(['@/views/admin/sendMessage/send/sendMessage'], resolve))
        // },
        // {
        //     path: '/send/selectAcitity',
        //     name: '消息管理-设置消息对象—选择活动',
        //     component: resolve =>void(require(['@/views/admin/sendMessage/send/selectAcitity'], resolve))
        // },

        // {
        //     path: '/send/setMessageDetail',
        //     name: '消息管理-编辑发送',
        //     component: resolve =>void(require(['@/views/admin/sendMessage/send/setMessageDetail'], resolve))
        // },
        // {
        //     path: '/record/recordHome',
        //     name: '消息管理-历史消息记录',
        //     component: resolve =>void(require(['@/views/admin/sendMessage/record/recordHome'], resolve))
        // },
        // {
        //     path: '/record/recordDetail/:newsId',
        //     name: '消息管理-历史消息记录详情',
        //     component: resolve =>void(require(['@/views/admin/sendMessage/record/recordDetail'], resolve))
        // },
        // // 账户管理
        // {
        //     path: '/usermanagement/userfocusmajor',
        //     name: '用户管理-关注院校',
        //     component: resolve =>void(require(['@/views/admin/userManagement/userFocusMajor'], resolve))
        // },
        // {
        //     path: '/usermanagement/userlist',
        //     name: '用户管理-用户列表',
        //     component: resolve =>void(require(['@/views/admin/userManagement/userList'], resolve))
        // },
        // {
        //     path: '/usermanagement/userParticipateActivities',
        //     name: '用户管理-参与活动',
        //     component: resolve =>void(require(['@/views/admin/userManagement/userParticipateActivities'], resolve))
        // },
        // {
        //     path: '/usermanagement/usercoupons',
        //     name: '用户管理-优惠卷',
        //     component: resolve =>void(require(['@/views/admin/userManagement/userCoupons'], resolve))
        // },
        // // {
        // //     path: '/usermanagement/userparticipateactivities',
        // //     name: '用户管理-关注活动',
        // //     component: resolve =>void(require(['@/views/admin/usermanagement/userParticipateActivities'], resolve))
        // // },
        // //退款
        // {
        //     path: '/refund/refundlist',
        //     name: '用户管理-退款管理',
        //     component: resolve =>void(require(['@/views/admin/refund/refundList'], resolve))
        // },
        // {
        //     path: '/refund/refunddetails/:id',
        //     name: '用户管理-退款详情',
        //     component: resolve =>void(require(['@/views/admin/refund/refundDetails'], resolve))
        // },
        
    ],
	
	    scrollBehavior(to,from,saveTop){
	  if(saveTop){
	    return saveTop;
	  }else{
	    return {x:0,y:0}
	  }
	}
}



export default admin_router;