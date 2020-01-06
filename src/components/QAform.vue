<template>
	<v-container class="ma-0 pa-0">
		<form
			name="ask-question"
			method="POST"
			data-netlify="true"
			netlify-honeypot="bot-field"
			@submit.prevent="handleSubmit"
		>
			<input type="hidden" name="name" />

			<input type="hidden" name="email" />

			<input type="hidden" name="number" />

			<textarea type="hidden" name="message" />

			<v-card color="transparent" class="pa-5">
				<v-snackbar v-model="snackbar" absolute top right color="success">
					<span>Message sent!</span>
					<v-icon dark>mdi-checkbox-marked-circle</v-icon>
				</v-snackbar>
				<v-text-field v-model="form2.name" name="name" label="Name" required></v-text-field>

				<v-text-field v-model="form2.email" name="email" label="Email" required></v-text-field>

				<v-text-field v-model="form2.number" name="number" label="Number" required></v-text-field>

				<v-textarea v-model="form2.message" name="message" color="teal">
					<template v-slot:label>
						<div>
							Message
							<small>(optional)</small>
						</div>
					</template>
				</v-textarea>
				<v-btn
					:disabled="!formIsValid2"
					text
					color="success"
					class="mr-3"
					type="submit"
					@click.prevent="handleSubmit"
				>Send</v-btn>
			</v-card>
		</form>
	</v-container>
</template>

<script>
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
		console.log("newly13");
	},
	methods: {
		resetForm() {
			this.form2.reset();
		},
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
		handleSubmit(event) {
			/* eslint no-console: */
			console.log(this.form2);
			
			

			const axiosConfig = {
				header: { "Content-Type": "application/x-www-form-urlencoded" }
			};
			this.$http
				.post(
					"/",
					this.encode({
						"form-name": "ask-question",
						...this.form2
					}),
					axiosConfig
				)
				.then(() => {
					// this.$router.push("thanks");
					this.snackbar = true;
					console.log("oh yeah she worked")
					event.target.reset();
				})
				.catch(() => {
					this.$router.push("404");
				});
		}
	}
};
</script>