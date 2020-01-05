<template>
	<v-container class="ma-0 pa-0">
		<form name="ask-question" netlify netlify-honeypot="bot-field" hidden>
			<v-text-field type="text" label="Name" ></v-text-field>

			<v-text-field type="text" label="E-mail" ></v-text-field>

			<v-text-field type="text" label="Phone" ></v-text-field>

			<v-textarea  type="text" color="teal"></v-textarea>
		</form>
		<form name="ask-question" netlify method="POST" data-netlify="true" id="ask-question" @submit.prevent="handleSubmit">
			
			<v-card color="transparent" class="pa-5">
				<v-snackbar v-model="snackbar" absolute top right color="success">
					<span>Message sent!</span>
					<v-icon dark>mdi-checkbox-marked-circle</v-icon>
				</v-snackbar>
				<v-text-field v-model="form2.name" label="Name" required></v-text-field>

				<v-text-field v-model="form2.email" label="E-mail" required></v-text-field>

				<v-text-field v-model="form2.number" label="Phone" required></v-text-field>

				<v-textarea v-model="form2.message" color="teal">
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
	</v-container>
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
	created() {
		console.log("newly2");
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
			console.log(this.form2);

			const axiosConfig = {
				header: { "Content-Type": "application/x-www-form-urlencoded" }
			};
			axios
				.post(
					"/",
					this.encode({
						"form-name": "ask-question",
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