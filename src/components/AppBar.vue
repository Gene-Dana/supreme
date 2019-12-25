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
</div>
</template>

<script>
export default {
  name: 'AppBar',
}