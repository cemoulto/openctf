import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";

Vue.use(Router);

var routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }
];

export default new Router({
    mode: "history",
    routes
});