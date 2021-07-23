<template>
	<div>
		<form>
			<label>Votre prénom</label>
			<input id="firstName" name="firstName" placeholder="Mon prénom" />
			<label>Votre Nom</label>
			<input id="lastName" name="lastName" placeholder="Mon nom de famille" />
			<label id="email" for="email">Votre e-mail</label>
			<input
				type="email"
				v-model="email"
				name="email"
				placeholder="monmail@groupomania.fr"
				required
			/>
			<label for="password">Votre mot de passe</label>
			<input id="password" type="password" v-model="password" name="password" required />
			<router-link to="/home">
				<div>{{ errorMessage }}</div>
				<input
					class="connect"
					type="submit"
					value="valider l'inscription!"
					@click="createAccount()"
				/>
			</router-link>
		</form>
	</div>
</template>

<script>
export default {
	name: "Formsignup",
	data() {
		return {
			errorMessage: undefined
		};
	},
	methods: {
		createAccount() {
			const firstName = document.getElementById("firstName").value;
			const lastName = document.getElementById("lastName").value;
			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;

			let account = JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password
			});

			if (
				account.firstName == "" ||
				account.lastName == "" ||
				account.email ||
				account.password
			) {
				account = {
					accountVerification: false
				};
			}

			fetch("http://localhost:5000/api/signup", {
				method: "POST",
				headers: {
					contentType: "application/json"
				},
				body: JSON.stringify(account)
			}).then(res => {
				if (res.status == 200) {
					window.location.href = "http://localhost:8080/#/";
				} else {
					res.json().then(data => {
						this.errorMessage = data.message;
					});
				}
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
	width: 20vh;
	align-self: center;
	margin: 1em;
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
