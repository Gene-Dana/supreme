<template>
  <v-container min-width="100%" max-width="100%" class="pa-0" fluid>
    <v-layout>
      <v-img height="7em" src="../assets/scary.jpg"></v-img>
    </v-layout>
    <v-layout column>
      <v-flex>
        <v-card class="pa-3 ma-0" color="grey lighten-3" id="dashboard">
          <v-card class="pa-3 ma-0">
            <v-layout wrap>
              <v-flex xs12 sm8 md8 lg8 xl8>
                <!-- <v-card>
					<v-img :src="require('../assets/GetNow.png')" min-width="50%"></v-img>
                </v-card>-->

                <v-card flat color="transparent" class="ma-0">
                  <v-card-title class="display-1 font-weight-black pa-2">How To Measure</v-card-title>
                </v-card>
                <p class="red--text headline text-center">Important Note</p>
                <p>
                  When measuring the window or door for a hurricane shutter, make sure that you are measuring
                  from the inner walls or the outermost edge. For example, if the door is inset into the wall,
                  measure from the inner walls of the inset.
                </p>
                <v-card-title>Procedure</v-card-title>
                <ul>
                  <li>Begin at the front door and work clockwise around the house.</li>
                  <li>
                    For windows, horizontally measure from the inside edge of the opening.
                    Then vertically measure from the inside edge of the top to the bottom. All shutters use a
                    track system so make sure you then add
                    <span
                      class="font-weight-black red--text"
                    >atleast 3in</span> of flat surface to each measurement.
                  </li>
                  <li>
                    For doors, horizontally measure from one inside edge of the openings, vertically
                    measure from the inside edge of the top to the floor.
                  </li>
                  <li>
                    For a quote please enter measurements into our Free Quote page or email dimensions to supremehurricaneshutters@gmail.com
                    and we will have an estimate for you within 48 hours
                  </li>
                </ul>
                <v-card
                  flat
                  color="transparent"
                  class="mt-4 ma-3 body-1 font-weight-medium text-justify"
                >
                  <v-flex flat class="d-flex justify-center">
                    <v-img
                      src="../assets/window.jpg"
                      lazy-src="https://picsum.photos/id/11/10/6"
                      class="grey lighten-2"
                      max-width="100%"
                      max-height="300"
                    ></v-img>
                  </v-flex>
                </v-card>
                <v-card flat wrap color="transparent" class="ma-0">
                  <v-card-title class="headline font-weight-black pa-2 fix">
                    Measuring for
                    <span
                      style="text-decoration: underline;"
                      class="pl-2"
                    >Accordion & Storm Panels</span>
                  </v-card-title>
                </v-card>
                <v-card
                  flat
                  color="transparent"
                  class="mt-4 ma-3 body-1 font-weight-medium text-justify"
                >
                  <p>
                    For Accordion and storm panels you will measure the outside of the opening. If the opening has a board around it you will measure outside of the border.
                    If you would like to install the shutters on a board you must have at least 5 inches of flat solid board on all side.
                  </p>
                  <p>Important: If you have a sill measure the height all the way pass the sill as it shows in the first picture. The tracks will be installed right under the sill.</p>
                </v-card>
                <v-layout row wrap align-center justify-center class="mb-3">
                  <v-img max-width="45%" src="../assets/measure1.jpg"></v-img>

                  <v-img max-width="45%" src="../assets/measure2.jpg"></v-img>
                </v-layout>

                <v-card flat wrap color="transparent" class="ma-0">
                  <v-card-title class="headline font-weight-black pa-2 fix">
                    Measuring for
                    <span style="text-decoration: underline;" class="pl-2">Rolldown</span>
                  </v-card-title>
                </v-card>

                <v-card
                  flat
                  color="transparent"
                  class="mt-4 ma-3 body-1 font-weight-medium text-justify"
                >
                  <p>
                    For roll down shutters you will measure the outside of the opening. If the opening has a
                    board around it you will measure outside of the border. If you would like to install the
                    shutters on a board you must have at least 3 inches on the right, left and bottom. For the
                    top you must have at least 8 inches.
                  </p>
                  <p>
                    Important Note: Please keep in mind the shutter box can be up to 8 inches so make sure from
                    you also measure the space above your window. You will need at least 8 inches clearance to
                    install the box.
                  </p>
                </v-card>
                <v-card flat color="transparent" class="ma-3">
                  <v-img min-width="100%" src="../assets/rollmeasure.jpg"></v-img>
                </v-card>
              </v-flex>

              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-card
                  flat
                  color="red"
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  <v-card-title class="justify-center title white--text">GET A FREE QUOTE TODAY!</v-card-title>
                </v-card>
                <router-link to="/accordion">
                  <v-card class="px-3 py-4" flat>
                    <v-img width="100%" src="../assets/accordion_banner.png"></v-img>
                  </v-card>
                </router-link>
                <router-link to="/panels">
                  <v-card class="px-3 py-4" flat>
                    <v-img width="100%" src="../assets/panel_banner.png"></v-img>
                  </v-card>
                </router-link>
                <router-link to="/rolldown">
                  <v-card class="px-3 py-4" flat>
                    <v-img width="100%" src="../assets/rolldown_banner.png"></v-img>
                  </v-card>
                </router-link>
                <router-link to="/garage">
                  <v-card class="px-3 py-4" flat>
                    <v-img width="100%" src="../assets/impact_banner.png"></v-img>
                  </v-card>
                </router-link>
                <v-card
                  flat
                  color="red"
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  <v-card-title
                    class="justify-center title white--text fix"
                  >100% FINANCING AVAILABLE</v-card-title>
                </v-card>
                <v-card>
                  <router-link to="/ygrene">
                    <v-card class="px-3 py-4 mb-3" flat>
                      <v-img width="100%" src="../assets/ygrene.jpg"></v-img>
                    </v-card>
                  </router-link>
                </v-card>
                <v-card
                  flat
                  color="red"
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  <v-card-title class="justify-center title white--text fix">QUESTIONS? CONTACT US!</v-card-title>
                </v-card>
                <QAform></QAform>
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import QAform from "./QAform";

export default {
  name: "HowToMeasure",
  components: { QAform },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
  },
  computed: {
    formIsValid() {
      return this.form.name && this.form.email && this.form.number;
    },
  },
  data() {
    const defaultForm = Object.freeze({
      name: "",
      email: "",
      number: "",
      message: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        email: [(val) => (val || "").length > 0 || "This field is required"],
        name: [(val) => (val || "").length > 0 || "This field is required"],
      },

      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      snackbar: false,
      terms: false,
      defaultForm,
      items: [],
    };
  },
};
</script>
<style scoped>
.fix {
  word-break: normal;
}
</style>