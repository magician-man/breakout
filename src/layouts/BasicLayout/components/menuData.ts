/*
 * @文件描述: 临时菜单数据，后续由后端生成
 * @公司: thundersdata
 * @作者: 李洪文
 * @Date: 2019-05-31 10:39:43
 * @LastEditTime: 2020-04-27 21:28:37
 * @LastEditors: Please set LastEditors
 */

// 后续删掉
const userResourceList = [
  {
    resourceKey: 'homepage',
    apiUrl: '/homepage',
    icon: 'icon-homepage',
    description: '首页',
    children: [],
    privilegeList: [],
  },
  {
    resourceKey: 'base',
    apiUrl: '',
    icon: 'icon-base',
    description: '运动员管理',
    children: [
      {
        resourceKey: 'department',
        apiUrl: '/base/athlete',
        description: '首界面',
      },
      
   /*   {
        resourceKey: 'team',
        apiUrl: '/base/team',
        description: '队伍管理',
      },
      {
        resourceKey: 'team2',
        apiUrl: '/base/team2',
        description: '教师管理',
      },
      {
        resourceKey: 'lab',
        apiUrl: '/base/lab',
        description: '实验室管理',
      },
      {
        resourceKey: 'course',
        apiUrl: '/base/course',
        description: '课程管理',
      },
      {
        resourceKey: 'task',
        apiUrl: '/base/task',
        description: '实验任务管理',
      },*/
    ],
  },
  /*{
    resourceKey: 'spider',
    apiUrl: '',
    icon: 'icon-ruku',
    description: '数据采集',

    children: [
      {
        resourceKey: 'spiderLogList',
        apiUrl: '/spider/log',
        description: '采集历史',
      },
      {
        resourceKey: 'spiderTask',
        apiUrl: '/spider/task',
        description: '采集状态',
      },
      {
        resourceKey: 'itemList',
        apiUrl: '/spider/itemList',
        description: '拍品信息',
      },
    ],
    privilegeList: [],
  },
  /*
  {
    resourceKey: 'profile',
    apiUrl: '/profile',
    icon: '',
    description: '个人中心',
    privilegeList: [],
  },
*/
];

export const getUserResourceList = () => {
  return userResourceList;
};
