/*
 * @文件描述: 
 * @Author: 李洪文
 * @公司: 山东大学
 * @Date: 2020-01-06 10:10:30
 * @LastEditors: 师佳佳
 * @LastEditTime: 2020-04-11 09:18:08
 */
import routeConfig from './route.config';
import theme from './theme';

export default {
  routes: routeConfig,
  targets: {
    ie: 11,
  },
  history: 'hash',
  outputPath: './build',
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './components/Loading',
        },
        title: '运动员管理',
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true,
        },
        library: 'react',
        dll: true,
        pwa: false,
        hardSource: false,
        fastClick: true,
      },
    ],
  ],
  sass: {},
  // 配置antd的基础样式
  theme,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};
