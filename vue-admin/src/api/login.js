import service from "@/utils/request.js";

export function Dologin(name,password) {
    service.request({
        mehtod:"post",
        url:"/getLogin",
        data:{name:name,password:password}
    })
    
}

