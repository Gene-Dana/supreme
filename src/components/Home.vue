<template>
  <v-container min-width="100%" max-width="100%" class="pa-0" fluid>
    <v-layout>
      <v-carousel lazy height="28em" cycle>
        <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
      </v-carousel>
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
                    class="display-2 font-weight-black pa-2 text-center justify-center fix"
                  >Supreme Hurricane Shutters</v-card-title>
                </v-card>

                <v-card flat color="transparent" class="ma-0">
                  <v-card-title
                    class="headline font-weight-black pa-2 justify-center text-center fix"
                  >Affordable. Reliable. Hurricane Protection.</v-card-title>
                </v-card>

                <v-card
                  flat
                  color="transparent"
                  class="mt-4 ma-3 body-1 font-weight-medium text-justify"
                >
                  <p>
                    Supreme Hurricane Shutters specializes in manufacturing, installation and maintenance
                    of hurricane shutters all throughout the
                    <span
                      class="font-weight-black red--text"
                    >
                      South Florida region, including Miami-Dade, Broward,
                      and Palm Beach Counties.
                    </span> We are licensed and insured and we you welcomed to vist our shop at 3610 NW 118 Ave #3, Coral Springs.
                  </p>

                  <p>
                    In short, we are your one stop shop for
                    high quality hurricane shutters. We provide accordion shutters, storm panel shutters and affordable rolldown
                    shutters that are all approved through the strictest Florida and Miami-Dade building code. We made it a passion to not
                    sell anything under Florida building code standards.
                  </p>

                  <v-card flat class="pa-5">
                    <VideoPlayer></VideoPlayer>
                  </v-card>
                  <p>
                    From the do-it-yourselfer to the experienced custom builder, we will work with you to design the best combination of
                    defense for your home or business. We are able to accommodate any size order, large or small, commercial or residential.
                    Our Experts will guide you through the Hurricane Protection Process and answer any questions you may have. Give us a call or
                    get a free online estimate today!
                  </p>
                </v-card>
              </v-flex>
              <!--------------------------- Begin Side Panel  --------------------------------->
              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-card
                  flat
                  color="red"
                  max-width="40em"
                  max-height="15em"
                  class="mx-auto px-3 text-center"
                >
                  <v-card-title class="justify-center title white--text fix">GET A FREE QUOTE TODAY!</v-card-title>
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
                  <v-card-title class="justify-center title white--text fix">QUESTIONS? CONTACT US</v-card-title>
                </v-card>

                <QAform></QAform>
              </v-flex>
              <v-flex xs12 sm12 md12 lg12 xl2>
                <!------------------------------- Begin Our Products section ------------------------------------------->
                <v-divider class="mt-4"></v-divider>
                <v-layout justify-center align-center>
                  <v-card flat class="mt-1">
                    <v-card-text class="display-1 font-weight-black black--text">Our Products</v-card-text>
                  </v-card>
                </v-layout>
                <v-layout justify-center align-center row class="ma-4 mb-4">
                  <v-card class="ma-2" max-width="300">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="../assets/accordion4.jpg"
                    >
                      <v-card-title>Accordion Shutters</v-card-title>
                    </v-img>

                    <v-card-actions>
                      <v-btn to="/accordion" text color="deep-purple accent-4">Learn More</v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card class="ma-2" max-width="300">
                    <v-img
                      class="black--text align-end"
                      height="200px"
                      src="../assets/steelPanel.jpg"
                    >
                      <v-card-title>Panel Shutters</v-card-title>
                    </v-img>

                    <v-card-actions>
                      <v-btn to="/panels" text color="deep-purple accent-4">Learn More</v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card class="ma-2" max-width="300">
                    <v-img class="white--text align-end" height="200px" src="../assets/rolling.jpg">
                      <v-card-title>Rolling Shutters</v-card-title>
                    </v-img>

                    <v-card-actions>
                      <v-btn to="/rolldown" text color="deep-purple accent-4">Learn More</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-layout>
                <v-divider></v-divider>

                <!--------------------- Begin Guarantee Section --------------------------------->
                <v-card class="my-4">
                  <v-card-title class="red">
                    <v-icon large class="ma-0 white--text">mdi-check-decagram</v-icon>
                    <span class="title white--text font-weight-light ml-2">Price Match Guarantee</span>
                  </v-card-title>

                  <v-card-text class="pa-2">
                    We check thousands of competitor prices every day to make sure
                    that you pay less for your shutters. You won't find a shutter
                    cheaper. But if you do, we'll refund you the difference. Thats
                    our Price Match Guarantee and it's just one of the ways we help
                    deliver the best products!
                  </v-card-text>

                  <v-card-text
                    class="pa-2 display-1 red--text font-weight-black"
                  >With our Price Match Guarantee, you can:</v-card-text>
                  <v-card-text>
                    <ul>
                      <li>Be confident you always have the lowest price</li>
                      <li>Save time searching for cheaper hurricane shutters</li>
                      <li>Get the lowest prices on different types and colors</li>
                    </ul>
                  </v-card-text>
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
import VideoPlayer from "./VideoPlayer";
const slide1 = require("../assets/accordion_banner.jpg");
const slide4 = require("../assets/roll.jpg");

const slide8 = require("../assets/accord1.jpg");
const slide9 = require("../assets/accord2.jpg");
const slide10 = require("../assets/accord3.jpg");
const slide11 = require("../assets/accord4.jpg");

import QAform from "./QAform";

export default {
  name: "Home",
  components: {
    VideoPlayer,
    QAform,
  },
  methods: {},
  computed: {},
  data() {
    return {
      items: [
        {
          src: slide1,
        },

        {
          src: slide4,
        },

        {
          src: slide8,
        },
        {
          src: slide9,
        },

        {
          src: slide10,
        },
        {
          src: slide11,
        },
      ],
    };
  },
};
</script>

<style scoped>
.fix {
  word-break: normal;
}
</style>