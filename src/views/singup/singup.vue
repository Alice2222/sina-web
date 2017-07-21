<template>
	<div class="login-box">
		<section class="top_line"></section>
		<section class="logo">
			<img src="../../assets/logo_big.png" alt="">
		</section>
		<main class="login-main">
			<div class="tab-header">
				<ul class="tab-list">
					<div class="bottom-line"></div>	
					<li class="tab-item" :class="{is_active: person_reg}" @click="handleClickTabItem(true)">
						<section class="tab-item_text">
							个人注册
						</section>
					</li>
					<li class="tab-item"><span class="v-line"></span></li>
					<li class="tab-item" :class="{is_active: !person_reg}"  @click="handleClickTabItem(false)">
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
						<div class="reg-form">
							ccc
						</div>
					</section>
					<section class="official-reg" v-if="!person_reg">
						<div class="reg-form">
							ddd
						</div>
					</section>
				</transition>
			</div>
    	<ui-button @click="showConfirm('basic-confirm')">Basic Confirm</ui-button>
		</main>
		<alert-tip :alertText="alertText" ref="basic-confirm"></alert-tip>
	</div>
</template>
<script>
	import AlertTip from "@/components/AlertTip";
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
				person_reg: false
			}
		},
		created(){
			this.handleClickTabItem(true)
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
      handleClickTabItem(person_reg){
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
      	})
      }
		}
	}
</script>
<style lang="scss" scoped>
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
    	padding: 20px;
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
					background: #ffa00a;
					display: inline-block;
					position: absolute;
					bottom: 8px;
				}
				
			}
			
    }
	}

</style>