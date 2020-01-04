<template>
	<form
		name="ask-question"
		method="post"
		data-netlify="true"
		netlify
		data-netlify-honeypot="bot-field"
		@submit.prevent="handleSubmit"
	>
		<v-card color="transparent" class="pa-5">
			<v-snackbar v-model="snackbar" absolute top right color="success">
				<span>Message sent!</span>
				<v-icon dark>mdi-checkbox-marked-circle</v-icon>
			</v-snackbar>
			<v-text-field v-model="form2.name" type="text" label="Name" required></v-text-field>

			<v-text-field v-model="form2.email" type="text" label="E-mail" required></v-text-field>

			<v-text-field v-model="form2.number" type="text" label="Phone" required></v-text-field>

			<v-textarea v-model="form2.message" type="text" color="teal">
				<template v-slot:label>
					<div>
						Message
						<small>(optional)</small>
					</div>
				</template>
			</v-textarea>
			<v-btn :disabled="!formIsValid2" text color="success" class="mr-3" type="submit">Send</v-btn>
		</v-card>
	</form>
</template>

<script>
import axios from "axios";

export default {
	name: "QAForm",
	data() {
		return {
			form2: {
				name: "",
				email: "",
				number: "",
				message: ""
			},
			snackbar: false
		};
	},
	computed: {
		formIsValid2() {
			return this.form2.name && this.form2.email && this.form2.number;
		}
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					key =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							data[key]
						)}`
				)
				.join("&");
		},
		handleSubmit() {
			/* eslint no-console: */
				console.log("submited")
			// const jform = JSON.stringify(this.form2);
			// console.log(jform);

			const axiosConfig = {
				header: { "Content-Type": "application/x-www-form-urlencoded" }
			};
			axios
				.post(
					"/",
					this.encode({
						"form-name": "ask-vuestion",
						...this.form2
					}),
					axiosConfig
				)
				.then(() => {
					this.$router.push("thanks");
				})
				.catch(() => {
					this.$router.push("404");
				});
		}
	}
};
</script>