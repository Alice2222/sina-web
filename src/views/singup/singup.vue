<template>
	<transition name="slide-fade">
	<div class="login-box">
		<section class="top_line"></section>
		<section class="logo">
			<img src="../../assets/logo_big.png" alt="">
		</section>
		<main class="login-main">
			<div class="tab-header">
				<ul class="tab-list">
					<div class="bottom-line"></div>	
					<li class="tab-item" :class="{is_active: person_reg}" @click.stop="handleClickTabItem(true)">
						<section class="tab-item_text">
							个人注册
						</section>
					</li>
					<li class="tab-item"><span class="v-line"></span></li>
					<li class="tab-item" :class="{is_active: !person_reg}"  @click.stop="handleClickTabItem(false)">
						<section class="tab-item_text">
							官方注册
						</section>
					</li>
					<li class="clearfix"></li>
				</ul>
			</div>
			<div class="tab-content">
				<transition name="fade">
					<section class="person-reg" v-if="person_reg">
						<form class="reg-form">
							<section class="form-group">
								<label for="email"><span class="email-icon"></span><i class="red">*</i>邮箱：</label>
								<div class="form-control">
									<input type="text" v-model.trim="person_reg_info.email" v-on:focus="handleFocusReginfo('email')" v-on:blur="handleBlurReginfo('email')" placeholder="请输入您的常用邮箱"/>
								</div>
								<div class="tips">
									<p class="error"  v-if="email_error">
										<span class="error-icon"></span>{{email_error_text}}
									</p>
									<p class="notice"  v-if="email_notice">
										<span class="info-icon"></span>您填写的邮箱将作为微博登录名
									</p>
									<p class="success" v-if="email_succ">
										<span class="succ-icon"></span>
									</p>
									<p class="loading" v-if="email_loading">
										<i class="icon-spinner icon-spin icon-1x"></i>
									</p>
								</div>
								<div class="clearfix"></div>
							</section>
							<section class="form-group">
								<label for=""><i class="red">*</i>设置密码：</label>
								<div class="form-control">
									<input type="password" v-on:focus="handleFocusReginfo('psw')" v-model.trim="person_reg_info.password" v-on:blur="handleBlurReginfo('psw')" v-on:keyup="handleKeyupRegInfo('psw')" placeholder=""/>
								</div>
								<div class="tips">
									<p class="error"  v-if="psw_error">
										<span class="error-icon"></span>{{psw_error_text}}
									</p>
									<p class="notice"  v-if="psw_notice">
										<span class="info-icon"></span>请输入6-16位数字、字母或常用符号，字母区分大小写
									</p>
									<p class="success"  v-if="psw_succ">
										<span class="succ-icon"></span>
									</p>
								</div>
								<div class="clearfix"></div>
							</section>
							<button class="btn btn-large btn-singup" type="submit">立即注册</button>
							<section class="info_list">
								<ul>
									<li>
										<a href="">微博服务使用协议</a>
									</li>
									<li>
										<a href="">微博个人信息保护政策</a>
									</li>
									<li>
										<a href="">全国人大常委会关于加强网络信息保护的决定</a>
									</li>
								</ul>
							</section>
						</form>
					</section>
				</transition>
				<transition name="fade">
					<section class="official-reg" v-if="!person_reg">
						<header>
							<p>官方认证类型包括：政府、企业、媒体、网站、应用、机构、公益、校园组织</p>
							<p class="red">注意：非官方类用户，请直接在个人注册处注册</p>
						</header>
						<form class="reg-form">
							<section class="form-group">
								<label for="email"><span class="email-icon"></span><i class="red">*</i>邮箱：</label>
								<div class="form-control">
									<input type="text" v-model.trim="official_reg_info.email" v-on:focus="handleFocusReginfo('email')" v-on:blur="handleBlurReginfo('email')" placeholder="邮箱登录"/>
								</div>
								<div class="tips">
									<p class="error"  v-if="email_error">
										<span class="error-icon"></span>{{email_error_text}}
									</p>
									<p class="notice"  v-if="email_notice">
										<span class="info-icon"></span>请输入您常用的邮箱请不要使用私人邮箱作为企业微博的注册邮箱
									</p>
									<p class="success" v-if="email_succ">
										<span class="succ-icon"></span>
									</p>
									<p class="loading" v-if="email_loading">
										<i class="icon-spinner icon-spin icon-1x"></i>
									</p>
								</div>
								<div class="clearfix"></div>
							</section>
							<section class="form-group">
								<label for=""><i class="red">*</i>设置密码：</label>
								<div class="form-control">
									<input type="password" v-on:focus="handleFocusReginfo('psw')" v-model.trim="official_reg_info.password" v-on:blur="handleBlurReginfo('psw')" v-on:keyup="handleKeyupRegInfo('psw')" placeholder=""/>
								</div>
								<div class="tips">
									<p class="error"  v-if="psw_error">
										<span class="error-icon"></span>{{psw_error_text}}
									</p>
									<p class="notice"  v-if="psw_notice">
										<span class="info-icon"></span>请输入6-16位数字、字母或常用符号，字母区分大小写
									</p>
									<p class="success"  v-if="psw_succ">
										<span class="succ-icon"></span>
									</p>
								</div>

								<div class="clearfix"></div>
							</section>
							<section class="form-group">
								<label for=""><i class="red">*</i>官方注册微博名：</label>
								<div class="form-control">
									<input type="text" v-on:focus="handleFocusReginfo('nickname')" v-model.trim="official_reg_info.nickname" v-on:blur="handleBlurReginfo('nickname')" v-on:keyup="handleKeyupRegInfo('psw')" placeholder=""/>
								</div>
								<div class="tips">
									<p class="error"  v-if="nickname_error">
										<span class="error-icon"></span>{{nickname_error_text}}
									</p>
									<p class="notice"  v-if="nickname_notice">
										<span class="info-icon"></span>请填写企业/品牌的全称或无歧义简称可输入4-30位，包含英文、数字和中文
									</p>
									<p class="success"  v-if="nickname_succ">
										<span class="succ-icon"></span>
									</p>
								</div>
								<div class="clearfix"></div>
							</section>
							<section class="form-group">
								<label for=""><i class="red">*</i>所在地：</label>
								<div class="form-control">
									<select name="" id="" v-model.lazy="official_reg_info.province" @change="handleProvinceChange">
										<option v-for="opt in province_opts" :value="opt.id">{{opt.fullname}}</option>
									</select>
									<select name="" id="" v-model="official_reg_info.city">
										<option v-for="opt in city_opts" :value="opt.id">{{opt.fullname}}</option>
									</select>
								</div>
								<div class="clearfix"></div>
							</section>
							<button class="btn btn-large btn-singup" @click="handleClickSingup">立即注册</button>
							<section class="info_list">
								<ul>
									<li>
										<a href="">微博服务使用协议</a>
									</li>
									<li>
										<a href="">微博个人信息保护政策</a>
									</li>
									<li>
										<a href="">全国人大常委会关于加强网络信息保护的决定</a>
									</li>
								</ul>
							</section>
						</form>
					</section>
				</transition>
				<div id="side-bar">
					<img src="../../assets/reg_vline.png" alt="">
					<div class="info-list">
						<p class="title">已有账号，<router-link to="/">直接登录>></router-link></p>
						<ul>
							<li class="list-title">微博注册帮助</li>
							<li><span class="number-icon">1</span><router-link to="/">微博注册操作指南</router-link></li>
							<li><span class="number-icon">2</span><router-link to="/">手机注册时提示手机号码已被绑定怎么办?</router-link></li>
							<li><span class="number-icon">3</span><router-link to="/">注册微博时昵称显示“已经被注册”如何处理?</router-link></li>
							<li><span class="number-icon">4</span><router-link to="/">注册时提示"你所使用的IP地址异常",该怎么办?</router-link></li>
							<li><span style="width:21px;display:inline-block"></span><router-link to="/">更多帮助>></router-link></li>
						</ul>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
    	<!-- <ui-button @click="showConfirm('basic-confirm')">Basic Confirm</ui-button> -->
		</main>
		<!-- <alert-tip :alertText="alertText" ref="basic-confirm"></alert-tip> -->
	</div>
	</transition>
</template>
<script>
	import AlertTip from "@/components/AlertTip";
	import {statusesShow, checkForm, getProvinceList} from "@/api/index"
	let validatePsw, validateEmail, validateNickname, initProvinceOpts, changeCityOpts;
	export default{
		data(){
			return{
				person: {
					phone: ''
				},
				rules: {
					phone:[{required: true, message: '请填写手机号', trigger: 'blur' }]
				},
				alertText: '确认' ,
				person_reg: false,
				person_reg_info: {
					email: '',
					password: ''
				},
				psw_notice: false,
				psw_error: false,
				psw_succ: false,
				email_notice: false,
				email_error: false,
				email_error_text: '请输入常用邮箱',
				email_succ: false,
				psw_error_text: '请输入密码',
				email_loading: false,
				official_reg_info: {
					email: '',
					password: '',
					province: '',
					city: '',
					nickname: ''
				},
				nickname_notice: false,
				nickname_error: false,
				nickname_succ: false,
				nickname_error_text: '请输入昵称',
				province_opts: [],
				city_opts: [],
				all_opts: []
			}
		},
		created(){
			this.handleClickTabItem(true)
			initProvinceOpts(this);
		},
		components:{
			AlertTip
		},
		computed:{

		},
		methods:{
			showConfirm(ref) {
          this.$refs[ref].showConfirm();
      },
      handleClickTabItem: function(person_reg){
      	this.person_reg = person_reg;
				
      	this.$nextTick(function(){
      		let $tab_item = $(".tab-item"),
      			$bottom_line = $(".bottom-line"),
      			$active=  $(".is_active"),
      			bottom_line_start = 10;
      		$tab_item.each(function(index){
	      		if(index < $active.index()-1){
	      			bottom_line_start += $(this).outerWidth(true)
	      		}
	      	})
	      	$bottom_line.animate({left:bottom_line_start, width: $active.outerWidth(false)},200)
	      	this.person_reg_info = {
						email: '',
						password: ''
					}
					this.psw_notice = false;
					this.psw_error = false;
					this.psw_succ = false;
					this.email_notice = false;
					this.email_error = false;
					this.email_succ = false;
					this.psw_error_text = '请输入密码';
					this.email_loading = false;
					this.official_reg_info.email = ''
					this.official_reg_info.password = ''
					this.official_reg_info.nickname = ''
      	})
      },
      handleBlurReginfo: function(type){
      	switch(type){
      		case 'psw':
		      	validatePsw(this);break;
      		case 'email':
      			validateEmail(this);break;
      		case 'nickname': 
      			validateNickname(this);break;
      	}
      	
      },
      handleFocusReginfo: function(type){
      	let obj = {}
      	if(this.person_reg){
					obj = this.person_reg_info
      	}else{
      		obj = this.official_reg_info
      	};
      	switch(type){
      		case 'psw':
		      	if(obj.password.length == 0){
				  		this.psw_notice = true;
				  		this.psw_error = false;
				  	}else validatePsw(this)
      			break;
      		case 'email':
		      	if(obj.email.length == 0){
				  		this.email_notice = true;
				  		this.email_error = false;
				  		this.email_loading = false;
				  	}else validateEmail(this)
      			break;
      		case 'nickname':
      			if(obj.nickname.length == 0){
				  		this.nickname_notice = true;
				  		this.nickname_error = false;
				  		this.nickname_loading = false;
				  	}else validateNickname(this)
      			break;
      	}
      },
      handleKeyupRegInfo: function(type){
      	switch(type){
      		case 'psw': 
      			validatePsw(this);break;
      	}
      },
      handleSubmitForm: function(type){
      	switch(type){
      		case 'email':
      			console.log(type);break;
      	}
      },
      handleProvinceChange: function(){
      	changeCityOpts(this)
      },
      handleClickSingup: function(){
      	
      }
		}
	}
	validatePsw = vm=>{
		let password = ''
		if(vm.person_reg){
			password = vm.person_reg_info.password;
		}else{
			password = vm.official_reg_info.password;
		}
		if(password.length < 6 || password.length > 16){
			vm.psw_notice = false;
			vm.psw_error = true;
			vm.psw_succ = false;
			if(password.length == 0){
				vm.psw_error_text = '请输入密码'
			} else{
				vm.psw_error_text = '请输入6-16位数字、字母或常用符号，字母区分大小写'
			}
		}else {
				vm.psw_notice = false;
				vm.psw_error = false;
				vm.psw_succ = true;
				vm.psw_error_text = ''
		}
	}
	validateEmail = async(vm)=>{
		let email = ''
		if(vm.person_reg){
			email = vm.person_reg_info.email
		}else{
			email = vm.official_reg_info.email;
		}
		vm.email_loading = false
		vm.email_notice = false
		vm.email_error = false
		vm.email_succ = false
		let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		if(!reg.test(email)){
			vm.email_error = true
		} else {
			vm.email_loading = true
			let info = await checkForm('username', email),
					status = info.data.status;
			if (!status == false) {
				if(status.toString() == 0){
					vm.email_loading = false
					vm.email_error = true
				 	vm.email_error_text = info.data.message
				} else {
					vm.email_loading = false
					vm.email_error = false
					vm.email_succ = true
				}
			}
			
		}
	}
	validateNickname = vm=>{
		let nickname = vm.official_reg_info.nickname;
		if(nickname.length < 4 || nickname.length >30){
			vm.nickname_notice = false;
			vm.nickname_error = true;
			vm.nickname_succ = false;
			if(nickname.length == 0){
				vm.nickname_error_text = '请输入昵称'
			}else{
				vm.nickname_error_text = '请填写企业/品牌的全称或无歧义简称可输入4-30位，包含英文、数字和中文'
			}
		}else {
				vm.nickname_notice = false;
				vm.nickname_error = false;
				vm.nickname_succ = true;
				vm.nickname_error_text = ''
		}
	}
	initProvinceOpts = async(vm)=>{
		let result = await getProvinceList();
		if(result.status == 200){
			vm.all_opts = result.data.data[1]
			vm.province_opts = result.data.data[0];
			vm.official_reg_info.province = result.data.data[0][0].id;
			vm.handleProvinceChange()
		}
	}
	changeCityOpts = async(vm)=>{
		let province = vm.official_reg_info.province,
				all_opts = vm.all_opts,
				province_opts = vm.province_opts,
				cidx = [];
		province_opts.map(opt=>{
			if(opt.id === province){
				cidx = opt.cidx
			}
		})
		vm.city_opts = all_opts.slice(cidx[0], cidx[1]);
		vm.official_reg_info.city = vm.city_opts[0].id
	}
</script>
<style lang="scss" scoped>
	$orange-color: #ffa00a;
	.login-box{
		background-image: url(../../assets/reg_repeat_bg.png);
		background-repeat: repeat-x;
		width: 100%;
		min-height: 1000px;
		.top_line{
			background-image: url(../../assets/top_line_bg.png);
			height: 3px;
		}
		img{
			display: block
		}
		.logo{
			margin: 0 auto ;
			width: 900px;
			height: 186px;
			background-image: url(../../assets/bg_reg_wave.png);
			padding-top: 30px;
			img{
				margin: auto ;
			}

		}
	}
	.login-main{
		width: 900px;
		margin: 0 auto 15px;
		border-radius: 6px;
		box-shadow: 0px 2px 3px #98b4c4;
    -moz-box-shadow: 0px 2px 3px #98b4c4;
    -webkit-box-shadow: 0px 2px 3px #98b4c4;
    background: #fff;
    .tab-header{
    	padding: 20px 20px 0 20px;
			.tab-list{
				position: relative;
				.tab-item{
					float: left;
					font-size: 22px;
					margin: 10px;
					cursor: pointer;
					.v-line{
				    height: -32px;
				    display: inline-block;
				    height: 14px;
				    width: 1px;
				    background: #999;
					}
				}
				.tab-item.is-active{
					border-bottom: 2px ;
				}
				.bottom-line{
					height: 3px;
					width: 11px;
					background: $orange-color;
					display: inline-block;
					position: absolute;
					bottom: 8px;
				}
				
			}
			
    }
    .tab-content{
    	.person-reg, .official-reg{
    		padding: 40px 0 0 10px;
    		width: 650px;
    		float: left;
    		.reg-form{
    			.form-group{
    				font-size: 14px;
    				margin-bottom: 20px;
    				position: relative;
    				label{
    					line-height: 30px;
    					display: block;
    					float: left;
    					width: 160px;
    					text-align: right;
    				}
    				.form-control{
    					float: left;
    					input:focus{
    						border: 1px solid $orange-color;
    						outline: 0;
    					}
    					input{
    						height: 28px;
						    width: 196px;
						    border: 1px solid #ccc;
						    border-radius: 2px;
						    padding: 0 2px;
						    -webkit-box-shadow: 0px 1px 1px 0px #eaeaea inset;
						    -moz-box-shadow: 0px 1px 1px 0px #eaeaea inset;
						    box-shadow: 0px 1px 1px 0px #eaeaea inset;
    					}
    				}
    			}
    			.info_list{
					    margin: 10px 10px 0 157px;
    			}
    		}
    	}
    	.official-reg{
    		padding: 0px;
    		header{
    			padding: 20px 0 40px 35px;
    		}
    		select{
    			height: 25px;
    		}
    	}
    	#side-bar{
    		width: 250px;
    		float: left;
    		img{
    			width: 1px;
    			display: inline-block;
    			float: left;
    		}
    		.info-list{
    			display: inline-block;
    			float: left;
    			margin: 46px 18px 0 25px;
			    font-size: 14px;
			    width: 206px;
			    .title{
	    			padding-bottom: 3px;
					  border-bottom: 1px dotted #ccc;
					  margin-bottom: 12px;
	    		}
	    		ul{
	    			font-size: 12px;
	    			.list-title{
	    				font-size: 14px;
	    			}
	    			li{
	    				margin-bottom: 10px;
	    				a{
	    					width: 162px;
						    display: inline-block;
						    word-break: break-all;
						    line-height: 21px;
						  }
	    			}
	    		}
    		}
    }
	}
	.email-icon{
		margin-right: 8px;
		background-image: url(../../assets/reg_method_s.png);
		display: inline-block;
    width: 23px;
    height: 21px;
    background-size: 100%;
    vertical-align: middle;
	}
	.info-icon{
		margin-right: 2px;
    background-image: url(../../assets/ico_warn.png);
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background-position: 0px -200px;
	}
	.error-icon{
		margin-right: 2px;
    background-image: url(../../assets/ico_warn.png);
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background-position: 0px -250px;
	}
	.succ-icon{
		margin-right: 2px;
    background-image: url(../../assets/ico_warn.png);
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background-position: 0px 0px;
	}
	.number-icon{
		margin-right: 6px;
    background-image: url(../../assets/bg_listNum.png);
    display: inline-block;
    width: 15px;
    height: 18px;
    vertical-align: top;
    background-repeat: no-repeat;
    text-align: center;
    color: #fff;
    margin-top: 3px;
}
	}
	.red{
		color: #F00;
    font-family: "SimSun";
    padding-right: 4px;
	}
	.tips{
		font-size: 12px;
		position: absolute;
    left: 353px;
		.notice, .error, .success, .loading{
			display: inline-block;
	    /* line-height: 27px; */
	    color: #929ea5;
	    padding-left: 33px;
	    text-indent: -20px;
	    padding-top: 4px;
	    word-break: break-all;
	    width: 260px;
		}
		.error{
			color: #da4f23;
		}
		.loading{
			color: #4c81af;
			text-indent: 0
		}
	}
	.btn{
		border: 1px solid #ffb33b;
		color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-left: 159px;
    padding: 6px 66px;
    cursor: pointer;
    border-radius: 2px;
    background: #FFA00A;
	}
	.btn:hover{
		background: linear-gradient(to bottom, rgba(255,184,71,1) 0%,rgba(255,162,16,1) 100%);
	}
	
</style>