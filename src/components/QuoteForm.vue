<template>
  <v-container class="ma-0 pa-0">
    <v-divider></v-divider>
    <p class="text-center display-1 font-weight-black">Free Quote Form</p>
    <v-divider></v-divider>
    <!-- ================================================================== -->
    <form
      ref="quoteForm"
      name="quote_form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="name" />

      <input type="hidden" name="email" />

      <input type="hidden" name="number" />

      <input type="hidden" name="name_0" />
      <input type="hidden" name="height_0" />
      <input type="hidden" name="width_0" />
      <input type="hidden" name="type_0" />
      <input type="hidden" name="color_0" />

      <input type="hidden" name="name_1" />
      <input type="hidden" name="height_1" />
      <input type="hidden" name="width_1" />
      <input type="hidden" name="type_1" />
      <input type="hidden" name="color_1" />

      <input type="hidden" name="name_2" />
      <input type="hidden" name="height_2" />
      <input type="hidden" name="width_2" />
      <input type="hidden" name="type_2" />
      <input type="hidden" name="color_2" />

      <input type="hidden" name="name_3" />
      <input type="hidden" name="height_3" />
      <input type="hidden" name="width_3" />
      <input type="hidden" name="type_3" />
      <input type="hidden" name="color_3" />

      <input type="hidden" name="name_4" />
      <input type="hidden" name="height_4" />
      <input type="hidden" name="width_4" />
      <input type="hidden" name="type_4" />
      <input type="hidden" name="color_4" />

      <input type="hidden" name="name_5" />
      <input type="hidden" name="height_5" />
      <input type="hidden" name="width_5" />
      <input type="hidden" name="type_5" />
      <input type="hidden" name="color_5" />

      <input type="hidden" name="name_6" />
      <input type="hidden" name="height_6" />
      <input type="hidden" name="width_6" />
      <input type="hidden" name="type_6" />
      <input type="hidden" name="color_6" />

      <input type="hidden" name="name_7" />
      <input type="hidden" name="height_7" />
      <input type="hidden" name="width_7" />
      <input type="hidden" name="type_7" />
      <input type="hidden" name="color_7" />

      <input type="hidden" name="name_8" />
      <input type="hidden" name="height_8" />
      <input type="hidden" name="width_8" />
      <input type="hidden" name="type_8" />
      <input type="hidden" name="color_8" />

      <input type="hidden" name="name_9" />
      <input type="hidden" name="height_9" />
      <input type="hidden" name="width_9" />
      <input type="hidden" name="type_9" />
      <input type="hidden" name="color_9" />

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
                        <v-text-field
                          v-model="editedItem.name"
                          name="opening_name_1"
                          label="Opening Name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.width" name="width_2" label="Width"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.height" name="height_1" label="Height"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-select
                          :items="types"
                          v-model="editedItem.type"
                          name="type_1"
                          label="Shutter Type"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.color" name="color_1" label="Color"></v-text-field>
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
        </v-toolbar>
      </v-card>
      <v-layout row wrap justify-center align-center class="pa-3">
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
        <v-btn width="10em" type="submit" @click.prevent="handleSubmit" color="green">Get Quote</v-btn>
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
        console.log("edited Existing");
        Object.assign(this.shutters[this.editedIndex], this.editedItem);
      } else {
        console.log("edited New");

        this.shutters.push(this.editedItem);
        console.log("edit" + this.shutters[0].name);
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
    },
    //==================================================================
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      /* eslint no-console: */
      /* eslint no-mixed-spaces-and-tabs: */
      /* eslint no-unused-vars: */

      console.log("edit: in Handle submit");

      var name_0,
        height_0,
        width_0,
        type_0,
        color_0,
        name_1,
        height_1,
        width_1,
        type_1,
        color_1,
        name_2,
        height_2,
        width_2,
        type_2,
        color_2,
        name_3,
        height_3,
        width_3,
        type_3,
        color_3,
        name_4,
        height_4,
        width_4,
        type_4,
        color_4,
        name_5,
        height_5,
        width_5,
        type_5,
        color_5,
        name_6,
        height_6,
        width_6,
        type_6,
        color_6,
        name_7,
        height_7,
        width_7,
        type_7,
        color_7,
        name_8,
        height_8,
        width_8,
        type_8,
        color_8,
        name_9,
        height_9,
        width_9,
        type_9,
        color_9,
        name_10,
        height_10,
        width_10,
        type_10,
        color_10 = null;

      var output = [];

      name_0 = this.shutters[0].name;
      height_0 = this.shutters[0].height;
      width_0 = this.shutters[0].width;
      type_0 = this.shutters[0].type;
      color_0 = this.shutters[0].color;

      name_1 = this.shutters[1].name;
      height_1 = this.shutters[1].height;
      width_1 = this.shutters[1].width;
      type_1 = this.shutters[1].type;
      color_1 = this.shutters[1].color;

      name_2 = this.shutters[2].name;
      height_2 = this.shutters[2].height;
      width_2 = this.shutters[2].width;
      type_2 = this.shutters[2].type;
      color_2 = this.shutters[2].color;

      name_3 = this.shutters[3].name;
      height_3 = this.shutters[3].height;
      width_3 = this.shutters[3].width;
      type_3 = this.shutters[3].type;
      color_3 = this.shutters[3].color;
      name_4 = this.shutters[4].name;
      height_4 = this.shutters[4].height;
      width_4 = this.shutters[4].width;
      type_4 = this.shutters[4].type;
      color_4 = this.shutters[4].color;

      name_5 = this.shutters[5].name;
      height_5 = this.shutters[5].height;
      width_5 = this.shutters[5].width;
      type_5 = this.shutters[5].type;
      color_5 = this.shutters[5].color;

      name_6 = this.shutters[6].name;
      height_6 = this.shutters[6].height;
      width_6 = this.shutters[6].width;
      type_6 = this.shutters[6].type;
      color_6 = this.shutters[6].color;

      name_7 = this.shutters[7].name;
      height_7 = this.shutters[7].height;
      width_7 = this.shutters[7].width;
      type_7 = this.shutters[7].type;
      color_7 = this.shutters[7].color;

      name_8 = this.shutters[8].name;
      height_8 = this.shutters[8].height;
      width_8 = this.shutters[8].width;
      type_8 = this.shutters[8].type;
      color_8 = this.shutters[8].color;

      name_9 = this.shutters[9].name;
      height_9 = this.shutters[9].height;
      width_9 = this.shutters[9].width;
      type_9 = this.shutters[9].type;
      color_9 = this.shutters[9].color;

      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      this.$http
        .post(
          "/",
          this.encode({
            "form-name": "quoteForm",
            ...name_0,
            ...height_0,
            ...width_0,
            ...type_0,
            ...color_0,
            ...name_1,
            ...height_1,
            ...width_1,
            ...type_1,
            ...color_1,
            ...name_2,
            ...height_2,
            ...width_2,
            ...type_2,
            ...color_2,
            ...name_3,
            ...height_3,
            ...width_3,
            ...type_3,
            ...color_3,
            ...name_4,
            ...height_4,
            ...width_4,
            ...type_4,
            ...color_4,
            ...name_5,
            ...height_5,
            ...width_5,
            ...type_5,
            ...color_5,
            ...name_6,
            ...height_6,
            ...width_6,
            ...type_6,
            ...color_6,
            ...name_7,
            ...height_7,
            ...width_7,
            ...type_7,
            ...color_7,
            ...name_8,
            ...height_8,
            ...width_8,
            ...type_8,
            ...color_8,
            ...name_9,
            ...height_9,
            ...width_9,
            ...type_9,
            ...color_9,
            ...name_10,
            ...height_10,
            ...width_10,
            ...type_10,
            ...color_10
          }),
          axiosConfig
        )
        .then(() => {
          // this.$router.push("thanks");
          // this.snackbar = true;
          console.log("oh yeah she worked");
          // this.resetForm();
        })
        .catch(err => {
          console.log(err);
          // this.snackbar2 = true;
        });
    }

    //===================================================================
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
        email: [val => (val || "").length > 0 || "This field is required"],
        name: [val => (val || "").length > 0 || "This field is required"]
      },
      //Data for the Contact Us form
      qform: Object.assign({}, quoteForm),
      rules2: {
        email: [val => (val || "").length > 0 || "This field is required"],
        name: [val => (val || "").length > 0 || "This field is required"]
      },

      snackbar: false,

      defaultForm,
      quoteForm
    };
  }
};
</script>