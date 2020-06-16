<!--

<template>
  <v-container class="ma-0 pa-0">
    <v-divider></v-divider>
    <p class="text-center display-1 font-weight-black">Free Quote Form</p>
    <v-divider></v-divider>
   
    <form
      ref="quote-Form"
      name="quote-form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit2"
      hidden
    >
      <input type="text" name="name" />
      <input type="text" name="email" />
      <input type="text" name="number" />

      <input type="text" name="type" />
      <input type="text" name="color" />

      <input type="text" name="name_0" />
      <input type="text" name="height_0" />
      <input type="text" name="width_0" />

      <input type="text" name="name_1" />
      <input type="text" name="height_1" />
      <input type="text" name="width_1" />

      <input type="text" name="name_2" />
      <input type="text" name="height_2" />
      <input type="text" name="width_2" />

      <input type="text" name="name_3" />
      <input type="text" name="height_3" />
      <input type="text" name="width_3" />

      <input type="text" name="name_4" />
      <input type="text" name="height_4" />
      <input type="text" name="width_4" />

      <input type="text" name="name_5" />
      <input type="text" name="height_5" />
      <input type="text" name="width_5" />

      <input type="text" name="name_6" />
      <input type="text" name="height_6" />
      <input type="text" name="width_6" />

      <input type="text" name="name_7" />
      <input type="text" name="height_7" />
      <input type="text" name="width_7" />

      <input type="text" name="name_8" />
      <input type="text" name="height_8" />
      <input type="text" name="width_8" />

      <input type="text" name="name_9" />
      <input type="text" name="height_9" />
      <input type="text" name="width_9" />

      <v-card class="pa-3">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Type</th>
                <th class="text-left">Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <v-select :items="types" name="type"></v-select>
                </td>
                <td>
                  <v-select :items="colors" name="colors"></v-select>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>


        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Height</th>
                <th class="text-left">Width</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <v-text-field v-model="form.name_0" name="name_0"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_0" name="height_0"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_0" name="width_0"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_1" name="name_1"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_1" name="height_1"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_1" name="width_1"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_2" name="name_2"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_2" name="height_2"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_2" name="width_2"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_3" name="name_3"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_3" name="height_3"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_3" name="width_3"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_4" name="name_4"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_4" name="height_4"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_4" name="width_4"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_5" name="name_5"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_5" name="height_5"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_5" name="width_5"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_6" name="name_6"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_6" name="height_6"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_6" name="width_6"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_7" name="name_7"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_7" name="height_7"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_7" name="width_7"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_8" name="name_8"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_8" name="height_8"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_8" name="width_8"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form.name_9" name="name_9"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.height_9" name="height_9"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form.width_9" name="width_9"></v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>

     ==========================================================================
      <v-card>
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Message sent!</span>
          <v-icon dark>mdi-checkbox-marked-circle</v-icon>
        </v-snackbar>
        <v-snackbar v-model="snackbar2" absolute top right color="fail">
          <span>Message Did Not Succeed!</span>
          <v-icon dark>mdi-checkbox-flash-off</v-icon>
        </v-snackbar>
        <v-layout row wrap justify-center align-center class="pa-5">
          <v-flex xs12 sm12 md4 lg4>
            <v-text-field
              class="ma-1"
              v-model="form.name"
              type="text"
              name="name"
              label="Name"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md4 lg4>
            <v-text-field
              class="ma-1"
              v-model="form.number"
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
          <v-btn
            :disabled="!formIsValid"
            width="10em"
            color="success"
            type="submit"
            @click.prevent="handleSubmit2"
          >Get Quote</v-btn>
        </v-layout>
      </v-card>
    </form>


  </v-container>
</template>


<script>
//==================================================================
export default {
  name: "QuoteForm",
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit2() {
      /* eslint no-console: */
      /* eslint no-mixed-spaces-and-tabs: */
      /* eslint no-unused-vars: */

      console.log("edit: in Handle submit");

      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      this.$http
        .post(
          "/",
          this.encode({
            "form-name": "quote-form",
            ...this.form
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
          this.resetForm();
        });
    }

    //===================================================================
  },
  computed: {
    formIsValid() {
      return this.form.name && this.form.email && this.form.number;
    }
  },

  created() {
    this.initialize();
  },
  data() {
    return {
      types: [
        "Accordion",
        ".050 Aluminum Panels",
        "24G Steel Panels",
        "Roll Down"
      ],
      colors: ["White", "Ivory", "Beige", "Brown"],

      form: {
        name: "",
        email: "",
        number: "",

        name_0: "eg. Door",
        height_0: "96",
        width_0: "36",

        name_1: "eg. Window 1",
        height_1: "40",
        width_1: "50",

        name_2: "",
        height_2: "",
        width_2: "",

        name_3: "",
        height_3: "",
        width_3: "",

        name_4: "",
        height_4: "",
        width_4: "",

        name_5: "",
        height_5: "",
        width_5: "",

        name_6: "",
        height_6: "",
        width_6: "",

        name_7: "",
        height_7: "",
        width_7: "",

        name_8: "",
        height_8: "",
        width_8: "",

        name_9: "",
        height_9: "",
        width_9: ""
      },

      snackbar: false,
      snackbar2: false
    };
  }
};
</script>

 -->
<template>
	<v-container class="ma-0 pa-0">
		<form
			name="free-quote"
			method="POST"
			data-netlify="true"
			netlify-honeypot="bot-field"
			@submit.prevent="handleSubmit"
		>
      <input type="hidden" name="name" />
      <input type="hidden" name="email" />
      <input type="hidden" name="number" />

      <input type="hidden" name="type" />
      <input type="hidden" name="color" />

      <input type="hidden" name="name_0" />
      <input type="hidden" name="height_0" />
      <input type="hidden" name="width_0" />

      <input type="hidden" name="name_1" />
      <input type="hidden" name="height_1" />
      <input type="hidden" name="width_1" />

      <input type="hidden" name="name_2" />
      <input type="hidden" name="height_2" />
      <input type="hidden" name="width_2" />

      <input type="hidden" name="name_3" />
      <input type="hidden" name="height_3" />
      <input type="hidden" name="width_3" />

      <input type="hidden" name="name_4" />
      <input type="hidden" name="height_4" />
      <input type="hidden" name="width_4" />

      <input type="hidden" name="name_5" />
      <input type="hidden" name="height_5" />
      <input type="hidden" name="width_5" />

      <input type="hidden" name="name_6" />
      <input type="hidden" name="height_6" />
      <input type="hidden" name="width_6" />

      <input type="hidden" name="name_7" />
      <input type="hidden" name="height_7" />
      <input type="hidden" name="width_7" />

      <input type="hidden" name="name_8" />
      <input type="hidden" name="height_8" />
      <input type="hidden" name="width_8" />

      <input type="hidden" name="name_9" />
      <input type="hidden" name="height_9" />
      <input type="hidden" name="width_9" />






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
 <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Height</th>
                <th class="text-left">Width</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_0" name="name_0"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_0" name="height_0"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_0" name="width_0"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_1" name="name_1"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_1" name="height_1"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_1" name="width_1"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_2" name="name_2"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_2" name="height_2"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_2" name="width_2"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_3" name="name_3"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_3" name="height_3"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_3" name="width_3"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_4" name="name_4"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_4" name="height_4"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_4" name="width_4"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_5" name="name_5"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_5" name="height_5"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_5" name="width_5"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_6" name="name_6"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_6" name="height_6"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_6" name="width_6"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_7" name="name_7"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_7" name="height_7"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_7" name="width_7"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_8" name="name_8"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_8" name="height_8"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_8" name="width_8"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="quoteform.name_9" name="name_9"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.height_9" name="height_9"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="quoteform.width_9" name="width_9"></v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

				<v-text-field v-model="quoteform.name" name="name" label="Name" required></v-text-field>

				<v-text-field v-model="quoteform.email" name="email" label="Email" required></v-text-field>

				<v-text-field v-model="quoteform.number" name="number" label="Number" required></v-text-field>

				<v-textarea v-model="quoteform.message" name="message" color="teal">
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
			quoteform: {
				name: "",
				email: "",
				number: "",
				message: "",
        name_0: "eg. Door",
        height_0: "96",
        width_0: "36",

        name_1: "eg. Window 1",
        height_1: "40",
        width_1: "50",

        name_2: "",
        height_2: "",
        width_2: "",

        name_3: "",
        height_3: "",
        width_3: "",

        name_4: "",
        height_4: "",
        width_4: "",

        name_5: "",
        height_5: "",
        width_5: "",

        name_6: "",
        height_6: "",
        width_6: "",

        name_7: "",
        height_7: "",
        width_7: "",

        name_8: "",
        height_8: "",
        width_8: "",

        name_9: "",
        height_9: "",
        width_9: ""

			},
			snackbar: false,
			snackbar2: false
		};
	},
	computed: {
		formIsValid2() {
			return this.quoteform.name && this.quoteform.email && this.quoteform.number;
		}
	},
	created() {
		console.log("newly14");
	},
	methods: {
		resetForm() {
			(this.quoteform.name = ""),
				(this.quoteform.email = ""),
				(this.quoteform.number = "");
			this.quoteform.message = "";
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
			console.log(this.quoteform);

			const axiosConfig = {
				header: { "Content-Type": "application/x-www-form-urlencoded" }
			};
			this.$http
				.post(
					"/",
					this.encode({
						"form-name": "free-quote",
						...this.quoteform
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
