
const routes = [
  {
    path: '/main',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'addUser', component: () => import('pages/user/add.vue') },
      { path: 'listUser', component: () => import('pages/user/list.vue') },
      { path: 'editUser/:idUser?', component: () => import('pages/user/edit.vue'), name: 'editUser' },
      { path: 'addSolicitation', component: () => import('pages/solicitation/add.vue') },
      { path: 'editSolicitation', component: () => import('pages/solicitation/edit.vue') },
      { path: 'editSolicitation1', component: () => import('pages/solicitation/edit1.vue') },
      { path: 'listSolicitation', component: () => import('pages/solicitation/list.vue') },
      { path: 'addDefect', component: () => import('pages/defect/add.vue') },
      { path: 'editDefect', component: () => import('pages/defect/edit.vue') },
      { path: 'listDefect', component: () => import('pages/defect/list.vue') }
    ]
  },
  {
    path: '/main2',
    component: () => import('layouts/MyLayout1.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'addUser', component: () => import('pages/user/add.vue') },
      { path: 'listUser', component: () => import('pages/user/list.vue') },
      { path: 'editUser/:idUser?', component: () => import('pages/user/edit.vue'), name: 'editUser' },
      { path: 'addSolicitation', component: () => import('pages/solicitation/add.vue') },
      { path: 'editSolicitation', component: () => import('pages/solicitation/edit.vue') },
      { path: 'editSolicitation1', component: () => import('pages/solicitation/edit1.vue') },
      { path: 'listSolicitation', component: () => import('pages/solicitation/list.vue') },
      { path: 'addDefect', component: () => import('pages/defect/add.vue') },
      { path: 'editDefect', component: () => import('pages/defect/edit.vue') },
      { path: 'listDefect', component: () => import('pages/defect/list.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('pages/login')
  },
  {
    path: '/addLogin',
    component: () => import('pages/user/addLogin')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
