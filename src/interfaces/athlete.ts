/*
 * @Author: 李桢煜
 * @Date: 2020-04-17 18:01:26
 * @LastEditTime: 2020-04-28 16:35:13
 * @LastEditors: Please set LastEditors
 * 张泽宇
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted_11d:\kfcxsj\labs-fronted\src\interfaces\athlete.ts
 */
import { PAGE_SIZE } from './common';

export interface AthleteModel {
  // 运动员编码
  athleteCode: string;
  // 运动员名称
  name: string;
  // 运动员注册号
  regCode: string;
  // 队伍编码
  teamCode: string;
  //证件号码
  idNumber: string;
  //证件类型
  idType: number | string;
  //性别
  gender: number | string;
  //年龄
  age: number;
  //比赛项目编码
  competitionEventCode: string;
  // 创建日期
  createdAt: string;
  // 修改日期
  updatedAt: string;
  //创建人
  createdBy: string;
  //更新人
  updatedBy: string;
  //队伍名称
  teamName: string;
}

export interface AthleteEditModel {
  // 运动员编码
  athleteCode: string;
  // 运动员名称
  name: string;
  // 运动员注册号
  regCode: string;
  // 队伍编码
  teamCode: string;
  //证件号码
  idNumber: string;
  //证件类型
  idType: number | string;
  //性别
  gender: number | string;
  //年龄
  age: number;
  //比赛项目编码
  competitionEventCode: string;
}

export interface AthleteSearchProps {
  [x: string]: string | number | string[] | undefined | null;
  name?: string;
  teamCode?: string;
  regCode?: string;
  idNumber?: string;
  page?: number;
  pageSize?: number;
  id?: number;
}

export interface UserModel {
  athleteCode?: string;
  page?: number;
  pageSize?: number;
}

export const defaultAthleteSearchProps: AthleteSearchProps = {
  name: undefined,
  teamCode: undefined,
  regCode: undefined,
  idNumber: undefined,

  page: 1,
  pageSize: PAGE_SIZE,
};
