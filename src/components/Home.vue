<template>
	<v-container min-width="100%" max-width="100%" class="pa-0" fluid>
		<v-layout>
			<v-carousel height="28em" cycle>
				<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
			</v-carousel>
		</v-layout>

		<v-layout column>
			<v-flex>
				<v-card class="pa-3 ma-0" color="grey lighten-3" id="dashboard">
					<v-card class="pa-3 ma-0">
						<v-layout wrap>
							<v-flex xs12 sm8 md8 lg8 xl8>
								<!-- <v-card>
					<v-img :src="require('../assets/GetNow.png')" min-width="50%"></v-img>
								</v-card>-->

								<v-card flat wrap color="transparent" class="ma-0">
									<v-card-title
										class="display-2 font-weight-black pa-2 text-center fix"
									>Supreme Hurricane Shutters</v-card-title>
								</v-card>

								<v-card flat color="transparent" class="ma-0">
									<v-card-title
										class="headline font-weight-black pa-2 justify-center text-center"
									>Affordable. Reliable. Hurricane Protection.</v-card-title>
								</v-card>

								<v-card flat color="transparent" class="mt-4 ma-3 body-1 font-weight-medium text-justify">
									<p>
										&nbsp; &nbsp; &nbsp; Supreme Hurricane Shutters specializes in top quality hurricane shutters with a focus
										on supplying shutters all throughout the South Florida region. In short, we are your one stop shop for
										high quality hurricane shutters. We provide accordion shutters, roll down shutters, and affordable hurricane storm
										panels that are all approved through the strictest Florida and Miami-Dade building code. We made it a passion to not
										sell anything under Florida building code standards.
									</p>
									<p>
										Supreme Hurricane Shutters is a division of All Comfort Solutions, LLC., a leader in Florida
										Hurricane protection since 2010. As a result, our customers obtain some of the highest levels of hurricane
										security available at the most affordable price.
									</p>
									<v-card flat class="pa-5">
										<VideoPlayer></VideoPlayer>
									</v-card>
									<p>
										From the do-it-yourselfer to the experienced custom builder, we will work with you to design the best combination of
										defense for your home or business. We are able to accommodate any size order, large or small, commercial or residential.
										Our Experts will guide you through the Hurricane Protection Process and answer any questions you may have. Give us a call or
										get a free online estimate today!
									</p>
								</v-card>
								<v-card flat outlined max-height="15em" class="ma-auto pa-3 mb-4" color="grey lighten-4">
									<v-card max-height="15em" class="mx-auto px-3 text-center" color="blue lighten-3">
										<v-card-title class="justify-center headline">Have Questions?</v-card-title>
										<v-card-title
											class="justify-center title font-weight-black pt-0"
											color="light blue darken-4"
										>(954) 947-3700</v-card-title>
									</v-card>
								</v-card>
							</v-flex>

							<v-flex xs12 sm4 md4 lg4 xl4>
								<v-card
									flat
									color="red darken-4"
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
									color="red darken-4"
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
							</v-flex>
						</v-layout>
					</v-card>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
import VideoPlayer from "./VideoPlayer";
const slide1 = require("../assets/accordion_banner.jpg");
const slide3 = require("../assets/plasticPanel.jpg");
const slide4 = require("../assets/roll.jpg");

export default {
	name: "Home",
	components: {
		VideoPlayer
	},
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
			items: [
				{
					src: slide1
				},
				{
					src: slide3
				},

				{
					src: slide4
				}
			]
		};
	}
};
</script>

<style scoped>
.fix {
	word-break: normal;
}
</style>