/**
 * Created by wangjiekun on 2016/10/9.
 */

function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        callback();
        return window.WVJBCallbacks.push(callback);
    }
    if (callback){
        callback();
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}

function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener(
            'WebViewJavascriptBridgeReady'
            , function () {
                callback(WebViewJavascriptBridge)
            },
            false
        );
    }
}

function jsToAppData(data,callback2) {

    if (window.WebViewJavascriptBridge) {
        window.WebViewJavascriptBridge.callHandler(
            'APP_ANDROID'
            , data
            , function (responseData) {
            }
        );
    }

        setupWebViewJavascriptBridge(function (bridge) {
            if (bridge) {
                bridge.callHandler('APP_APP', data, function responseCallback(responseData) {
                })
            } else {

                if (data.type=='#back'||data.type=='#backend'){
                    // alert(11);
                    history.go(-1);
                }else if (data.type=='#order'){
                    if (callback2){
                        callback2();
                    }
                }else if (data.type=='#index'){
                    mui.openWindow({url:'/index'})
                }else if (data.type=='#login'){
                    if (callback2){
                        callback2();
                    }else {
                    }
                }else if (data.type=='#logout'){
                    mui.openWindow({url:'/uc/public/logout'})
                }else if(data.type=='#map') {
                }else if (data.type=='#onwer'){
                    if (callback2){
                        callback2();
                    }
                }else if (data.type=='#fenxiang'){
                    if (callback2){
                        callback2();
                    }
                }else if (data.type=='#backlogin'){

                }else if (data.type=='#link'){
                    if (callback2){
                        callback2();
                    }
                }
                // else if (data.type.indexOf('/p/')>-1){
                //
                //     if (data.isapp>1){}else {
                //     let url = data.type.replace('#','');
                //     window.location.href = url;
                //     }
                // }
            }

        })
}

function registerApp(callback) {
    setupWebViewJavascriptBridge(function (bridge) {
        /* Initialize your app here */
        if (bridge){
        bridge.registerHandler('JS_JS', callback)
        }
    })
    connectWebViewJavascriptBridge(function (bridge) {
        bridge.init(function (message, responseCallback) {

        });

        bridge.registerHandler("JS_ANDROID", callback);
    })
}