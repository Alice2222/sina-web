import axios from '../config/axios'

export const statusesShow = ()=>{axios('/2/statuses/show.json')}
export const checkForm = ()=>{axios('/2/users/checkform', {type:'email', value:'123'},()=>{},()=>{},'POST')}
