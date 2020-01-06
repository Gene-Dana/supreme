<template>
	<v-container class="ma-0 pa-0">
		<v-divider></v-divider>
		<p class="text-center display-1 font-weight-black">Free Quote Form</p>
		<v-divider></v-divider>
		<v-form ref="quoteForm" @submit.prevent="submit">
			<v-layout row wrap justify-center align-center class="pa-3">
				<v-flex xs12 sm12 md4 lg4>
					<v-text-field class="ma-1" v-model="form.name" type="text" name="name" label="Name" required></v-text-field>
				</v-flex>
				<v-flex xs6 sm6 md4 lg4>
					<v-text-field
						class="ma-1"
						v-model="form.name"
						type="text"
						name="number"
						label="Number"
						required
					></v-text-field>
				</v-flex>
				<v-flex xs6 sm6 md4 lg4>
					<v-text-field
						class="ma-1"
						v-model="form.email"
						type="text"
						name="email"
						label="Email"
						required
					></v-text-field>
				</v-flex>
			</v-layout>
			<v-card class="pa-3">
				<v-data-table
					:headers="headers"
					:items="shutters"
					hide-default-header
					hide-default-footer
					class="elevation-1"
				>
					<template v-slot:top></template>
					<template v-slot:item.action="{ item }">
						<v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
						<v-icon small @click="deleteItem(item)">delete</v-icon>
					</template>
					<template v-slot:no-data>
						<v-btn color="primary" @click="initialize">Reset</v-btn>
					</template>
					<v-toolbar flat color="white">
						<v-dialog v-model="dialog" max-width="500px">
							<template v-slot:activator="{ on }">
								<v-btn color="primary" dark class="mb-2" v-on="on">New Shutter</v-btn>
							</template>

							<v-card>
								<v-card-title>
									<span class="headline">{{ formTitle }}</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12" sm="12" md="12">
												<v-text-field v-model="editedItem.name" label="Opening Name"></v-text-field>
											</v-col>
											<v-col cols="12" sm="12" md="12">
												<v-text-field v-model="editedItem.width" label="Width"></v-text-field>
											</v-col>
											<v-col cols="12" sm="12" md="12">
												<v-text-field v-model="editedItem.height" label="Height"></v-text-field>
											</v-col>
											<v-col cols="12" sm="12" md="12">
												<v-select :items="types" v-model="editedItem.type" label="Shutter Type"></v-select>
											</v-col>

											<v-col cols="12" sm="12" md="12">
												<v-text-field v-model="editedItem.color" label="Color"></v-text-field>
											</v-col>
										</v-row>
									</v-container>
								</v-card-text>

								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
									<v-btn color="blue darken-1" text @click="save">Save</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-toolbar>
				</v-data-table>
				<v-toolbar flat color="white" row>
					<v-dialog v-model="dialog" max-width="500px">
						<template v-slot:activator="{ on }">
							<v-btn width="10em" color="primary" dark class v-on="on">Add Shutter</v-btn>
						</template>

						<v-card>
							<v-card-title>
								<span class="headline">{{ formTitle }}</span>
							</v-card-title>
							<v-card-text>
								<v-container>
									<v-row>
										<v-col cols="12" sm="12" md="12">
											<v-text-field v-model="editedItem.name" label="Opening Name"></v-text-field>
										</v-col>
										<v-col cols="12" sm="12" md="12">
											<v-text-field v-model="editedItem.width" label="Width"></v-text-field>
										</v-col>
										<v-col cols="12" sm="12" md="12">
											<v-text-field v-model="editedItem.height" label="Height"></v-text-field>
										</v-col>
										<v-col cols="12" sm="12" md="12">
											<v-select :items="types" v-model="editedItem.type" label="Shutter Type"></v-select>
										</v-col>

										<v-col cols="12" sm="12" md="12">
											<v-text-field v-model="editedItem.color" label="Color"></v-text-field>
										</v-col>
									</v-row>
								</v-container>
							</v-card-text>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
								<v-btn color="blue darken-1" text @click="save">Save</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
					<v-spacer></v-spacer>
					<v-btn width="10em" type="submit" @click.prevent="handleSubmit" color="green">Get Quote</v-btn>
				</v-toolbar>
			</v-card>
		</v-form>
	</v-container>
</template>


<script>
export default {
	name: "QuoteForm",
	methods: {
		initialize() {
			this.shutters = [
				{
					name: "Example Door",
					height: "96",
					width: "36",
					type: ".050 Aluminum",
					color: "White"
				}
			];
		},

		editItem(item) {
			this.editedIndex = this.shutters.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		deleteItem(item) {
			const index = this.shutters.indexOf(item);
			confirm("Are you sure you want to delete this item?") &&
				this.shutters.splice(index, 1);
		},

		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.shutters[this.editedIndex], this.editedItem);
			} else {
				this.shutters.push(this.editedItem);
			}
			this.close();
		},

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
		},
		formTitle() {
			return this.editedIndex === -1 ? "Add Shutter" : "Edit Item";
		}
	},
	watch: {
		dialog(val) {
			val || this.close();
		}
	},

	created() {
		this.initialize();
	},
	data() {
		const defaultForm = Object.freeze({
			name: "",
			email: "",
			number: "",
			message: ""
		});
		const quoteForm = Object.freeze({
			name: "",
			email: "",
			number: "",
			message: ""
		});

		return {
			types: [
				"Accordion",
				".050 Aluminum Panels",
				"24G Steel Panels",
				"Roll Down"
			],
			dialog: false,
			headers: [
				{
					text: "Opening Name",
					align: "left",
					value: "name",
					sortable: false
				},
				{ text: "Width (in)", value: "width", sortable: false },
				{ text: "Height (in)", value: "height", sortable: false },
				{ text: "Shutter Type", value: "type", sortable: false },
				{ text: "Color", value: "color", sortable: false },
				{ text: "Actions", value: "action", sortable: false }
			],
			shutters: [],
			editedIndex: -1,
			editedItem: {
				name: "",
				width: "",
				height: "",
				type: "",
				color: ""
			},
			defaultItem: {
				name: "",
				width: "",
				height: "",
				type: "",
				color: ""
			},
			//Data for the Contact Us form
			form: Object.assign({}, defaultForm),
			rules: {
				email: [
					val => (val || "").length > 0 || "This field is required"
				],
				name: [
					val => (val || "").length > 0 || "This field is required"
				]
			},
			//Data for the Contact Us form
			qform: Object.assign({}, quoteForm),
			rules2: {
				email: [
					val => (val || "").length > 0 || "This field is required"
				],
				name: [
					val => (val || "").length > 0 || "This field is required"
				]
			},

			snackbar: false,

			defaultForm,
			quoteForm
		};
	}
};
</script>