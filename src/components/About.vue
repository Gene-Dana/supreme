<template>
	<v-container min-width="100%" max-width="100%" class="pa-0">
		<v-layout row align-center>
			<v-flex xs12 sm4 m4 lg4>
				<v-card flat color="transparent">
					<v-img
						alt="Vuetify Logo"
						class="shrink mr-2"
						contain
						src="../assets/logo.png"
						transition="scale-transition"
					/>
				</v-card>
			</v-flex>
			<v-spacer />
			<v-flex xs12 sm4 m4 lg4 align-center>
				<v-card flat color="transparent">
					<v-card-text class="headline text-center">CALL NOW (305) 902-9982</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
		<v-container class="pa-0" min-width="100%">
			<v-layout align-center>
				<v-flex>
					<v-toolbar style="background: rgb(255, 79, 79);" width="100%">
						<v-container fill-height fluid>
							<v-card flat class="transparent">
								<v-btn text>Link 1</v-btn>
							</v-card>
							<v-spacer></v-spacer>
							<v-card flat class="transparent">
								<v-btn text>Link 2</v-btn>
							</v-card>
							<v-spacer></v-spacer>
							<v-card flat class="transparent">
								<v-btn text>Link 3</v-btn>
							</v-card>
							<v-spacer></v-spacer>
							<v-card flat class="transparent">
								<v-btn text>Link 4</v-btn>
							</v-card>
							<v-spacer></v-spacer>
							<v-card flat class="transparent">
								<v-btn text>Link 5</v-btn>
							</v-card>
						</v-container>
					</v-toolbar>
				</v-flex>
			</v-layout>
		</v-container>

		<v-carousel height="20em">
			<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
		</v-carousel>
	</v-container>
</template>
<script>
export default {
	name: "About",
	data: () => ({
		items: [
			{
				src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
			},
			{
				src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
			},
			{
				src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
			},
			{
				src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
			}
		]
	})
};
</script>