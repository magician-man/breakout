/*
 * @Author: 李桢煜
 * @Date: 2020-04-17 18:14:43
 * @LastEditTime: 2020-04-27 10:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted_11d:\kfcxsj\labs-fronted\src\stores\athlete.store.ts
 */
import { observable } from 'mobx';
import { AthleteModel } from '@/interfaces/athlete';

import { Pagination, initalPaginationValue } from '@/interfaces/common';

export class AthleteStore {
  // 正在获取数据状态
  @observable
  public loading: boolean;
  @observable
  public selectList:any ;
  // 部门分页列表数据
  @observable
  public pageData: Pagination<AthleteModel> = initalPaginationValue;
  @observable
  public detailData: AthleteModel;
}
