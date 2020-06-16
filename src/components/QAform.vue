<template>
	<v-container class="ma-0 pa-3">
		<form
			name="new-form"
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
				<v-snackbar v-model="snackbar2" absolute top right color="fail">
					<span>Message Did Not Succeed!</span>
					<v-icon dark>mdi-checkbox-flash-off</v-icon>
				</v-snackbar>


				<v-text-field v-model="newform.name" name="name" label="Name" required></v-text-field>

				<v-text-field v-model="newform.email" name="email" label="Email" required></v-text-field>

				<v-text-field v-model="newform.number" name="number" label="Number" required></v-text-field>

				<v-textarea v-model="newform.message" name="message" color="teal">
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
	name: "newform",
	data() {
		return {
			newform: {
				name: "",
				email: "",
				number: "",
				message: ""
			},
			snackbar: false,
			snackbar2: false
		};
	},
	computed: {
		formIsValid2() {
			return this.newform.name && this.newform.email && this.newform.number;
		}
	},
	created() {
		console.log("newly14");
	},
	methods: {
		resetForm() {
			(this.newform.name = ""),
				(this.newform.email = ""),
				(this.newform.number = "");
			this.newform.message = "";
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
		handleSubmit( ) {
			/* eslint no-console: */
			console.log(this.newform);

			const axiosConfig = {
				header: { "Content-Type": "application/x-www-form-urlencoded" }
			};
			this.$http
				.post(
					"/",
					this.encode({
						"form-name": "new-form",
						...this.newform
					}),
					axiosConfig
				)
				.then(() => {
					// this.$router.push("thanks");
					this.snackbar = true;
					console.log("oh yeah she worked");
					this.resetForm();
				})
				.catch(err => {
					console.log(err);
					this.snackbar2 = true;
				});
		}
	}
};
</script>
