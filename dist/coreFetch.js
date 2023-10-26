'use strict';var defu=require('defu');var state = function (value) {
    var obj = {
        value: value
    };
    return new Proxy(obj, {
        get: function (target, prop) {
            return target[prop];
        },
        set: function (target, prop, val, receiver) {
            return Reflect.set(target, prop, val, receiver);
        }
    });
};var createUrlInstance = function (url, options) {
    if (options === void 0) { options = {}; }
    // hostInit is require default http:localhost:3000
    var hostInit = state('http:localhost:3000');
    if (window) {
        var _a = window.location, host = _a.host, port = _a.port, protocol = _a.protocol;
        hostInit.value = "".concat(protocol, "//").concat(host).concat(port !== null && port !== void 0 ? port : ":".concat(port));
    }
    var hostName = options.hostName, query = options.query;
    var urlInstance = new URL(url, hostName || hostInit.value);
    // query is not undefined
    if (query) {
        var searchParams_1 = urlInstance.searchParams;
        var queryList = Object.entries(query);
        queryList.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return searchParams_1.append(key, String(value));
        });
    }
    return urlInstance;
};var bodyConvert = function (key, body) {
    if (key === 'formData') ;
    else {
        return JSON.stringify(body);
    }
};var coreFetch = function (url, options) {
    if (options === void 0) { options = {}; }
    var body = options.body, query = options.query, credentials = options.credentials, keepalive = options.keepalive, integrity = options.integrity, mode = options.mode, referrerPolicy = options.referrerPolicy, redirect = options.redirect;
    /**
     * 기본값
     */
    var defaultOptions = {
        method: 'GET',
        cache: 'default',
        keepalive: false,
        credentials: 'same-origin',
        mode: 'cors',
        referrerPolicy: 'no-referrer',
        redirect: 'follow'
    };
    /**
     * URL Instance 생성
     */
    var urlInstance = createUrlInstance(url, { query: query });
    var fetchOptions = {
        body: bodyConvert('json', body),
        keepalive: keepalive,
        credentials: credentials,
        integrity: integrity,
        mode: mode,
        referrerPolicy: referrerPolicy,
        redirect: redirect
    };
    return fetch(urlInstance, defu.defu(defaultOptions, fetchOptions));
};module.exports=coreFetch;