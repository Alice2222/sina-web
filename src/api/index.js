import axios from '../config/axios'

export const statusesShow = ()=> axios('/2/statuses/show.json');
export const checkForm = (type, value)=> axios('/2/users/checkform', {
		type, 
		value
	},'POST');
export const getProvinceList = ()=> axios('/2/users/getProvinceList',{}, 'GET');
export const signin = (username, password, nickname='', province = -1, city=-1)=> axios('/2/users/signin', {
	username,
	password,
	nickname,
	province,
	city
}, 'POST');
export const login = (username, password)=> axios('/2/users/signup', {
	username,
	password
}, 'POST')
