import request from "@/services/request";
import URLConstant from "@/services/URLConstant";


export function getHome() {
    console.log("获取首页数据");
    return request.get(URLConstant.GET_HOME_DATA);
}
