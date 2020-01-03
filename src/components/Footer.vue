<template>
	<v-footer color="red darken-2" padless>
		<v-row justify="center" no-gutters>
			<v-btn to="/home" color="white" text rounded class="my-2">Home</v-btn>
			<v-btn to="/About Us" color="white" text rounded class="my-2">About Us</v-btn>
			<v-btn to="/Free Quote" color="white" text rounded class="my-2">Free Quote</v-btn>
			<v-col class="red darken-2 py-4 text-center white--text" cols="12">
				{{ new Date().getFullYear() }} —
				<strong>Supreme Hurricane Shutters</strong>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script>
export default {
	data: () => ({
		links: ["Home", "About Us", "Products", "Free Quote"]
	})
};
</script>