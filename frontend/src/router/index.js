import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import Profil from "../views/Profil.vue";
import Login from "../views/Login.vue";
import Signup from "../components/Signup";
import Onepost from "../views/Onepost";

const routes = [
	{
		path: "/onePost/:id",
		name: "Onepost",
		component: Onepost
	},
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
	},
	{
		path: "/signup",
		name: "signup",
		component: Signup
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
