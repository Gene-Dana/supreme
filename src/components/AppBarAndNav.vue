<template>
	<div>
		<v-app-bar app absolute color="red" class="px-3 ma-0">
			<v-container fluid fill-height class="pa-0">
				<v-card flat tile class="transparent">
					<v-icon class="text-no-wrap">phone</v-icon>
				</v-card>

				<v-card flat class="transparent">
					<v-card-text class="pa-2">305-902-9982</v-card-text>
				</v-card>

				<v-spacer />

				<v-card flat tile class="transparent">
					<v-icon>email</v-icon>
				</v-card>

				<v-card flat class="transparent pa-0">
					<v-card-text class="pa-2">someone@supreme.com</v-card-text>
				</v-card>
			</v-container>
		</v-app-bar>

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
			</v-container>
	</div>
</template>

<script>
export default {
	name: "AppBarAndNav"
};
</script>