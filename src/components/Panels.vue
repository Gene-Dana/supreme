<template>
	<v-container min-width="100%" max-width="100%" class="pa-0" fluid>
		<v-layout>
			<v-img height="7em" src="../assets/scary.jpg"></v-img>
		</v-layout>

		<v-layout column>
			<v-flex>
				<v-card class="pa-3 ma-0" color="grey lighten-3" id="dashboard">
					<v-card class="pa-3 ma-0">
						<v-layout wrap>
							<v-flex xs12 sm8 md8 lg8 xl8>
								<v-card flat wrap color="transparent" class="ma-0">
									<v-card-title
										class="display-2 font-weight-black pa-2 text-center fix"
									>Aluminum and Steel Panel Shutters</v-card-title>

									<v-card-title class="headline pa-2 justify-center center-text fix">by Eyewall Armor®</v-card-title>
								</v-card>

								<v-card flat color="transparent" class="my-0 mx-3">
									<v-img height="15em" src="../assets/panel-products.jpg"></v-img>
								</v-card>

								<v-card flat color="transparent" class="mt-4 ma-3 body-1 font-weight-medium text-justify">
									<p>
										Here at Supreme Shutters, we offer Eyewall Armor® StormLoc™ Panels.
										These are the top of the line in hurricane and storm protection for your home.
										Our Eyewall Armor® StormLoc™ Panels have 8 exclusive track styles that will fit
										virtually any and all mounting conditions, and work supremely with your home’s
										specific design and/or building specifications.
										<strong>
											Also production time is usually
											only
											<span
												style="text-decoration: underline;"
											>3 weeks!</span>
										</strong>
									</p>
									<p>
										Protecting your home or business from storm and hurricane damage is extremely
										important, for obvious reasons, so we want to make sure your investment is well
										protected. The Eyewall Armor® StormLoc™ Panels are easy to use and last for
										several years, providing reliable protection for your home. These panels are
										built to endure even the most extreme weather conditions, year-round.
									</p>
									<v-card flat wrap color="transparent" class="ma-0">
										<v-card-title
											class="display-1 font-weight-black pa-2 text-center fix"
										>.050 Aluminum Storm Panels</v-card-title>
									</v-card>
									<ul>
										<li>Protect windows and doors from winds over 150 mph</li>
										<li>Resist corrosion (aluminum and its alloys are a major component of aerospace engineering)</li>
										<li>Have a low density for a lightweight product</li>
										<li>Have a thickness of .050″</li>
									</ul>

									<v-card flat wrap color="transparent" class="ma-0">
										<v-card-title
											class="display-1 font-weight-black pa-2 text-center fix"
										>24G Galvanized Steel Storm Panels</v-card-title>
									</v-card>
									<ul>
										<li>Protect windows and doors from winds over 150 mph</li>
										<li>Have a low density for a lightweight product</li>
										<li>Have a thickness of .023</li>
									</ul>
									<p class="mt-5">
										The Eyewall Armor® StormLoc™ storm panels have undergone
										extensive research and testing, performing superbly in
										wind conditions exceeding 180mph, meeting the current
										Florida Building Code and International Building Code
										wind standard (ASCE 7-10). They are also in accordance
										with A.S.T.M. E1886-E1996, and the High Velocity
										Hurricane Zone (HVHZ) TAS 201, 202 and 203 (formerly
										Miami-Dade PA 201, 202 & 203), able to withstand
										substantial impact from debris as tested for 9lb.
										large missile impact.
									</p>
								</v-card>
								<v-card flat color="transparent" class="ma-3">
										<v-img min-width="100%" src="../assets/steelPanel.jpg"></v-img>
									</v-card>
									<v-card flat color="transparent" class="ma-3">
										<v-img min-width="100%" src="../assets/plasticPanel.jpg"></v-img>
									</v-card>
							</v-flex>
							<!------------------------ Start Side Panel  ------------------------------------------------------------->
							<v-flex xs12 sm4 md4 lg4 xl4>
								<v-card
									flat
									color="red "
									max-width="40em"
									max-height="15em"
									class="mx-auto px-3 text-center"
								>
									<v-card-title class="justify-center title white--text">GET A FREE QUOTE TODAY!</v-card-title>
								</v-card>
								<router-link to="/about">
									<v-card class="px-3 py-4" flat>
										<v-img width="100%" src="../assets/accordion-shutter-pricing.jpg"></v-img>
									</v-card>
								</router-link>
								<router-link to="/about">
									<v-card class="px-3 py-4" flat>
										<v-img width="100%" src="../assets/storm-panel-shutter-pricing.jpg"></v-img>
									</v-card>
								</router-link>
								<router-link to="/about">
									<v-card class="px-3 py-4" flat>
										<v-img width="100%" src="../assets/rolldown-shutter-pricing.jpg"></v-img>
									</v-card>
								</router-link>
								<v-card
									flat
									color="red"
									max-width="40em"
									max-height="15em"
									class="mx-auto px-3 text-center"
								>
									<v-card-title class="justify-center title white--text">QUESTIONS? CONTACT US!</v-card-title>
								</v-card>
								<v-card color="transparent" class="pa-5">
									<v-snackbar v-model="snackbar" absolute top right color="success">
										<span>Message sent!</span>
										<v-icon dark>mdi-checkbox-marked-circle</v-icon>
									</v-snackbar>
									<v-form ref="form" @submit.prevent="submit">
										<v-text-field v-model="form.name" label="Name" required></v-text-field>

										<v-text-field v-model="form.email" label="E-mail" required></v-text-field>

										<v-text-field v-model="form.number" label="Phone" required></v-text-field>

										<v-textarea v-model="form.message" color="teal">
											<template v-slot:label>
												<div>
													Message
													<small>(optional)</small>
												</div>
											</template>
										</v-textarea>

										<v-btn :disabled="!formIsValid" text color="success" class="mr-3" type="submit">Send</v-btn>
									</v-form>
								</v-card>
								<v-card
									flat
									color="red"
									max-width="40em"
									max-height="15em"
									class="mx-auto px-3 text-center"
								>
									<v-card-title class="justify-center title white--text mt-3">Description</v-card-title>
								</v-card>
								<v-card flat color="transparent">
									<v-card flat color="transparent" class="ma-0">
										<v-img min-width="10em" class="ma-4" src="../assets/eyewall.gif"></v-img>
									</v-card>

									<v-card flat color="transparent" class="mt-4 ma-3 body-1 font-weight-light text-justify">
										<li>Most affordable type of approved storm protection!</li>
										<li>Our ultra-light .018” (28 gauge), and .023” (24 gauge) galvanized steel Eyewall Armor® panels with rolled safety edges are tested for 9-lb. large missile impact to A.S.T.M. E1886 and E1996 standards for use in the Florida Building Code and throughout the International Building Code areas.</li>
										<li>Unparalleled Hurricane Protection.</li>
										<li>Lightweight.</li>
										<li>Corrosion resistant.</li>
										<li>Affordable and cost effective</li>
										<li>Easy Installation.</li>
										<li>Added property value.</li>
										<li>Reduced insurance costs.</li>
										<li>Multiple track options.</li>
										<li>Panels available in Mill Finish, Galvanized, or Clear.</li>
										<li>Tracks available in White or Bronze.</li>
										<li>In-house customer service and technical support.</li>
										<li>Patented clear-metal-clear applications.</li>
										<li>Patents #US 6,868,642 B2 and US 6,615,555 B2</li>
									</v-card>
								</v-card>
							</v-flex>
						</v-layout>
					</v-card>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	name: "Products",

	components: {},
	methods: {
		resetForm() {
			this.form = Object.assign({}, this.defaultForm);
			this.$refs.form.reset();
		},
		submit() {
			this.snackbar = true;
			this.resetForm();
		}
	},
	computed: {
		formIsValid() {
			return this.form.name && this.form.email && this.form.number;
		}
	},
	data() {
		const defaultForm = Object.freeze({
			name: "",
			email: "",
			number: "",
			message: ""
		});

		return {
			form: Object.assign({}, defaultForm),
			rules: {
				email: [
					val => (val || "").length > 0 || "This field is required"
				],
				name: [
					val => (val || "").length > 0 || "This field is required"
				]
			},

			defaultForm,
			items: []
		};
	}
};
</script>

<style scoped>
.fix {
	word-break: normal;
}
</style>