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

                <v-card flat wrap color="transparent" class="ma-0">
                  <v-card-title
                    class="display-2 font-weight-black pa-2 text-center fix"
                  >Accordion Shutters</v-card-title>
                </v-card>

                <v-card flat color="transparent" class="my-0 mx-3">
                  <v-img height="15em" src="../assets/accordion-product.jpg"></v-img>
                </v-card>

                <v-card
                  flat
                  color="transparent"
                  class="mt-4 ma-3 body-1 font-weight-medium text-justify"
                >
                  <p>
                    Accordion Shutters are one of the most popular choice of storm protection for homeowners and businesses
                    throughout South Florida and surrounding areas. Accordion shutters provide simple but highly effective
                    means of storm protection. The accordion shutter provides protection against category 5 winds, flying
                    debris, theft and forced entry, reduces noise, and provides everyday privacy when in use.
                  </p>
                  <v-card flat wrap color="transparent" class="ma-0">
                    <v-card-title
                      class="display-1 font-weight-black pa-2 text-center fix"
                    >Accordion Shutters Design</v-card-title>
                  </v-card>
                  <p>
                    The accordion shutter is a durable shutter that moves horizontally between an upper and lower track, with
                    interlocking aluminum blades making up the shutter’s protective wall. Covering large spans, these shutters
                    can be folded away for an unobstructed view. Also for larger areas, there can be a center opening,
                    allowing half of the shutter to move towards the left. From the inside or out, these shutters can be
                    closed, locked, and secured, keeping your home safe. We have gone to great lengths to ensure that
                    our accordion style shutters can match with many different types of homes.
                  </p>
                </v-card>

    
                <v-card flat color="transparent" class="ma-3">
                  <v-img min-width="100%" src="../assets/accord1.jpg"></v-img>
                </v-card>
                <v-card flat color="transparent" class="ma-3">
                  <v-img min-width="100%" src="../assets/accord2.jpg"></v-img>
                </v-card>
                <v-card flat color="transparent" class="ma-3">
                  <v-img min-width="100%" src="../assets/accord3.jpg"></v-img>
                </v-card>
                <v-card flat color="transparent" class="ma-3">
                  <v-img min-width="100%" src="../assets/accord4.jpg"></v-img>
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
                  <v-card-title class="justify-center title white--text fix">100% FINANCING AVAILABLE</v-card-title>
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
                <v-card
                  flat
                  color="red"
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  <v-card-title class="justify-center title white--text mt-3 fix">Description</v-card-title>
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