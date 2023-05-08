import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import CollaboratorsPage from '../pages/collaborators.vue';
import CollaboratorPage from '../pages/collaborator.vue';
import EquipmentsPage from '../pages/equipments.vue';
import EquipmentPage from '../pages/equipment.vue';
import PermitsPage from '../pages/permits.vue';
import PermitPage from '../pages/permit.vue';

import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/form/',
        component: FormPage,
    },
    {
        path: '/collaborators/',
        component: CollaboratorsPage,
    },
    {
        path: '/collaborator/:id/',
        component: CollaboratorPage,
    },
    {
        path: '/permits/',
        component: PermitsPage,
    },
    {
        path: '/permit/:id/',
        component: PermitPage,
    },
    {
        path: '/equipments/',
        component: EquipmentsPage,
    },
    {
        path: '/equipment/:id/',
        component: EquipmentPage,
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '/request-and-load/user/:userId/',
        component: RequestAndLoad
        
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];

export default routes;
