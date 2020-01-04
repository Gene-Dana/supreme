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
									<v-card-title class="display-2 font-weight-black pa-2 text-center fix">Rolldown Shutters</v-card-title>
								</v-card>

								<v-card flat color="transparent" class="my-0 mx-3">
									<v-img height="15em" src="../assets/rolldown-products.jpg"></v-img>
								</v-card>

								<v-card flat color="transparent" class="mt-4 ma-3 body-1 font-weight-medium text-justify">
									<p>
										Roll Down hurricane shutters provides the ultimate in security and storm protection
										for your home or business. Our Rolling shutter systems come with a smooth, manual
										crank or can be upgraded to the fully synchronized electric motor drive for
										maintenance-free operation. Roll down shutters offer an elegant design solution
										with minimal visual impact. They are constructed of the finest grade of aluminium
										for maximum impact resistance and durability. These systems are specially designed
										to provide maximum strength and insulation from sun, storm, heat, noise, and weather
										extremes.
									</p>
									<p>
										Our reinforced track system provides strength and maximum shutter width. They are
										specially designed and engineered to blend with and compliment your home or business.
										Our roll-down shutters add substantial value to your home or business and pay for
										themselves through more efficient heating and cooling of your rooms.
									</p>
									<p>
										Our roll-down shutters have been engineered to meet the most stringent wind codes in
										the country and have been reviewed and accepted by the Miami-Dade County product
										control division, Florida Building Code, and the International Building Code. Get
										Pricing Now!
									</p>
									<v-card flat wrap color="transparent" class="ma-0">
										<v-card-title
											class="display-1 font-weight-black pa-2 text-center fix"
										>Rolldown Shutter Features</v-card-title>
									</v-card>
									<ul>
										<li>Custom Designed and Engineered to Each Opening</li>
										<li>Sleek European-Styling</li>
										<li>Significant Energy Savings</li>
										<li>Innovative Technologies</li>
										<li>Precise Metal Workmanship</li>
										<li>Offered in 55MM Blade Heights</li>
										<li>Spans of up to 17′ with End-Retention 55mm</li>
										<li>Protects Furniture and Artwork from Sun Exposure</li>
										<li>Increases Privacy and Noise Reduction</li>
										<li>Manual or Motorized with Manual Over-ride</li>
										<li>Minimal Visual Impact to Your Home</li>
										<li>Provides Excellent Security and Storm Protection</li>
										<li>Available Colors: White, Ivory, Beige, and Bronze</li>
									</ul>
									<v-card flat wrap color="transparent" class="ma-0">
										<v-card-title class="display-1 font-weight-black pa-2 text-center fix">Colors Available:</v-card-title>
									</v-card>

									<v-card flat color="transparent" class="ma-3">
										<v-img min-width="100%" src="../assets/colors.png"></v-img>
									</v-card>
									<v-card flat color="transparent" class="ma-3">
										<v-img min-width="100%" src="../assets/roll1.jpeg"></v-img>
									</v-card>
									<v-card flat color="transparent" class="ma-3">
										<v-img min-width="100%" src="../assets/roll2.jpeg"></v-img>
									</v-card>
									<v-card flat color="transparent" class="ma-3">
										<v-img min-width="100%" src="../assets/roll3.jpeg"></v-img>
									</v-card>
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
										<v-img min-width="10em" class="ma-4" src="../assets/aht.png"></v-img>
									</v-card>

									<v-card flat color="transparent" class="mt-4 ma-3 body-1 font-weight-light text-justify">
										<p>
											Get the ultimate in performance and beauty with our Advanced Technology Hurricane Roll Down Shutters.
											Roll Down shutters provide the ultimate in security and storm protection for your home or business.
										</p>
										<p>
											Our Rolling shutter systems come with a smooth, manual crank or can be upgraded to the fully synchronized
											electric motor drive for maintenance-free operation. Our roll-down shutters offer an elegant design solution
											with minimal visual impact. These shutters are constructed of the finest grade of aluminum for maximum impact
											resistance and durability. Our specially designed roll-down shutters provide maximum strength and insulation
											from sun, storm, heat, noise, and weather extremes.
										</p>
										<p>
											Our roll-down shutters have been engineered to meet the most stringent wind codes in the country and have been
											reviewed and accepted by the Miami-Dade County product control division, Florida Building Code, and the
											International Building Code.
										</p>
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