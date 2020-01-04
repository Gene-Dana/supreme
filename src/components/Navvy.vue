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
					/>
				</v-card>
			</v-flex>
			<v-spacer />
			<v-flex xs12 sm6 m6 lg6 xl6>
				<v-card flat color="transparent">
					<a href="tel:9549473700">
					<v-card-text
						class="black--text font-weight-black ma-0 py-0 px-0"
						:class="fontSize"
					>CALL NOW (954) 947-3700</v-card-text></a>
				</v-card>
			</v-flex>
		</v-layout>

		<v-layout align-center>
			<v-flex>
				<v-toolbar class="red" width="100%" :height="navSize2">
					<v-container fill-height fluid :class="navSize">
						<v-flex xs6 sm3 md3 lg3 xl3>
							<v-card flat light shaped class="text-center">
								<v-btn text block to="/home">Home</v-btn>
							</v-card>
						</v-flex>

						<v-flex xs6 sm3 md3 lg3 xl3>
							<v-card flat shaped class="text-center">
								<v-menu offset-y>
									<template v-slot:activator="{ on }">
										<v-btn v-on="on" text block>Products</v-btn>
									</template>
									<v-list>
										<v-list-item to="/accordion">
											<v-list-item-title>Accordion</v-list-item-title>
										</v-list-item>
										<v-list-item to="/panels">
											<v-list-item-title>Panels</v-list-item-title>
										</v-list-item>
										<v-list-item to="/rolldown">
											<v-list-item-title>Rolldown</v-list-item-title>
										</v-list-item>
									</v-list>
								</v-menu>
							</v-card>
						</v-flex>
						<v-flex xs6 sm3 md3 lg3 xl3>
							<v-card flat shaped class="text-center">
								<v-btn text block to="/how to measure">How To Measure</v-btn>
							</v-card>
						</v-flex>
						<v-flex xs6 sm3 md3 lg3 xl3>
							<v-card flat shaped class="text-center">
								<v-btn text block to="/free quote">Free Quote</v-btn>
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
	data: () => ({
		items: [
			{ title: "Click Me" },
			{ title: "Click Me" },
			{ title: "Click Me" },
			{ title: "Click Me 2" }
		]
	}),
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
					return "";
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