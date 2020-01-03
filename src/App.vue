<template>
	<v-app>
		<AppBar />
		<v-content>
			<Navvy />
			<router-view></router-view>
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Navvy from "./components/Navvy";
import Footer from "./components/Footer"

export default {
	name: "App",

	components: {
		AppBar,
		Navvy,
		Footer
	},

	computed: {
		fontSize() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "1em";
				default:
					return "10em";
			}
		}
	}
};
</script>

<style>
body {
	overflow-x: hidden;
	overflow-y: hidden;
}
.v-toolbar__content,
.v-toolbar__extension {
	padding: 0px;
}
</style>