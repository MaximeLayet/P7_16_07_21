<template>
	<div>
		<form>
			<div>
				<label for="email">Adresse email </label>
				<input type="email" id="youremail" v-model="email" placeholder="name@example.com" />
			</div>
			<div class="form-group">
				<label for="password">Mot de passe</label>
				<input
					type="password"
					v-model="password"
					id="exampleInputPassword1"
					placeholder="Mot de passe"
				/>
			</div>
			<button @click="login" type="submit" class="connect">
				Go!
			</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "Formconnect",
	data() {
		return {
			token: ""
		};
	},

	methods: {
		login(e) {
			e.preventDefault();
			axios
				.post(
					"http://localhost:5000/api/user/login",
					{
						email: this.email,
						password: this.password
					},
					{
						header: {
							"Content-Type": "application/json"
						}
					}
				)
				.then(res => {
					{
						localStorage.setItem("token", res.data.token);
					}
					this.$router.push("/home");
				})
				.catch(() => {
					alert("Votre email ou votre mot de passe est incorrect");
				});
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
	width: 30vh;
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
