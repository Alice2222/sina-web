<template>
	<div id="alert-tip">
		<div class="page__demo-group">
        <ui-confirm
            ref="basicConfirm"
            title="Basic Confirm"
            @confirm="onConfirm"
            @deny="onDeny">
            {{alertText}}
        </ui-confirm>
    </div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				// confirmResult: ''
        
			}
		},
		props: ['alertText'],
		methods:{
      showConfirm(){
        this.$refs.basicConfirm.open()
      },
      hideConfirm(ref) {
          this.$refs[ref].close();
      },
			onConfirm() {
          this.confirmResult = 'You confirmed the request.';
      },
      onDeny() {
          this.confirmResult = 'You denied the request.';
      }
		}
	}
</script>
<style lang="scss" scoped>
	
</style>