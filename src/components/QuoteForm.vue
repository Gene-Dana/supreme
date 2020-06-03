<template>
  <v-container class="ma-0 pa-0">
    <v-divider></v-divider>
    <p class="text-center display-1 font-weight-black">Free Quote Form</p>
    <v-divider></v-divider>
    <!-- ================================================================== -->
    <form
      ref="quoteForm"
      name="quote-form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit2"
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
                  <v-text-field v-model="shutters[0].name" name="name_0"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[0].height" name="height_0"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[0].width" name="width_0"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[1].name" name="name_1"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[1].height" name="height_1"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[1].width" name="width_1"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[2].name" name="name_2"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[2].height" name="height_2"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[2].width" name="width_2"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[3].name" name="name_3"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[3].height" name="height_3"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[3].width" name="width_3"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[4].name" name="name_4"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[4].height" name="height_4"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[4].width" name="width_4"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[5].name" name="name_5"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[5].height" name="height_5"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[5].width" name="width_5"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[6].name" name="name_6"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[6].height" name="height_6"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[6].width" name="width_6"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[7].name" name="name_7"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[7].height" name="height_7"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[7].width" name="width_7"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[8].name" name="name_8"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[8].height" name="height_8"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[8].width" name="width_8"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="shutters[9].name" name="name_9"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[9].height" name="height_9"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="shutters[9].width" name="width_9"></v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- ========================================================================== -->
      </v-card>
      <v-layout row wrap justify-center align-center class="pa-3">
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Message sent!</span>
          <v-icon dark>mdi-checkbox-marked-circle</v-icon>
        </v-snackbar>
        <v-snackbar v-model="snackbar2" absolute top right color="fail">
          <span>Message Did Not Succeed!</span>
          <v-icon dark>mdi-checkbox-flash-off</v-icon>
        </v-snackbar>
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
          text
          width="10em"
          color="success"
          type="submit"
          @click.prevent="handleSubmit2"
        >Get Quote</v-btn>
      </v-layout>
    </form>
  </v-container>
</template>


<script>
export default {
  name: "QuoteForm",
  //=========================================================================
  methods: {
    initialize() {
      this.shutters = [
        {
          name: "eg. Door",
          height: "96",
          width: "36"
        },
        {
          name: "eg. Window 1",
          height: "40",
          width: "50"
        },
        {
          name: "",
          height: "",
          width: ""
        },
        {
          name: "",
          height: "",
          width: ""
        },
        {
          name: "",
          height: "",
          width: ""
        },
        {
          name: "",
          height: "",
          width: ""
        },
        {
          name: "",
          height: "",
          width: ""
        },
        {
          name: "",
          height: "",
          width: ""
        },
        {
          name: "",
          height: "",
          width: ""
        },
        {
          name: "",
          height: "",
          width: ""
        }
      ];
    },

    //==================================================================
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
            "form-name": "quoteForm",
            ...this.form,
            ...this.shutters
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

      shutters: [],

      form: {
        name: "",
        email: "",
        number: "",
      },

      snackbar: false
    };
  }
};
</script>