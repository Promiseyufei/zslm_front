export default {
    share() {
        var signature = {};
        this.fetch('/getToken', {
            url: window.location.href
        }).then((response) => {
            if(response.code == 0) {
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
                        'updateAppMessageShareData'
                    ]
                });
            }
            else this.message(true, '获取微信分享权限失败，请重新尝试', 'info');
        });
        wx.ready(() => {
            wx.checkJsApi({
                jsApiList: ['updateAppMessageShareData'],
                success(res) {
                    console.log(res);
                }
            });
        
            var shareUrl = window.location.href;
            var obj = {
                title: 'test',
                desc: '点击查看那些未曾对你说出口的话吧！',
                link: shareUrl,
                imgUrl:'http://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
                success: function(res) {
                    console.log(res);
                },
                fail: function(res) {
                    console.log(res)
                },
                complete: function(res) {
                    console.log(res)
                }
            };
            //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
            wx.updateAppMessageShareData(obj);
        });
        wx.error((res) => {
            console.log(res)    
        })
    }
}

