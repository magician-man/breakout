/*
 * @Author: your name
 * @Date: 2020-04-18 15:00:37
 * @LastEditTime: 2020-04-28 16:30:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted\src\services\team.service.ts
 */
import { action } from 'mobx';
import HttpClient from '../utils/HttpClient';
import { BACKEND_URL, messageFail } from './common';
import { Pagination, initalPaginationValue } from '@/interfaces/common';
import { TeamModel, TeamSearchProps } from '@/interfaces/team';

import { TeamStore } from '@/stores/team.store';
export class TeamService {
  public store: TeamStore;
  private http: HttpClient;

  public constructor() {
    this.http = new HttpClient();
    this.store = new TeamStore();
  }

  @action
  public async fetchPageData(searchProps: string): Promise<boolean> {
    this.store.loading = true;
    //this.store.pageData = initalPaginationValue;
    this.store.pageData = [];
    try {
      const result = await this.http.get(`${BACKEND_URL}/team/listByName?teamName=${searchProps}`);
      this.store.loading = false;
      if (result.success) {
        this.store.pageData = result.data;
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      this.store.loading = false;
      messageFail();
      return false;
    }
  }
}
