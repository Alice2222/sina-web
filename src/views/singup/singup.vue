<template>
	<div class="login-box">
		<img src="../../assets/top_line_bg.png" alt="">
		<section class="logo">
			<img src="../../assets/logo_big.png" alt="">
		</section>
		<main class="login-main">
				<ui-tabs type="text">
          <ui-tab title="个人注册">
          	<!-- <Form :model="person" :label-width="80" :rules="rules">
			        <Form-item label="手机号">
			            <Input v-model="person.phone" placeholder="请输入手机号码" prop="phone"></Input>
			        </Form-item>
			      </Form> -->
          </ui-tab>
          <ui-tab title="官方注册">
              Authors
          </ui-tab>
      	</ui-tabs>
		</main>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				person: {
					phone: ''
				},
				rules: {
					phone:[{required: true, message: '请填写手机号', trigger: 'blur' }]
				}
			}
		},
		created(){

		},
		component:{

		},
		computed:{

		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped>
	.login-box{
		background-image: url(../../assets/reg_repeat_bg.png);
		background-repeat: repeat-x;
		width: 100%;
		min-height: 1000px;
		img{
			display: block
		}
		.logo{
			margin: 100px auto 0px;
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
	}
</style>