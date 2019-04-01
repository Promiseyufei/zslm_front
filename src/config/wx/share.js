
export default {
    share() {
        var signature = {};
        let url = encodeURIComponent(window.location.href.split('#')[0]);
        this.fetch('/getToken', {
            url: url
        }).then((response) => {
            if(response.code == 0) {
                console.log(response.result);
                signature = response.result;
                wx.config({
                    // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    debug: true,
                    appId: signature.appId,
                    timestamp: signature.timestamp,
                    nonceStr: signature.nonceStr,
                    signature: signature.signature,
                    jsApiList: [
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone',
                        // 'updateAppMessageShareData'
                    ]
                });
            }
            else this.message(true, '获取微信分享权限失败，请重新尝试', 'info');
        });
        wx.ready(() => {
            // wx.checkJsApi({
            //     jsApiList: ['updateAppMessageShareData'],
            //     success(res) {
            //         console.log(res);
            //     }
            // });

            //分享给朋友
            wx.onMenuShareAppMessage({
            title: 'test', // 分享标题
            link: window.location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function (res) {
                // 用户确认分享后执行的回调函数
                console.log("分享给朋友成功返回的信息为:",res);
            },
            cancel: function (res) {
                // 用户取消分享后执行的回调函数
                console.log("取消分享给朋友返回的信息为:",res);
            }
            });
            
            // var shareUrl = window.location.href.split('#')[0];
            // var obj = {
            //     title: 'test',
            //     desc: '点击查看那些未曾对你说出口的话吧！',
            //     link: shareUrl,
            //     imgUrl:'http://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
            //     success: function(res) {
            //         console.log(res);
            //     },
            //     fail: function(res) {
            //         console.log(res)
            //     },
            //     complete: function(res) {
            //         console.log(res)
            //     }
            // };
            // //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
            // wx.updateAppMessageShareData(obj);
        });
        wx.error((res) => {
            console.log(res)    
        })
    }
}

