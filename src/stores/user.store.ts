/*
 * @文件描述: 
 * @Author: 师佳佳
 * @公司: 山东大学
 * @Date: 2020-04-18 11:28:26
 * @LastEditors: 师佳佳
 * @LastEditTime: 2020-04-19 11:32:47
 */
import { observable } from 'mobx';
import { AthleteModel } from '@/interfaces/athlete';

import { Pagination, initalPaginationValue } from '@/interfaces/common';

export class UserStore {
  // 正在获取数据状态
  @observable
  public loading: boolean; 

  // 部门分页列表数据
  @observable
  public pageData: Pagination<AthleteModel> = initalPaginationValue;

  @observable
  public userList: Pagination<import("../../../../../../Users/Lenovo/Desktop/labs-fronted/src/interfaces/athlete").UserModel>
}
