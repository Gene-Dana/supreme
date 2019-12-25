<template>
	<v-container min-width="100%" max-width="100%" class="pa-0" fluid>
		<v-layout column>
			<v-flex>
				<v-card class="pa-3 ma-0" color="grey lighten-3" id="dashboard">
					<v-card class="pa-3 ma-0">
						<v-layout wrap>
							<v-flex xs12 sm8 md8 lg8 xl8>
								<v-card flat color="transparent" class="ma-0">
									<p class="text-center display-1 font-weight-black">Free Quote</p>
									<v-subheader>Steps to get a quote</v-subheader>
									<v-list flat subheader three-line>
										<v-list-item-group v-model="settings" multiple active-class>
											<v-list-item>
												<template v-slot:default="{ active }">
													<v-list-item-action>
														<v-checkbox v-model="active"></v-checkbox>
													</v-list-item-action>

													<v-list-item-content>
														<v-list-item-title>Measure</v-list-item-title>
														<v-list-item-subtitle>All doors and windows, starting from front door and clockwise around the house</v-list-item-subtitle>
													</v-list-item-content>
												</template>
											</v-list-item>

											<v-list-item>
												<template v-slot:default="{ active }">
													<v-list-item-action>
														<v-checkbox v-model="active"></v-checkbox>
													</v-list-item-action>

													<v-list-item-content>
														<v-list-item-title>Record</v-list-item-title>
														<v-list-item-subtitle>Fill out the form below with the required measurements and data</v-list-item-subtitle>
													</v-list-item-content>
												</template>
											</v-list-item>

											<v-list-item>
												<template v-slot:default="{ active }">
													<v-list-item-action>
														<v-checkbox v-model="active"></v-checkbox>
													</v-list-item-action>

													<v-list-item-content>
														<v-list-item-title>Send</v-list-item-title>
														<v-list-item-subtitle>A quote will be generated and sent back to you within 48hrs</v-list-item-subtitle>
													</v-list-item-content>
												</template>
											</v-list-item>
										</v-list-item-group>
									</v-list>
									<p class="display-1 font-weight-black pa-2 text-center">How To Measure</p>
								</v-card>

								<v-card flat color="transparent" class="mt-4 ma-3 body-1 font-weight-medium text-justify">
									<v-img
										src="../assets/window.jpg"
										lazy-src="https://picsum.photos/id/11/10/6"
										class="grey lighten-2"
										max-width="500"
										max-height="300"
									></v-img>
									<p class="red--text headline text-center">Important Note</p>
									<p>
										When measuring the window or door for a hurricane shutter, make sure that you are measuring
										from the inner walls or the outermost edge. For example, if the door is inset into the wall,
										measure from the inner walls of the inset.
									</p>
								</v-card>
								<p class="text-center display-1 font-weight-black">Shutter Form</p>
								<v-data-table
									:headers="headers"
									:items="shutters"
									disable-sort="true"
									hide-default-footer
									disable-pagination="true"
									class="elevation-1"
								>
									<template v-slot:top>
										<v-toolbar flat color="white">
											<v-toolbar-title>Quote Calculator</v-toolbar-title>
											<v-divider class="mx-4" inset vertical></v-divider>
											<v-spacer></v-spacer>
											<v-dialog v-model="dialog" max-width="500px">
												<template v-slot:activator="{ on }">
													<v-btn color="primary" dark class="mb-2" v-on="on">New Shutter</v-btn>
												</template>
												<v-card>
													<v-card-title>
														<span class="headline">{{ formTitle }}</span>
													</v-card-title>
// https://www.raymondcamden.com/2017/12/05/building-related-selects-with-vuejs
													<v-card-text>
														<v-container>
															<v-row>
																<v-col cols="12" sm="12" md="12">
																	<v-text-field v-model="editedItem.name" label="Opening Name"></v-text-field>
																</v-col>
																<v-col cols="12" sm="6" md="6">
																	<v-text-field v-model="editedItem.width" label="Width"></v-text-field>
																</v-col>
																<v-col cols="12" sm="6" md="6">
																	<v-text-field v-model="editedItem.height" label="Height"></v-text-field>
																</v-col>
																<v-col cols="12" sm="6" md="6">
																	<v-select :items="types" v-model="editedItem.type" label="Shutter Type"></v-select>
																</v-col>
																<v-col cols="12" sm="6" md="6">
																	<v-text-field v-model="editedItem.header" label="header"></v-text-field>
																</v-col>
																<v-col cols="12" sm="6" md="6">
																	<v-text-field v-model="editedItem.footer" label="footer"></v-text-field>
																</v-col>
																<v-col cols="12" sm="6" md="6">
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
									</template>
									<template v-slot:item.action="{ item }">
										<v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
										<v-icon small @click="deleteItem(item)">delete</v-icon>
									</template>
									<template v-slot:no-data>
										<v-btn color="primary" @click="initialize">Reset</v-btn>
									</template>
								</v-data-table>
							</v-flex>

							<v-flex xs12 sm4 md4 lg4 xl4>
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
export default {
	name: "FreeQuote",
	components: {},
	methods: {
		initialize() {
			this.shutters = [
				{
					name: "Example Door",
					height: "96",
					width: "36",
					type: ".050 Aluminum",
					header: "H-Header",
					footer: "F-Track",
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
			return this.editedIndex === -1 ? "New Shutter" : "Edit Item";
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

		return {
			types: [
				"Accordion",
				".050 Aluminum Panels",
				"24G Steel Panels",
				"Roll Down"
			],
			headerOne: ["Standard"],
			footerAccordion: ["Standard", "Walk-Over (for Doors)", "Removable"],
			dialog: false,
			headers: [
				{
					text: "Opening Name",
					align: "left",
					sortable: false,
					value: "name"
				},
				{ text: "Width (in)", value: "width", sortable: false },
				{ text: "Height (in)", value: "height", sortable: false },
				{ text: "Shutter Type", value: "type", sortable: false },
				{ text: "Header", value: "header", sortable: false },
				{ text: "Footer", value: "footer", sortable: false },
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
				header: "",
				footer: "",
				color: ""
			},
			defaultItem: {
				name: "",
				width: "",
				height: "",
				type: "",
				header: "",
				footer: "",
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

			conditions: false,
			snackbar: false,
			terms: false,
			defaultForm
		};
	}
};
</script>