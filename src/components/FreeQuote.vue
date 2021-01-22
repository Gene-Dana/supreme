<template>
  <v-container min-width="100%" max-width="100%" class="pa-0 ma-0" fluid>
    <v-layout>
      <v-img height="7em" src="../assets/scary.jpg"></v-img>
    </v-layout>
    <v-layout column>
      <v-flex>
        <v-card class="pa-3 ma-0" color="grey lighten-3" id="dashboard">
          <v-card class="pa-3 ma-0">
            <v-layout wrap>
              <v-flex xs12 sm8 md8 lg8 xl8>
                <v-card flat color="transparent" class="ma-0">
                  <p class="text-center display-1 font-weight-black">Free Quote</p>
                  <v-subheader>Steps to get a free quote</v-subheader>
                  <v-list flat subheader three-line>
                    <v-list-item-group multiple active-class>
                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Measure</v-list-item-title>
                            <v-list-item-subtitle>
                              Follow directions from
                              <a to="/how to measure">'How To Measure'</a>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Fill Out Form</v-list-item-title>
                            <v-list-item-subtitle>Record required measurements and data in the form below</v-list-item-subtitle>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Send</v-list-item-title>
                            <v-list-item-subtitle>A quote will be generated and sent back to you within 48hrs</v-list-item-subtitle>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>

                <!------------------------=--- Shutter Form ------------------------------------------------->

                <QuoteForm></QuoteForm>
              </v-flex>
              <!---------------------------- Side Panel ------------------------------------------------->

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
import QuoteForm from "./QuoteForm";

export default {
  name: "FreeQuote",
  components: { QAform, QuoteForm },
};
</script>

<style scoped>
.fix {
  word-break: normal;
}
</style>