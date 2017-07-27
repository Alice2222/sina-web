import axios from 'axios'
// import fetch from 'node-fetch'

let baseUrl = ''
if(process.env.NODE_ENV == 'development'){
	baseUrl = 'http://localhost:8003'
}
export default async(url='' , data={}, type='GET', success=()=>{}, error=()=>{})=>{
	if (type=='GET'){
		let response = await axios.get(baseUrl+url, data, {
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						timeout: '1000',
						validateStatus: function (status) {
							return status == status;
						}
					})
			return response
	}
	if(type=='POST'){
			let response = await axios.post(baseUrl+url, data, {
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						timeout: '1000',
						validateStatus: function (status) {
							return status == status;
						}
					})
			return response
	}

}
// export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
// 	type = type.toUpperCase();
// 	url = baseUrl + url;

// 	if (type == 'GET') {
// 		let dataStr = ''; //数据拼接字符串
// 		Object.keys(data).forEach(key => {
// 			dataStr += key + '=' + data[key] + '&';
// 		})

// 		if (dataStr !== '') {
// 			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
// 			url = url + '?' + dataStr;
// 		}
// 	}
	
// 	if (window.fetch && method == 'fetch') {
// 		let requestConfig = {
// 			credentials: 'include',
// 			//method: type,
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json'
// 			},
// 			mode: "cors",
// 			cache: "force-cache"
// 		}

// 		if (type == 'POST') {
// 			Object.defineProperty(requestConfig, 'body', {
// 				value: JSON.stringify(data)
// 			})
// 		}
		
// 		try {
// 			const response = await fetch(url, {
// 				method: 'post',
// 				...requestConfig
// 			}).then(response=>{});
// 			const responseJson = await response.json();
// 			return responseJson
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	} else {
// 		return new Promise((resolve, reject) => {
// 			let requestObj;
// 			if (window.XMLHttpRequest) {
// 				requestObj = new XMLHttpRequest();
// 			} else {
// 				requestObj = new ActiveXObject;
// 			}

// 			let sendData = '';
// 			if (type == 'POST') {
// 				sendData = JSON.stringify(data);
// 			}
			
// 			requestObj.open(type, url, true);
// 			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 			requestObj.send(sendData);

// 			requestObj.onreadystatechange = () => {
// 				if (requestObj.readyState == 4) {
// 					if (requestObj.status == 200) {
// 						let obj = requestObj.response
// 						if (typeof obj !== 'object') {
// 							obj = JSON.parse(obj);
// 						}
// 						resolve(obj)
// 					} else {
// 						reject(requestObj)
// 					}
// 				}
// 			}
// 		})
// 	}
// }