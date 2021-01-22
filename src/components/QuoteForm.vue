 <!--
 <template>
  <v-container class="ma-0 pa-0">
    <form
      name="quote-form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handlesubmit3"
      enctype=“application/x-www-form-urlencoded” 
    >
      
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

      <input type="hidden" name="names" />

      <input type="hidden" name="emails" />

      <input type="hidden" name="numbers" />

      <textarea type="hidden" name="messages" />

      <v-card color="transparent" class="pa-5">
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
                  <v-text-field v-model="form2.name_0" name="name_0"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_0" name="height_0"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_0" name="width_0"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_1" name="name_1"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_1" name="height_1"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_1" name="width_1"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_2" name="name_2"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_2" name="height_2"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_2" name="width_2"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_3" name="name_3"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_3" name="height_3"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_3" name="width_3"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_4" name="name_4"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_4" name="height_4"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_4" name="width_4"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_5" name="name_5"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_5" name="height_5"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_5" name="width_5"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_6" name="name_6"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_6" name="height_6"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_6" name="width_6"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_7" name="name_7"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_7" name="height_7"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_7" name="width_7"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_8" name="name_8"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_8" name="height_8"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_8" name="width_8"></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field v-model="form2.name_9" name="name_9"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.height_9" name="height_9"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="form2.width_9" name="width_9"></v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Message sent!</span>
          <v-icon dark>mdi-checkbox-marked-circle</v-icon>
        </v-snackbar>
        <v-snackbar v-model="snackbar2" absolute top right color="fail">
          <span>Message Did Not Succeed!</span>
          <v-icon dark>mdi-checkbox-flash-off</v-icon>
        </v-snackbar>

        <v-text-field v-model="form2.name" name="names" label="Name" required></v-text-field>

        <v-text-field v-model="form2.email" name="emails" label="Email" required></v-text-field>

        <v-text-field v-model="form2.number" name="numbers" label="Number" required></v-text-field>

        <v-textarea v-model="form2.message" name="messages" color="teal">
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
          @click.prevent="handlesubmit3"
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
      return this.form2.name && this.form2.email && this.form2.number;
    }
  },
  created() {
    console.log("newly14");
  },
  methods: {
    resetForm() {
      (this.form2.name = ""), (this.form2.email = ""), (this.form2.number = "");
      this.form2.message = "";
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handlesubmit3() {
      /* eslint no-console: */
      console.log(this.form2);

      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      this.$http
        .post(
          "/",
          this.encode({
            "form-name": "quote-form",
            ...this.form2
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
-->

<template>
  <v-container class="ma-0 pa-3">
    <form
      name="ask-new-question"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="ask-new-question" />

      <v-card color="transparent" class="pa-5">
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
                  <v-text-field
                    v-model="form2.name_0"
                    name="name_0"
                    placeholder="e.g Window"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.height_0"
                    name="height_0"
                     placeholder="e.g 36in"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.width_0"
                    name="width_0"
                     placeholder="e.g 36in"
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                    v-model="form2.name_1"
                    name="name_1"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.height_1"
                    name="height_1"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.width_1"
                    name="width_1"
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                    v-model="form2.name_2"
                    name="name_2"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.height_2"
                    name="height_2"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.width_2"
                    name="width_2"
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                    v-model="form2.name_3"
                    name="name_3"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.height_3"
                    name="height_3"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.width_3"
                    name="width_3"
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                    v-model="form2.name_4"
                    name="name_4"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.height_4"
                    name="height_4"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.width_4"
                    name="width_4"
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                    v-model="form2.name_5"
                    name="name_5"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.height_5"
                    name="height_5"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.width_5"
                    name="width_5"
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                    v-model="form2.name_6"
                    name="name_6"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.height_6"
                    name="height_6"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.width_6"
                    name="width_6"
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                    v-model="form2.name_7"
                    name="name_7"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.height_7"
                    name="height_7"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="form2.width_7"
                    name="width_7"
                  ></v-text-field>
                </td>
              </tr>
             
             
            </tbody>
          </template>
        </v-simple-table>
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Message sent!</span>
          <v-icon dark>mdi-checkbox-marked-circle</v-icon>
        </v-snackbar>
        <v-snackbar v-model="snackbar2" absolute top right color="fail">
          <span>Message Did Not Succeed!</span>
          <v-icon dark>mdi-checkbox-flash-off</v-icon>
        </v-snackbar>

        <v-text-field
          v-model="form2.name"
          name="name"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="form2.email"
          name="email"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="form2.number"
          name="number"
          label="Number"
          required
        ></v-text-field>

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
          >Send</v-btn
        >
      </v-card>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "QuoteQAForm",
  data() {
    return {
      form2: {
        name: "",
        email: "",
        number: "",
        message: "",

        name_0: "",
        height_0: "",
        width_0: "",

        name_1: "",
        height_1: "",
        width_1: "",

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

      
      },
      snackbar: false,
      snackbar2: false,
    };
  },
  computed: {
    formIsValid2() {
      return this.form2.name && this.form2.email && this.form2.number;
    },
  },
  created() {
    console.log("newly14");
  },
  methods: {
    resetForm() {
      console.log(this.form2[0]);
      (this.form2.name = ""), (this.form2.email = ""), (this.form2.number = "");
      this.form2.message = ""; this.form2.name_0 ="", this.form2.name_1 ="",this.form2.name_2 ="",
      this.form2.name_3 ="", this.form2.name_3 ="", this.form2.name_4 ="", this.form2.name_5 ="",
      this.form2.name_6 ="", this.form2.name_7 ="", this.form2.height_0 ="", this.form2.height_1 ="",
      this.form2.height_2 ="", this.form2.height_3 ="", this.form2.height_4 ="", this.form2.height_5 ="", 
      this.form2.height_6 ="", this.form2.height_7 ="", this.form2.width_0 ="", this.form2.width_1 ="",
      this.form2.width_2 ="", this.form2.width_3 ="", this.form2.width_4 ="", this.form2.width_5 ="",
      this.form2.width_6 ="", this.form2.width_7 =""
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axios = require("axios");
      /* eslint no-console: */
      console.log(this.form2);

      axios({
        method: "post",
        url:
          "https://us-central1-mail-server-301117.cloudfunctions.net/sendMail?type=supreme_quote&location=s.fl&name=" +
          this.form2.name +
          "&number=" +
          this.form2.number +
          "&email=" +
          this.form2.email +
          "&message=" +
          this.form2.message +
          "&name_0=" +
          this.form2.name_0 +
          "&name_1=" +
          this.form2.name_1 +
          "&name_2=" +
          this.form2.name_2 +
          "&name_3=" +
          this.form2.name_3 +
          "&name_4=" +
          this.form2.name_4 +
          "&name_5=" +
          this.form2.name_5 +
          "&name_6=" +
          this.form2.name_6 +
          "&name_7=" +
          this.form2.name_7 +
          "&height_0=" +
          this.form2.height_0 +
          "&height_1=" +
          this.form2.height_1 +
          "&height_2=" +
          this.form2.height_2 +
          "&height_3=" +
          this.form2.height_3 +
          "&height_4=" +
          this.form2.height_4 +
          "&height_5=" +
          this.form2.height_5 +
          "&height_6=" +
          this.form2.height_6 +
          "&height_7=" +
          this.form2.height_7 +
          "&width_0=" +
          this.form2.width_0 +
          "&width_1=" +
          this.form2.width_1 +
          "&width_2=" +
          this.form2.width_2 +
          "&width_3=" +
          this.form2.width_3 +
          "&width_4=" +
          this.form2.width_4 +
          "&width_5=" +
          this.form2.width_5 +
          "&width_6=" +
          this.form2.width_6 +
          "&width_7=" +
          this.form2.width_7 
      })
        .then(() => {
          // this.$router.push("thanks");
          this.snackbar = true;
          console.log("Message Sent!");
          this.resetForm();
        })
        .catch((err) => {
          console.log(err);
          this.snackbar2 = true;
        });
    },
  },
};
</script>
