<template>
	<div>
		<form>
			<div>
				<div>
					<label for="firstName">prénom</label>
					<input
						data-label="prenom"
						type="text"
						v-model="firstName"
						id="firstName"
						placeholder="Votre prénom"
					/>
				</div>
				<div>
					<label for="lastName">Nom</label>
					<input type="text" id="lastName" v-model="lastName" placeholder="Votre nom" />
				</div>
			</div>
			<div>
				<label for="email">adresse Email </label>
				<input
					type="email"
					class="form-control"
					id="email"
					v-model="email"
					placeholder="email@example.com"
				/>
			</div>
			<div>
				<label for="password">Mot de passe</label>
				<input
					type="password"
					v-model="password"
					id="password"
					placeholder="Mot de passe"
				/>
			</div>
			<div>
				<button @click="signup" type="submit" class="connect">
					S'inscrire
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "Signup",
	data() {
		return {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			isAdmin: false
		};
	},
	methods: {
		signup(e) {
			e.preventDefault();
			{
				axios
					.post(
						"http://localhost:5000/api/user/signup",
						{
							firstName: this.firstName,
							lastName: this.lastName,
							email: this.email,
							password: this.password,
							isAdmin: this.isAdmin
						},
						{
							header: {
								"Content-Type": "application/json"
							}
						}
					)
					.then(() => {
						this.$router.push("/");
						alert("Inscription confirmée");
					})
					.catch(() => {
						alert(
							"Oups...Un des champs n'a pas été correctement rempli ou l'adresse mail est déjà utilisé"
						);
					});
			}
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
	width: 30vh;
}
.connect {
	border-radius: 00.5em;
	padding-block: 0.5em;
	align-self: center;
	background: linear-gradient(#66a7f2, #4e77a6);
	color: #fff;
	border: none;
	cursor: pointer;
}
</style>
