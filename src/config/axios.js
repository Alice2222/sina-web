import axios from 'axios'
let baseUrl = ''
if(process.env.NODE_ENV == 'development'){
	baseUrl = 'http://localhost:8003'
}
export default (url='' , data={}, success=()=>{}, error=()=>{}, type='GET')=>{
	if (type='GET'){

	}
	if(type='POST'){
		
		axios.post(baseUrl+url, data, {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json; charset=utf-8'
					},
					transformRequest: [function (data) {
				    // Do whatever you want to transform the data
				    let formData = new FormData();
						Object.keys(data).forEach(key=>{
							formData.append(key, data[key])
						})
						console.log(JSON.stringify(data))
				    return JSON.stringify(data);
				  }],
					validateStatus: function (status) {
						return status == status;
					}
				})
			 .then(response=>{
			 		if (response.status == 200) {
			 			success(response.data)
			 		} else {
			 			console.log('请求出错，状态码:'+response.status)
			 		}
			 })
			 .catch(response=>{console.log('请求异常')
			 		error()
			 })
	}
}