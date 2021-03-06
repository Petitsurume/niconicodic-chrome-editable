chrome.webRequest.onHeadersReceived.addListener(details => { // callback
    details.responseHeaders.push({
        "name": "X-XSS-Protection",
        "value": "0"
    })
    return {
        responseHeaders: details.responseHeaders
    }
}, { // filter
    urls: ["https://dic.nicovideo.jp/p/*"],
    types: ["main_frame"]
}, [
    "blocking",
    "responseHeaders"
])