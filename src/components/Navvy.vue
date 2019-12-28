<template>
	<v-container fluid class="ma-0 pa-0">
		<v-layout row align-center ma-0>
			<v-flex xs12 sm4 m4 lg4>
				<v-card flat color="transparent">
					<v-img
						alt="Supreme Hurricane Shutters Logo"
						class="shrink mr-2"
						contain
						src="../assets/logo.png"
						transition="scale-transition"
					/>
				</v-card>
			</v-flex>
			<v-spacer />
			<v-flex xs12 sm6 m6 lg6 xl6>
				<v-card flat color="transparent">
					<v-card-text
						class="black--text font-weight-black ma-0 py-0 px-0"
						:class="fontSize"
					>CALL NOW 954-947-3700</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>

		<v-layout align-center>
			<v-flex>
				<v-toolbar style="background: rgb(255, 79, 79);" width="100%" :height= navSize2 >
					<v-container fill-height fluid :class="navSize">
						<v-flex xs6 sm3 md3 lg3 xl3>
							<v-card flat light shaped class="text-center">
								<router-link to="/home" class="black--text title" style="text-decoration: none;">Home</router-link>
							</v-card>
						</v-flex>

						<v-flex xs6 sm3 md3 lg3 xl3>
							<v-card flat shaped class="text-center">
								<router-link to="/products" class="black--text title" style="text-decoration: none;">Products</router-link>
							</v-card>
						</v-flex>

						<v-flex xs6 sm3 md3 lg3 xl3>
							<v-card flat shaped class="text-center">
								<router-link
									to="/freequote"
									class="black--text title "
									style="text-decoration: none;"
								>Free Quote</router-link>
							</v-card>
						</v-flex>

						<v-flex xs6 sm3 md3 lg3 xl3>
							<v-card flat shaped class="text-center">
								<router-link to="/home" class="black--text title" style="text-decoration: none;">Contact</router-link>
							</v-card>
						</v-flex>
					</v-container>
				</v-toolbar>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: "Navvy",
	computed: {
		fontSize() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "cellphone mb-3 text-center";
				default:
					return "display-1";
			}
		},
		navSize() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "";
				default:
					return "";
			}
		},
		navSize2() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "90%";
				default:
					return "" ;
			}
		}
	}
};
</script>

<style scoped>
.cellphone {
	font-size: 1.8em;
}

.tool {
	height: 100%;
}
.tool {
	height: 100%;
}
</style>