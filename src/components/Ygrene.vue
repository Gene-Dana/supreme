<template>
  <v-container min-width="100%" max-width="100%" class="py-0 px-3" fluid>
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

                <v-card flat color="transparent" class="my-0 mx-3">
                  <v-img height src="../assets/ygrene_banner.png"></v-img>
                </v-card>

                <v-card
                  flat
                  color="transparent"
                  class="mt-4 ma-3 body-1 font-weight-medium text-justify"
                >
                  <v-card flat wrap color="transparent" class="ma-0">
                    <v-card-title class="display-1 font-weight-black pa-2 text-center fix">
                      Zero down financing
                      for home repairs that simply can’t wait
                    </v-card-title>
                  </v-card>

                  <v-layout align-center justify-center row class="ma-4 mb-4">
                    <v-card flat class="ma-2" width="130">
                      <v-img aspect-ratio="3" contain src="../assets/yg1.png"></v-img>
                      <v-card-text>No money out of pocket</v-card-text>
                    </v-card>
                    <v-card flat class="ma-2" width="130">
                      <v-img aspect-ratio="3" contain src="../assets/yg2.png"></v-img>
                      <v-card-text>No Payments For Up To A Year Or More</v-card-text>
                    </v-card>
                    <v-card flat class="ma-2" width="130">
                      <v-img aspect-ratio="3" contain src="../assets/yg3.png"></v-img>
                      <v-card-text>Approval Based Primarily on Home Equity</v-card-text>
                    </v-card>
                    <v-card flat class="ma-2" width="130">
                      <v-img aspect-ratio="3" contain src="../assets/yg4.png"></v-img>
                      <v-card-text>No Minimum Credit Score Required</v-card-text>
                    </v-card>
                    <v-card flat class="ma-2" width="130">
                      <v-img aspect-ratio="3" contain src="../assets/yg5.png"></v-img>
                      <v-card-text>Get Prequalified In Minutes</v-card-text>
                    </v-card>
                  </v-layout>

                  <v-card flat wrap color="transparent" class="ma-0 mb-4">
                    <v-card-title
                      class="display-1 font-weight-black pa-2 text-center fix"
                    >Ygrene simplifies the home improvement financing process.</v-card-title>
                  </v-card>
  <v-card flat>
                  <iframe
                    class
                    id="vimeo-184027168"
                    width="100%"
                   
                    src="//player.vimeo.com/video/184027168?width=640&amp;height=360&amp;color=00adef&amp;portrait=1&amp;title=1&amp;byline=1&amp;autoplay=0&amp;loop=0&amp;player_id=vimeo-184027168"
                    allowfullscreen
                  ></iframe>
  </v-card>
                </v-card>

                <v-divider></v-divider>
                <!----------------------- Permitting Information Section ------------------------------->

                <v-card flat>
                  <v-card flat class="mt-1">
                    <v-card-title
                      class="display-1 font-weight-black black--text text-center justify-center fix"
                    >Permitting Information</v-card-title>
                    <v-card-text
                      class="black--text text-center justify-center"
                    >Linked here are specific documents necessary for home owners to apply for the shutters permit</v-card-text>
                  </v-card>
                  <v-layout align-center justify-center row>
                    <v-btn
                      href="https://www.floridabuilding.org/upload/PR_Instl_Docs/FL17552_R1_II_AD15-11%2002.27.15%20SS.pdf"
                      min-width="20em"
                      class="ma-3"
                    >Building Code approval</v-btn>
                    <v-btn
                      href="https://www.floridabuilding.org/pr/pr_app_dtl.aspx?param=wGEVXQwtDqvYdq2pQ%2FXXJtTn%2F81FqV7RBEg%2FoHRt6n7BrXMJiv6hFA%3D%3D"
                      min-width="20em"
                      class="ma-3"
                    >Product certification</v-btn>
                  </v-layout>
                </v-card>
              </v-flex>
              <!------------------------ Start Side Panel  ------------------------------------------------------------->
              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-card
                  flat
                  color="red "
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  <v-card-title class="justify-center title white--text">GET A FREE QUOTE TODAY!</v-card-title>
                </v-card>
                <router-link to="/free quote">
                  <v-card class="px-3 py-4" flat>
                    <v-img width="100%" src="../assets/accordion-shutter-pricing.jpg"></v-img>
                  </v-card>
                </router-link>
                <router-link to="/free quote">
                  <v-card class="px-3 py-4" flat>
                    <v-img width="100%" src="../assets/storm-panel-shutter-pricing.jpg"></v-img>
                  </v-card>
                </router-link>
                <router-link to="/free quote">
                  <v-card class="px-3 py-4" flat>
                    <v-img width="100%" src="../assets/rolldown-shutter-pricing.jpg"></v-img>
                  </v-card>
                </router-link>
                <router-link to="/free quote">
                  <v-card class="px-3 py-4" flat>
                    <v-img width="100%" src="../assets/impact_garage.jpg"></v-img>
                  </v-card>
                </router-link>
                <v-card
                  flat
                  color="red"
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  
                </v-card>
                
                <v-card
                  flat
                  color="red"
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  <v-card-title class="justify-center title white--text">QUESTIONS? CONTACT US!</v-card-title>
                </v-card>
                <QAform></QAform>
                <v-card
                  flat
                  color="red"
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  <v-card-title class="justify-center title white--text mt-3">Description</v-card-title>
                </v-card>
                <v-card flat color="transparent">
                  <v-card flat color="transparent" class="ma-0">
                    <v-img min-width="10em" class="ma-4" src="../assets/genesis.png"></v-img>
                  </v-card>

                  <v-card
                    flat
                    color="transparent"
                    class="mt-4 ma-3 body-1 font-weight-light text-justify"
                  >
                    <p>
                      Genesis Accordion Hurricane shutters are the shutters that we source and they
                      can withstand wind load pressure of +150/-200.
                      Also, they have been designed to be used in high rises, going up to the 50th floor,
                      making them a great manufacturing option due to their versatility.
                    </p>
                    <p>
                      Three centermate options available, (Centermate, Unibox, Unimate). Our centermates
                      are made of one single piece, not requiring
                      a male and female. The unimate option allows for the use of locking pins and push lock.
                    </p>
                    <p>
                      Compact stacking is a great feature of the Genesis Shutter. The unimate centermate makes
                      it possible for the shutter stack to take up less space. This feature gives the shutters,
                      when opened, a more elegant and discreet look.
                    </p>
                    <p>
                      Genesis has a blade coverage of 7 inches, where most shutters have coverage of 6 to 6.5
                      inches. This allows for less shutter blades to cover the same area. Keep in mind that
                      shutter strength is not diminished due to this feature.
                    </p>
                  </v-card>
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
import QAform from "./QAform";

export default {
  name: "Products",

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