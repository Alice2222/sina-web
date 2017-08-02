<template>
	<header id="header_top" class="animated fadeIn">
		<hgroup class="clearfix">
			<section class="logo"><img src="../assets/WB_logo.png" alt=""></section>
			<section class="gn_search" :class=" {orange: searchFocus}">
				<input type="text" node-type="searchInput" class="N-input" placeholder="大家正在搜" v-on:focus="searchFocus=true" v-on:blur="searchFocus=false"/>
				<router-link to="/"><i class="fa fa-search"></i></router-link>
				<div class="gn_topmenulist_search">
					<div class="basic"></div>
					<div class="plus">
					</div>
				</div>
			</section>
			<section class="gn_actions">
				<div class="gn_nav">
					<ul class="clearfix">
						<li><router-link to="/"><i class="fa fa-home"></i><span class="nav_text">首页</span></router-link></li>
						<li><router-link to="/"><i class="fa fa-video-camera"></i><span class="nav_text">视频</span></router-link></li>
						<li><router-link to="/"><i class="fa fa-cc-discover"></i><span class="nav_text">发现</span></router-link></li>
						<li><router-link to="/"><i class="fa fa-gamepad"></i><span class="nav_text">游戏</span></router-link></li>
					</ul>
				</div>
				<div class="gn_login">
					<ul class="gn_login_list clearfix">
						<li><a href="javascript:void(0)">注册</a></li>
						<li class="v-line">|</li>
						<li><a href="javascript:void(0)" @click="dialogLogin=true">登录</a></li>
					</ul>
				</div>
			</section>
			<!-- <Button @click="modal2 = true">自定义页头和页脚</Button> -->
		</hgroup>
		<div class="login_dialog" :class="{hidden: !dialogLogin}">
			<div class="dialog-mask"></div>
			<div class="dialog-wrap">
				<div class="dialog-body animated" :class="{zoomIn: dialogLogin}">
					<header>
						<span class="dialog-dismiss" v-on:click="dialogLogin=false"><i class="fa fa-close"></i></span>
					</header>
					<main>
						<div class="wrap">
							<div class="tab-bar">账号登录</div>
							<form>
								<section class="username-sec">
									<i class="fa fa-user-o"></i>
									<input type="text" placeholder="邮箱/会员账号" v-model.trim="login_info.username" v-on:focus="error_text=''">
								</section>
								<section class="password-sec">
									<i class="fa fa-lock"></i>
									<input type="password" placeholder="请输入密码" v-model.trim="login_info.password" v-on:focus="error_text=''">
								</section>
								<section class="description clearfix">
									<span class="pull-left"><input type="checkbox"/>下次自动登录</span><span class="pull-right"><router-link to="/">忘记密码</router-link>&nbsp;&nbsp;&nbsp;</span>
								</section>
								<section class="form-submit">
									<button class="btn btn-login" type="button" v-on:click.captrue="handleLogin">登录</button>
								</section>
								<div class="tips" :class="{hidden: !error_text}">
									<div class="main_text"><span class="info-icon"></span>{{error_text}}</div>
									<div class="pointer"></div>
								</div>
							</form>
						</div>
					</main>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
	import {login} from '@/api/index'
	let setTipsPosition, validate;
	export default{
		data(){
			return{
				searchFocus: false,
				dialogLogin: false,
				error_text: '',
				login_info:{
					username: '',
					password: ''
				},
				username_error: true,
				password_error: true
			}
		},
		methods:{
			async handleLogin(){
				if(!this.login_info.username || !this.login_info.password){
					if(!this.login_info.username){
						validate(this, 'username')
					}else{
						validate(this, 'password')
					}
				}else{
					let response = await login(...Object.values(this.login_info));
					if(response.data.status == 0){
						this.username_error = true;
						this.error_text = response.data.message;
						setTipsPosition(this, 'username');
					}
				}
			}
		}
	}
	setTipsPosition = (vm, type)=>{
		let str = null, obj = $('section.'+type+'-sec');
			const position = obj.position(),
						obj_left = position.left,
						obj_top = position.top,
						obj_height = obj.outerHeight(),
						obj_width = obj.outerWidth();
			vm.$nextTick(function(){
				let $tips = $(".tips"), tips_width = $tips.outerWidth(), left = (obj_width-tips_width)/2, top = obj_top-obj_height;
				$tips.css({left:left, top: top})
			})
	}
	validate = (vm, type)=>{
		let error_text = null;
		switch(type){
			case('username'):
				error_text = '请输入邮箱/用户名';break;
			case('password'):
				error_text = '请输入密码';break;
		}
		if(vm.login_info[type] == ''){
			vm[type+'_error'] = true;
			vm.error_text = error_text
			setTipsPosition(vm, type)
		}else{
			vm[type+'_error'] = false;
			vm.error_text = ''
		}
	}
</script>
<style lang="scss">
	#header_top{
		height: 48px;
		position: fixed;
		top: 0;
		left: 0;
		border-top: 2px solid #fa7d3c;
		box-shadow: 0 0 1px 0px rgba(0,0,0,0.15);
    background: #fff; 
    width: 100%;
    hgroup{
    	width: 1280px;
    	margin: auto;
    	padding-top: 8px;
    	.gn_search{
    		width: 468px;
    		border: 1px solid #ccc;
    		background: #f2f2f5;
    		a{
	  			color: #6f6f6f;
	  			font-size: 15px
	  		}
    	}
    	a{
  			color: #6f6f6f;
  			font-size: 15px
  		}
  		a:hover{
  			color: #fa7d3c
  		}
  		section{
  			float: left;
  		}
  		.logo{
  			width: 140px;
  			img{
  				margin: auto;
  				display: block;
  			}
  		}
    }
	}
	input, input:focus{
		border: 0;
		-webkit-box-shadow: 0px 0px 0px 0px #eaeaea inset;
	  -moz-box-shadow: 0px 0px 0px 0px #eaeaea inset;
	  box-shadow: 0px 0px 0px 0px #eaeaea inset;
	}
	.N-input{
    width: 439px;
    background-color: #f2f2f5;
	}
	.orange{
		border: 1px solid #fa7d3c!important;
		background: #fff!important;
		input{
			background: #fff!important;
		}
	}
	.gn_actions{
		float: right!important;
		.gn_nav{
			float: left;
			li{
				float: left;
				display: block;
				a{
  				i{
	  				font-size: 24px;
	  				position: relative;
    				top: 2px;
    				padding-right: 5px;
	  			}
					padding: 5px 16px;
					.nav_text{
						font-size: 14px;
					}
				}
			}
		}
		.gn_login{
			float: left;
			.gn_login_list{
				li{
					float: left;
					display: block;
					padding: 6px;
					font-size: 13px;
					a{
						font-size: 14px!important;
						padding: 2px 0;
					}
				}
				.v-line{
					padding-top: 7px;
    			color: #d9d9d9;
				}
			}
		}
		
	}

	.clearfix:after{
		content: " ";
		display: block;
		clear: both;
	}
	.login_dialog{
		.dialog-mask{
			width: 100%;
	    background: rgba(55,55,55,.6);
	    position: fixed;
	    top: 0;
	    bottom: 0;
	    height: 100%;
	    z-index: 1000;
		}
		.dialog-wrap{
			position: fixed;
	    overflow: auto;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 1000;
	    -webkit-overflow-scrolling: touch;
	    outline: 0;
	    .dialog-body{
	    	width: 600px;
		    height: 400px;
		    background: #fff;
		    margin: auto;
		    position: relative;
		    top: 100px;
		    /* width: 370px; */
		    /* height: 335px; */
		    padding: 35px 116px 29px 116px;
		    border-radius: 2px;
    		border-top: 2px solid #fa7f40;
    		.dialog-dismiss{
    			position: absolute;
			    right: 13px;
			    display: inline-block;
			    font-size: 18px;
			    top: 2px;
			    cursor: pointer;
    		}
    		.tab-bar{
    			font-size: 17px;
			    display: inline-block;
			    border-bottom: 2px solid #fb5500;
			    padding: 0 15px 5px;
    		}
    		form{
    			margin: 30px 60px;
    			position: relative;
    			section{
				    position: relative;
				    border: 1px solid #ccc;
				    margin-bottom: 10px;
				    .fa{
				    	display: inline-block;
					    padding-left: 5px;
					    font-size: 14px;
				    }
				    input{
				    	height: 32px;
				    }
    			}
    			.description{
    				border: 0;
    				input{
    					height: 10px;
    				}
    			}
    			.form-submit{
    				border: 0;
    				.btn-login{
    					width: 100%;
    					height: 32px;
    					font-size: 14px;
    					background: #f7671d;
    					border: 1px solid #f06923;
    					color: #fff;
    					cursor: pointer;
    				}
    				.btn-login:hover{
    					background: #f37e41;
    				}
    			}
    		}
	    }
		}
	}
	.info-icon{
		margin-right: 2px;
    background-image: url(../assets/ico_warn.png);
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background-position: 0px -250px;
	}
	.tips{
	  position: absolute;
    border: 1px solid #cabfbf;
    padding: 5px;
    display: inline-block;
    background: #fff;
	}
	.tips:after, .tips:before {
		border: 5px solid transparent;
    border-top: 5px solid #fff;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    right: 0px;
    content: ' ';
    top: 100%;
    left: 50%;
	}
	.tips:before {
	  border-top-color: #000;
	}
</style>