/*
 * @Author: 李桢煜
 * @Date: 2020-04-18 15:26:49
 * @LastEditTime: 2020-04-28 16:26:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted\src\stores\team.store.ts
 */
import { observable } from 'mobx';
import { TeamModel } from '@/interfaces/team';
import { Pagination, initalPaginationValue } from '@/interfaces/common';

export class TeamStore {
  // 正在获取数据状态
  @observable
  public loading: boolean;

  // 队伍列表数据
  @observable
  public pageData: TeamModel[];
}
