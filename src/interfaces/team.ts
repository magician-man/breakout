/*
 * @Author: 李桢煜
 * @Date: 2020-04-18 14:56:06
 * @LastEditTime: 2020-04-18 14:56:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted\src\interfaces\team.ts
 */
import { PAGE_SIZE } from './common';
export interface TeamModel {
    // 部门编码
    teamCode: string;
    // 部门名称
    teamName: string;
  }
export interface TeamSearchProps {
    teamName?: string;
    page?: number;
    pageSize?: number;
  }
  
  export const defaultCourseSearchProps: TeamSearchProps = {
    teamName: undefined,
    page: 1,
    pageSize: PAGE_SIZE,
  };
  