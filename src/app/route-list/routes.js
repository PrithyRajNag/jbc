import { lazy } from 'react';

export const routes = [
  {
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('../pages/Dashboard')),
  },
  {
    path: '/document-management',
    exact: true,
    component: lazy(() => import('../pages/Documents')),
  },
  {
    path: '/document-management/add',
    exact: true,
    component: lazy(() => import('../pages/AddDocument')),
  },
  {
    path: '/document-management/edit',
    exact: true,
    component: lazy(() => import('../pages/EditDocument')),
  },
  {
    path: '/users',
    exact: true,
    component: lazy(() => import('../pages/Users')),
  },
  {
    path: '/users/add',
    exact: true,
    component: lazy(() => import('../pages/AddUser')),
  },
  {
    path: '/users/edit',
    exact: true,
    component: lazy(() => import('../pages/EditUser')),
  },
  {
    path: '/users/roles',
    exact: true,
    component: lazy(() => import('../pages/Roles')),
  },
  {
    path: '/users/permissions',
    exact: true,
    component: lazy(() => import('../pages/Permissions')),
  },
  {
    path: '/users/permissions/add',
    exact: true,
    component: lazy(() => import('../pages/AddPermissions')),
  },
  {
    path: '/users/roles/add',
    exact: true,
    component: lazy(() => import('../pages/AddRoles')),
  },

  {
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/Login')),
  },
  {
    path: '/registration',
    exact: true,
    component: lazy(() => import('../pages/Register')),
  },
  {
    path: '/shelf',
    exact: true,
    component: lazy(() => import('../pages/Shelfs')),
  },
  {
    path: '/shelf/add',
    exact: true,
    component: lazy(() => import('../pages/AddShelf')),
  },
  {
    path: '/racks',
    exact: true,
    component: lazy(() => import('../pages/Racks')),
  },
  {
    path: '/racks/add',
    exact: true,
    component: lazy(() => import('../pages/AddRacks')),
  },
  {
    path: '/service',
    exact: true,
    component: lazy(() => import('../pages/Service')),
  },
  {
    path: '/service/add',
    exact: true,
    component: lazy(() => import('../pages/AddService')),
  },
  {
    path: '/regions',
    exact: true,
    component: lazy(() => import('../pages/Regions')),
  },
  {
    path: '/regions/add',
    exact: true,
    component: lazy(() => import('../pages/AddRegion')),
  },
  {
    path: '/settings/general',
    exact: true,
    component: lazy(() => import('../pages/SettingsGeneral')),
  },
];
