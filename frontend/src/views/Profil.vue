<template>
	<div>
		<Header />
		<router-link to="/home">
			<button class="back_to">Retour à la page principale</button>
		</router-link>
		<div>
			<p>Prénom:</p>
			<button>Modifier</button>
		</div>
		<div>
			<p>Nom:</p>
			<button>Modifier</button>
		</div>
		<div>
			<p>Email:</p>
			<button>Modifier</button>
		</div>
		<div>
			<button class="delete" @click="deleteAccount">Supprimer mon compte</button>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	name: "Profil",
	components: {
		Header
	},
	methods: {
		deleteAccount(e) {
			e.preventDefault();
			confirm("Êtes-vous sûr de vouloir supprimmer définitivement votre compte?");
		}
	}
};
</script>

<style>
button {
	color: #fff;
	background: #66a7f2;
	border: solid 3px #4e77a6;
	cursor: pointer;
	padding: 0.5em;
	border-radius: 0 0 7px 0;
	margin: 0.5em;
}

.back_to {
	color: #66a7f2;
	background: transparent;
	border: solid 3px #4e77a6;
}

.delete {
	background: #f21905;
	border: solid 3px #000;
	color: #fff;
}
</style>
