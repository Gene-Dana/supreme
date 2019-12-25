<template>
	<v-container min-width="100%" max-width="100%" class="pa-0" fluid>
		

		<v-layout column>
			<v-flex>
				<v-card class="pa-3 ma-0" color="grey lighten-3" id="dashboard">
					<v-card class="pa-3 ma-0">
						<v-layout wrap>
							<v-flex xs12 sm8 md8 lg8 xl8>
								<!-- <v-card>
					<v-img :src="require('../assets/GetNow.png')" min-width="50%"></v-img>
								</v-card>-->

								<v-card flat color="transparent" class="ma-0">
									<v-card-title class="display-1 font-weight-black pa-2">How To Measure</v-card-title>
								</v-card>

								<v-card flat color="transparent" class="mt-4 ma-3 body-1 font-weight-medium text-justify">
									<p>Materials needed to measure:</p>
									<v-list flat subheader three-line>

										<v-list-item-group v-model="settings" multiple active-class>
											<v-list-item>
												<template v-slot:default="{ active }">
													<v-list-item-action>
														<v-checkbox v-model="active"></v-checkbox>
													</v-list-item-action>

													<v-list-item-content>
														<v-list-item-title>Notifications</v-list-item-title>
														<v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
													</v-list-item-content>
												</template>
											</v-list-item>

											<v-list-item>
												<template v-slot:default="{ active }">
													<v-list-item-action>
														<v-checkbox v-model="active"></v-checkbox>
													</v-list-item-action>

													<v-list-item-content>
														<v-list-item-title>Sound</v-list-item-title>
														<v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
													</v-list-item-content>
												</template>
											</v-list-item>

											<v-list-item>
												<template v-slot:default="{ active }">
													<v-list-item-action>
														<v-checkbox v-model="active"></v-checkbox>
													</v-list-item-action>

													<v-list-item-content>
														<v-list-item-title>Auto-add widgets</v-list-item-title>
														<v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
													</v-list-item-content>
												</template>
											</v-list-item>
										</v-list-item-group>
									</v-list>
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
										>(305) 901-9981</v-card-title>
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

										<v-text-field v-model="form.email" label="E-mail">required</v-text-field>

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
const slide1 = require("../assets/slide1.jpg");
const slide2 = require("../assets/slide2.jpg");
const slide3 = require("../assets/slide-3.jpg");
const slide4 = require("../assets/slide4.jpg");

export default {
	name: "HowToMeasure",
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

			conditions: false,
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
			snackbar: false,
			terms: false,
			defaultForm,
			items: [
				{
					src: slide1
				},
				{
					src: slide2
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