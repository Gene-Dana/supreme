<template>
  <v-footer color="red" padless>
    <v-row justify="center" no-gutters>
      <v-btn to="/home" color="white" text rounded class="my-2">Home</v-btn>
      <v-btn to="/how to measure" color="white" text rounded class="my-2">How To Measure</v-btn>
      <v-btn to="/Free Quote" color="white" text rounded class="my-2">Free Quote</v-btn>
      <v-col class="red py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Supreme Hurricane Shutters CC# 20-AL-21960-X </strong>
        
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Free Quote"],
  }),
};
</script>