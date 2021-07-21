<template>
	<div>
		<form>
			<label for="email">Votre e-mail</label>
			<input type="email" name="email" placeholder="monmail@groupomania.fr" required />
			<label for="password" name="password" required>Votre mot de passe</label>
			<input type="password" name="password" required />
		</form>
		<button>Go!</button>
	</div>
</template>

<script>
export default {
	name: "Formconnect"
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

button {
	border-radius: 100%;
	width: 3em;
	padding-block: 0.5rem;
	align-self: center;
	background: linear-gradient(#66a7f2, #4e77a6);
	color: #fff;
	border: none;
}
</style>
