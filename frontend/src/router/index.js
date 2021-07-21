import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";

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
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
