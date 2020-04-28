/*
 * @文件描述: 
 * @Author: 师佳佳
 * @公司: 山东大学
 * @Date: 2020-04-19 09:20:00
 * @LastEditors: 师佳佳
 * @LastEditTime: 2020-04-19 16:05:43
 */

import { PAGE_SIZE } from './common';

export interface CompetitionEventModel {
  // 比赛项目编码
  competitionEventCode: string;
  // 比赛项目名称
  competitionEventName: string;
  // 组别
  suitType: number;
  // 队伍名称
  teamName: string;
  // 运动员编码
  athleteCode: string;
  // 比赛开始时间
  planStartAt: string;
  // 比赛结束时间
  planEndAt: string;
  // 状态
  status: number;
  // 创建时间
  createdAt: string;
  // 更新时间
  updatedAt: string;
  // 创建人
  createdBy: string;
  // 更新人
  updatedBy: string;
}

export interface CompetitionEventEditModel {
  // 比赛项目编码
  competitionEventCode: string;
  // 比赛项目名称
  competitionEventName: string;
  // 组别
  suitType: number;
  // 队伍名称
  teamName: string;
  // 运动员编码
  athleteCode: string;
  // 比赛开始时间
  planStartAt: string;
  // 比赛结束时间
  planEndAt: string;
  // 状态
  status: number;
}

export interface CompetitionEventSearchProps {
  competitionEventCode?: string;
  competitionEventName?: string;
  suitType?: number;
  teamName?: string;
  athleteCode?: string;
  planStartAt?: string;
  planEndAt?: string;
  status?: number;
  //[x: string]: string | number | string[] | undefined;
  page?: number;
  pageSize?: number;
}

/*
export interface UserModel {
  name?: string;
  page?: number;
  pageSize?: number;
}
*/
export const defaultCompetitionEventSearchProps: CompetitionEventSearchProps = {
  competitionEventCode: undefined,
  competitionEventName: undefined,
  suitType: undefined,
  teamName: undefined,
  athleteCode: undefined,
  planStartAt: undefined,
  planEndAt: undefined,
  status: undefined,
  //[x: string]: string | number | string[] | undefined;
  page: 1,
  pageSize: PAGE_SIZE,
};
