import {createRouter, createWebHashHistory,} from "vue-router";
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import Search from "../pages/Search.vue";
import UserPage from "../pages/UserPage.vue";
import UserEdit from "../pages/UserEdit.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLogin from "../pages/UserLogin.vue";


const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: UserPage },
    { path: '/search', component: Search},
    { path: '/user/edit', component: UserEdit},
    { path: '/user/list', component: SearchResultPage},
    { path: '/user/login', component: UserLogin},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
