import Vue from "vue";
import store from "./store";
import Router from "vue-router";
import { i18n } from "./plugins/i18n";
import authenticate from "./auth/authenticate";
import IsConnected from "./auth/IsConnected";

import NProgress from "nprogress";

Vue.use(Router);

// create new router

const routes = [
    {
        path: "/",
        component: () => import("./views/app"),
        // beforeEnter: authenticate,
        redirect: "/app/dashboard",

        children: [
            {
                path: "/app/dashboard",
                name: "dashboard",
                component: () =>
                    import(
                        /* webpackChunkName: "dashboard" */ "./views/app/dashboard/dashboard"
                    ),
            },

            //Episodes
            {
                path: "/app/episodes",
                component: () =>
                    import(
                        /* webpackChunkName: "episodes" */ "./views/app/pages/episodes"
                    ),
                redirect: "app/episodes/list",
                children: [
                    {
                        name: "index_episodes",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_episodes" */ "./views/app/pages/episodes/index_episodes"
                            ),
                    },

                    {
                        name: "storeE_episodes",
                        path: "store/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_episodes" */ "./views/app/pages/episodes/Add_episode"
                            ),
                    },

                    {
                        path: "store",
                        name: "store_episode",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_episode" */ "./views/app/pages/episodes/Add_episode"
                            ),
                    },
                    {
                        path: "edit/:id",
                        name: "edit_episode",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_episode" */ "./views/app/pages/episodes/Edit_episode"
                            ),
                    },
                    {
                        path: "detail/:id",
                        name: "detail_episode",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_episode" */ "./views/app/pages/episodes/Detail_Episode"
                            ),
                    },
                ],
            },


            

            //ep
            {
                path: "/app/series",
                component: () =>
                    import(
                        /* webpackChunkName: "moseriesvies" */ "./views/app/pages/episodes"
                    ),
                redirect: "app/series/list",
                children: [
                    {
                        path: "detail/:id",
                        name: "detail_series",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_movie" */ "./views/app/pages/episodes/index_episodes_list"
                            ),
                    },
                ],
            },

            //Movies
            {
                path: "/app/movies",
                component: () =>
                    import(
                        /* webpackChunkName: "movies" */ "./views/app/pages/movies"
                    ),
                redirect: "app/movies/list",
                children: [
                    {
                        name: "index_movies",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_movies" */ "./views/app/pages/movies/index_movies"
                            ),
                    },
                    {
                        path: "store",
                        name: "store_movie",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_movie" */ "./views/app/pages/movies/Add_movie"
                            ),
                    },
                    {
                        path: "edit/:id",
                        name: "edit_movie",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_movie" */ "./views/app/pages/movies/Edit_movie"
                            ),
                    },
                    {
                        path: "detail/:id",
                        name: "detail_movie",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_movie" */ "./views/app/pages/movies/Detail_Movie"
                            ),
                    },
                ],
            },

            // People
            {
                path: "/app/People",
                component: () =>
                    import(
                        /* webpackChunkName: "People" */ "./views/app/pages/people"
                    ),
                redirect: "/app/People/Customers",
                children: [
                    // Customers
                    {
                        name: "Customers",
                        path: "Customers",
                        component: () =>
                            import(
                                /* webpackChunkName: "Customers" */ "./views/app/pages/people/customers"
                            ),
                    },

                    // Suppliers
                    {
                        name: "Suppliers",
                        path: "Suppliers",
                        component: () =>
                            import(
                                /* webpackChunkName: "Suppliers" */ "./views/app/pages/people/providers"
                            ),
                    },

                    // Users
                    {
                        name: "user",
                        path: "Users",
                        component: () =>
                            import(
                                /* webpackChunkName: "Users" */ "./views/app/pages/people/users"
                            ),
                    },
                ],
            },

            // Settings
            {
                path: "/app/settings",
                component: () =>
                    import(
                        /* webpackChunkName: "settings" */ "./views/app/pages/settings"
                    ),
                redirect: "/app/settings/System_settings",
                children: [
                    // Permissions
                    {
                        path: "permissions",
                        component: () =>
                            import(
                                /* webpackChunkName: "permissions" */ "./views/app/pages/settings/permissions"
                            ),
                        redirect: "/app/settings/permissions/list",
                        children: [
                            {
                                name: "groupPermission",
                                path: "list",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "groupPermission" */
                                        "./views/app/pages/settings/permissions/Permissions"
                                    ),
                            },
                            {
                                name: "store_permission",
                                path: "store",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "store_permission" */
                                        "./views/app/pages/settings/permissions/Create_permission"
                                    ),
                            },
                            {
                                name: "edit_permission",
                                path: "edit/:id",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "edit_permission" */
                                        "./views/app/pages/settings/permissions/Edit_permission"
                                    ),
                            },
                  


                        ],
                    },


                               // dates
                               {
                                name: "dates",
                                path: "Dates",
                                component: () => import(/* webpackChunkName: "Dates" */"./views/app/pages/settings/dates")
                            }, 


                    // packages
                    {
                        name: "packages",
                        path: "Packages",
                        component: () =>
                            import(
                                /* webpackChunkName: "Packages" */ "./views/app/pages/settings/packages"
                            ),
                    },


                // notifications
                 {
                name: "notifications",
                path: "Notifications",
                component: () =>
                    import(/* webpackChunkName: "Notifications" */"./views/app/pages/settings/notifications")
                  },

                // ads
                {
                    name: "ads",
                    path: "Ads",
                    component: () =>
                        import(/* webpackChunkName: "Ads" */"./views/app/pages/settings/ads")
                },

                    // categories
                    {
                        name: "categories",
                        path: "Categories",
                        component: () =>
                            import(
                                /* webpackChunkName: "Categories" */ "./views/app/pages/settings/categorie"
                            ),
                    },


                // abouts
                {
                name: "abouts",
                path: "Abouts",
                component: () =>
                    import(
                        /* webpackChunkName: "Abouts" */ "./views/app/pages/settings/abouts"
                    ),
                  },

                    // subscriptions
                    {
                        name: "subscriptions",
                        path: "Subscriptions",
                        component: () =>
                            import(
                                /* webpackChunkName: "Subscriptions" */ "./views/app/pages/settings/subscriptions"
                            ),
                    },

                    // serieses
                    {
                        name: "serieses",
                        path: "Serieses",
                        component: () =>
                            import(
                                /* webpackChunkName: "Serieses" */ "./views/app/pages/settings/serieses"
                            ),
                    },

                    // currencies
                    {
                        name: "currencies",
                        path: "Currencies",
                        component: () =>
                            import(
                                /* webpackChunkName: "Currencies" */ "./views/app/pages/settings/currencies"
                            ),
                    },

                    // System Settings
                    {
                        name: "system_settings",
                        path: "System_settings",
                        component: () =>
                            import(
                                /* webpackChunkName: "System_settings" */ "./views/app/pages/settings/system_settings"
                            ),
                    },
                ],
            },

            {
                name: "profile",
                path: "/app/profile",
                component: () =>
                    import(
                        /* webpackChunkName: "profile" */ "./views/app/pages/profile"
                    ),
            },
        ],
    },

    {
        path: "*",
        name: "NotFound",
        component: () =>
            import(
                /* webpackChunkName: "NotFound" */ "./views/app/pages/notFound"
            ),
    },

    {
        path: "not_authorize",
        name: "not_authorize",
        component: () =>
            import(
                /* webpackChunkName: "not_authorize" */ "./views/app/pages/NotAuthorize"
            ),
    },
];

const router = new Router({
    mode: "history",
    linkActiveClass: "open",
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};

router.beforeEach((to, from, next) => {
    // If this isn't an initial page load.
    if (to.path) {
        // Start the route progress bar.
        NProgress.start();
        NProgress.set(0.1);
    }
    next();

    if (
        store.state.language.language &&
        store.state.language.language !== i18n.locale
    ) {
        i18n.locale = store.state.language.language;
        next();
    } else if (!store.state.language.language) {
        store.dispatch("language/setLanguage", navigator.languages).then(() => {
            i18n.locale = store.state.language.language;
            next();
        });
    } else {
        next();
    }
});

router.afterEach(() => {
    // Remove initial loading
    const gullPreLoading = document.getElementById("loading_wrap");
    if (gullPreLoading) {
        gullPreLoading.style.display = "none";
    }
    // Complete the animation of the route progress bar.
    setTimeout(() => NProgress.done(), 500);
    // NProgress.done();

    if (window.innerWidth <= 1200) {
        store.dispatch("changeSidebarProperties");
        if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
            store.dispatch("changeSecondarySidebarProperties");
        }

        if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
            store.dispatch("changeCompactSidebarProperties");
        }
    } else {
        if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
            store.dispatch("changeSecondarySidebarProperties");
        }
    }
});

async function Check_Token(to, from, next) {
    let token = to.params.token;
    const res = await axios
        .get("password/find/" + token)
        .then((response) => response.data);

    if (!res.success) {
        next("/app/sessions/signIn");
    } else {
        return next();
    }
}

export default router;
