import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import Profil from "../views/Profil.vue";
import Login from "../views/Login.vue";

const routes = [
	{
		path: "/home",
		name: "Home",
		component: Home
	},
	{
		path: "/",
		name: "Welcome",
		component: Welcome
	},
	{
		path: "/profil",
		name: "Profil",
		component: Profil
	},
	{
		path: "/login",
		name: "Login",
		component: Login
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
