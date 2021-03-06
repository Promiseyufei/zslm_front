export default [
    {
        "index" :1,
        "icon": "fa fa-sliders fa-lg fa-fw",
        "title": "控制中心",
        "groups":[
            {
                "title": "分组一",
                "options":[
                    {
                        "name":"选项一",
                        "index":1.1,
                        "url":"/operate"
                    },
                    {
                        "name":"选项二",
                        "index":1.2,
                        "url":"/operate"
                    }
                ]
            },
            {
                "title": "分组二",
                "options":[
                    {
                        "name":"选项一",
                        "index":1.3,
                        "url":"/operate"
                    },
                    {
                        "name":"选项二",
                        "index":1.4,
                        "url":"/operate"
                    }
                ]
            }
        ]
    },
    {
        "index" :2,
        "icon": "fa fa-user-o fa-lg fa-fw",
        "title": "账户管理",
        "groups":[
            {
                "title": "用户列表",
                "options":[
                    {
                        "name":"用户列表",
                        "index":2.1,
                        "url":"/admin/usermanagement/userlist"
                    }
                ]
            },
            {
                "title": "用户行为",
                "options":[
                    {
                        "name":"关注院校",
                        "index":2.2,
                        "url":"/admin/usermanagement/userfocusmajor"
                    },
                    {
                        "name":"参与活动",
                        "index":2.3,
                        "url":"/admin/usermanagement/userParticipateActivities"
                    },
                    {
                        "name":"领优惠卷",
                        "index":2.4,
                        "url":"/admin/usermanagement/usercoupons"
                    }
                ]
            }
        ]
    },
    {
        "index" :3,
        "icon": "fa fa-commenting-o fa-lg fa-fw",
        "title": "信息发布",
        "groups":[
            {
                "title": "信息发布",
                "options":[
                    {
                        "name":"院校专业",
                        "index":3.1,
                        "url":"/admin/message/universMajorList"
                    },
                    {
                        "name":"活动信息",
                        "index":3.2,
                        "url":"/admin/message/activityList"
                    },
                    {
                        "name":"辅导机构",
                        "index":3.3,
                        "url":"/admin/message/coachList"
                    },
                    {
                        "name":"资讯发布",
                        "index":3.4,
                        "url":"/admin/message/informationList"
                    },
                ]
            },
        ]
    },
    {
        "index" :4,
        "icon": "fa fa-folder-open-o fa-lg fa-fw",
        "title": "文件管理",
        "groups":[
            {
                "title": "文件管理",
                "options":[
                    {
                        "name":"文件上传",
                        "index":1,
                        "url":"/admin/SelectUnivers"
                    },
                    {
                        "name":"文件管理",
                        "index":2,
                        "url":"/admin/files"
                    }
                ]
            }
        ]
    },
    
    {
        "index" :5,
        "icon": "fa fa-file-text-o fa-lg fa-fw",
        "title": "消息管理",
        "groups":[
            {
                "title": "发消息",
                "options":[
                    {
                        "name":"发消息",
                        "index":5.1,
                        "url":"/admin/send/sendHome"
                    }
                ]
            },
            {
                "title": "历史消息记录",
                "options":[
                    {
                        "name":"历史记录",
                        "index":5.2,
                        "url":"/admin/record/recordHome"
                    }
                ]
            },
        ]
    },
    {
        "index" :6,
        "icon": "fa fa-paper-plane-o fa-lg fa-fw",
        "title": "运营管理",
        "groups":[
            {
                "title": "展示管理",
                "options":[
                    {
                        "name":"频道Banner",
                        "index":6.1,
                        "url":"/admin/operate"
                    },
                    {
                        "name":"资讯首页推荐",
                        "index":6.2,
                        "url":"/admin/operate/advise"
                    },
                    {
                        "name":"广告位管理",
                        "index":6.3,
                        "url":"/admin/operate/ad"
                    }
                ]
            },
            {
                "title": "分享管理",
                "options":[
                    {
                        "name":"分享数据",
                        "index":6.4,
                        "url":"/admin/operate/sharedata"
                    }
                ]
            }
        ]
    },  
    {
        "index" :7,
        "icon": "fa fa-money fa-lg fa-fw",
        "title": "退款管理",
        "groups":[
            {
                "title": "退款管理",
                "options":[
                    {
                        "name":"退款管理",
                        "index":7.1,
                        "url":"/admin/refund/refundlist"
                    },
                    // {
                    //     "name":"退款管理",
                    //     "index":2,
                    //     "url":"/operate"
                    // }
                ]
            }
        ]
    },
    {
        "index" :8,
        "icon": "fa fa-television fa-lg fa-fw",
        "title": "模考管理",
        "groups":[
            {
                "title": "模考管理",
                "options":[
                    {
                        "name":"模考管理",
                        "index":8.1,
                        "url":"/admin/operate"
                    },
                    {
                        "name":"模考管理",
                        "index":8.2,
                        "url":"/admin/operate"
                    }
                ]
            }
        ]
    }
]