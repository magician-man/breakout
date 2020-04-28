/*
 * @Author: 李桢煜our name
 * @Date: 2020-04-17 18:12:43
 * @LastEditTime: 2020-04-28 16:55:38
 * @LastEditors: Please set LastEditors
 * 张泽宇
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted_11d:\kfcxsj\labs-fronted\src\services\athlete.service.ts
 */

import { action } from 'mobx';
import HttpClient from '../utils/HttpClient';
import { BACKEND_URL, messageFail, messageSuccess } from './common';
import { Pagination, initalPaginationValue } from '@/interfaces/common';
import { AthleteModel, AthleteSearchProps, AthleteEditModel } from '@/interfaces/athlete';

import { AthleteStore } from '@/stores/athlete.store';
import { Modal } from 'antd';
export class AthleteService {
  public store: AthleteStore;
  private http: HttpClient;

  public constructor() {
    this.http = new HttpClient();
    this.store = new AthleteStore();
  }

  @action
  public async fetchPageData(searchProps: AthleteSearchProps): Promise<boolean> {
    this.store.loading = true;
    this.store.pageData = initalPaginationValue;
    try {
      const result = await this.http.postJSON<Pagination<AthleteModel>>(
        `${BACKEND_URL}/athlete/list`,
        searchProps,
      );

      this.store.loading = false;
      if (result.success) {
        for (let a of result.data.list) {
          if (a['gender'] === 0) {
            a['gender'] = '男';
          }
          if (a['gender'] === 1) {
            a['gender'] = '女';
          }

          if (a['idType'] === 1) {
            a['idType'] = '身份证';
          }
          if (a['idType'] === 2) {
            a['idType'] = '护照';
          }
          if (a['idType'] === 3) {
            a['idType'] = '军人身份证';
          }
          if (a['idType'] === 4) {
            a['idType'] = '港澳内地通行证';
          }
          if (a['idType'] === 5) {
            a['idType'] = '台湾居民来大陆通行证';
          }
          console.log(a['idType']);
        }
        this.store.pageData = result.data;
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      this.store.loading = false;
      //alert("hello");
      messageFail();
      return false;
    }
  }

  @action
  public async update(data: AthleteEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/athlete/update`, data);
      this.store.loading = false;
      if (result.success) {
        messageSuccess('更新成功！');
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async add(data: AthleteEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/athlete/add`, data);
      this.store.loading = false;
      if (result.success) {
        const modal = Modal.confirm({
          centered: true,
          title: `新增成功，运动员编码为${result.data}`,
          okText: '确定',
          cancelText: '取消',
          onOk: async () => {
            modal.update({
              okButtonProps: {
                loading: true,
              },
            });
          },
        });
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async delete(codeList: string[]): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/athlete/delete`, codeList);
      this.store.loading = false;
      if (result.success) {
        messageSuccess(`成功删除${result.data}条记录！`);
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }
  @action
  public async getselect(id: string[]): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/listByName`, id);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async getDetail(athleteCode: string): Promise<boolean> {
    try {
      console.log(athleteCode);
      const result = await this.http.postJSON<AthleteModel>(
        `${BACKEND_URL}/athlete/get`,
        athleteCode,
      );

      if (result.success) {
        this.store.detailData = result.data;
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }
}
