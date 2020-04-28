/*
 * @文件描述: 
 * @Author: 李洪文
 * @公司: 山东大学
 * @Date: 2020-01-06 10:10:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-27 21:28:20
 */
export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './login' },
    ],
  },
  {
    path: '/base',
    component: '../layouts/BasicLayout',
    Routes: ['src/components/Authorized'], // 所有的子路径都会被这个拦截
    routes: [
     
      { path: '/base/athlete', component: './base/athlete' },
      { path: '/base/lab', component: './base/lab' },
      { path: '/base/task', component: './base/task' },
    ],
  },
  {
    path: '/reservation',
    component: '../layouts/BasicLayout',
    Routes: ['src/components/Authorized'], // 所有的子路径都会被这个拦截
    routes: [{ path: '/reservation/log', component: './reservation/reservationList' }],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/components/Authorized'], // 所有的子路径都会被这个拦截
    routes: [
      { path: '/', redirect: '/homepage' },
      { path: '/homepage', component: './homepage' },
    ],
  },
  {
    component: '404',
  },
];
