<template>
	<div>
		<form @connect="Onconnect">
			<label for="email">Votre e-mail</label>
			<input
				type="email"
				v-model="email"
				name="email"
				placeholder="monmail@groupomania.fr"
				required
			/>
			<label for="password">Votre mot de passe</label>
			<input type="password" v-model="password" name="password" required />
			<router-link to="/home">
				<input class="connect" type="submit" value="Go!" />
			</router-link>
		</form>
	</div>
</template>

<script>
export default {
	name: "Formconnect",
	data() {
		return {
			email: "",
			password: ""
		};
	},
	methods: {
		onConnect(e) {
			e.preventDefault();

			const connect = {
				email: this.email,
				password: this.password
			};

			this.$emit("connect", connect);

			this.email = "";
			this.password = "";
		}
	}
};
</script>

<style scoped>
div {
	display: flex;
	flex-direction: column;
}

form {
	display: flex;
	flex-direction: column;
}

input {
	width: 20vh;
	align-self: center;
	margin: 1em;
}

.connect {
	border-radius: 100%;
	width: 3em;
	padding-block: 0.5rem;
	align-self: center;
	background: linear-gradient(#66a7f2, #4e77a6);
	color: #fff;
	border: none;
	cursor: pointer;
}
</style>
