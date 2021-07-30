<template>
	<div>
		<div>
			<h1>Exprimez-vous!</h1>
		</div>
		<form @submit.prevent="onSubmit">
			<div class="new-post">
				<label>Titre</label>
				<input
					class="title"
					type="text"
					v-model="title"
					name="title"
					placeholder="Ajouter un titre"
					required
				/>
			</div>
			<div class="new-post">
				<label>Votre post</label>
				<textarea v-model="text" name="text" placeholder="Votre article ici..." required />
			</div>

			<button class="submit" type="submit">Publier</button>
		</form>
	</div>
</template>

<script>
//import axios from "axios";

export default {
	name: "Newpost",
	props: ["publication", "onSubmits"],
	data() {
		return {
			title: "",
			text: "",
			userId: ""
		};
	},
	methods: {
		onSubmit() {
			console.log("cccc");
			fetch("http://localhost:5000/api/publication/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: console.log(`Bearer ${localStorage.getItem("token")}`)
				},
				body: JSON.stringify({ userId: this.userId, title: this.title, text: this.text })
			})
				.then(response => response.json())
				.catch(error => alert(error));
		}
		// onSubmit(e) {
		// 	e.preventDefault();
		// 	const token = localStorage.getItem("token");
		// 	const firstName = localStorage.getItem("firstName");
		// 	const lastName = localStorage.getItem("lastName");
		// 	const userId = localStorage.getItem("userId");

		// 	const formData = new FormData();
		// 	formData.set("title", this.title);
		// 	formData.set("text", this.text);
		// 	formData.set("firstName", firstName);
		// 	formData.set("lastName", lastName);
		// 	formData.set("userId", userId);

		// 	axios
		// 		.post("http://localhost:5000/api/publication/", formData, {
		// 			headers: {
		// 				"Content-type": "application/json",
		// 				Authorization: `Bearer ${token}`
		// 			}
		// 		})
		// 		.then(response => {
		// 			if (response) {
		// 				alert("Ta publication a été crée!");
		// 				this.$router.push("/home");
		// 			}
		// 		})
		// 		.catch(error => {
		// 			if (error) {
		// 				alert("Ca n'a pas fonctionné..Cheh t'es trop nul!!");
		// 				console.log(error);
		// 			}
		// 		});
		// }
	}
};
</script>

<style scoped>
label {
	text-transform: uppercase;
	margin: 0.5em;
	font-weight: bold;
}

input {
	border-radius: 0 0 0 7px;
	margin-bottom: 1em;
}
input.title {
	width: 30vh;
	align-self: center;
}

textarea {
	align-self: center;
	width: 70vh;
	height: 30vh;
}

input.submit {
	font-size: 1.5em;
	background: transparent;
	margin: 1em;
	color: #4e77a6;
	border: 3px solid #4e77a6;
	cursor: pointer;
}

div {
	display: flex;
	flex-direction: column;
}
</style>
