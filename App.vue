<script>
	export default {
		onLaunch: function(option) {
			console.log('App Launch',option)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/wxcomponents/vant/common/index.wxss";
</style>
