import Request from "luch-request";
const request = new Request({
    baseURL: import.meta.env.VITE_PATH
});

// 请求拦截器
request.interceptors.request.use((req) => {
    uni.showLoading({
        title: "数据请求中..."
    });
    req.header = {
        ...req.header,
        Authorization: uni.getStorageSync("token")
    };
    return req;
});

// 响应拦截器
request.interceptors.response.use((req) => {
    uni.hideLoading();
    if (req.data) {
        return req;
    }
});

export default request;
