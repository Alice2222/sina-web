import axios from '../config/axios'

export const statusesShow = ()=> axios('/2/statuses/show.json');
export const checkForm = (type, value)=> axios('/2/users/checkform', {
		type, 
		value
	},'POST');
export const getProvinceList = ()=> axios('/2/users/getProvinceList',{}, 'GET')
