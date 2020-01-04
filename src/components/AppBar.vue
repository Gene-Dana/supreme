<template>
	<div>
		<v-app-bar app absolute color="red" class="px-3 ma-0">
			<v-container fluid fill-height class="pa-0">
				<a href="tel:9549473700" style="text-decoration: none;">
					<v-card flat tile class="transparent">
						<v-icon class="text-no-wrap">phone</v-icon>
					</v-card>
				</a>
				<a href="tel:9549473700">
					<v-card flat class="transparent">
						<v-card-text class="pa-2">(954) 947-3700</v-card-text>
					</v-card>
				</a>

				<v-spacer />

				<v-card flat class="transparent pa-0">
					<v-card-text class="pa-2">Dade - Broward - Palm Beach</v-card-text>
				</v-card>
			</v-container>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	name: "AppBar"
};
