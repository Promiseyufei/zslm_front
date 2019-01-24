const testUrl = 'http://localhost:81/html/zslm_back/public'
const longUrl = 'http://www.lishanlei.cn'
const excelUrl = "http://www.zslm.com"
const FileUrl = longUrl+"/storage/major_file/"
const REFUNDURL = longUrl+"/storage/front/user/"
const USERURL = longUrl+"/storage/front/user/"
const MAJORURL = longUrl+"/storage/admin/info/"
let config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}
export default {
    testUrl,
    longUrl,
    config,
	FileUrl,
	REFUNDURL,
	USERURL,
	MAJORURL,
}