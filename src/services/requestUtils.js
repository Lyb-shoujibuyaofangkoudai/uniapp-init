import request from "@/services/request";
import URLConstant from "@/services/URLConstant";

export function uploadFile(file) {
    return request.upload(URLConstant.POST_UPLOAD_FILE, {
        filePath: file
    });
}
