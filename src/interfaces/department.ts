/*
 * @文件描述: 
 * @Author: 李洪文
 * @公司: 山东大学
 * @Date: 2020-01-06 10:10:30
 * @LastEditors: 师佳佳
 * @LastEditTime: 2020-04-11 09:54:28
 */
import { PAGE_SIZE } from './common';

export interface DepartmentModel {
  // 部门编码
  departmentCode: string;
  // 部门名称
  departmentName: string;
  // 联系人
  contact: string;
  // 联系电话
  contactPhone: string;
  // 描述
  description: string;
  // 创建日期
  createdAt: string;
  // 修改日期
  updatedAt: string;
}

export interface DepartmentEditModel {
  // 部门编码
  departmentCode?: string;
  // 部门名称
  departmentName?: string;
  // 联系人
  contact?: string;
  // 联系电话
  contactPhone?: string;
  // 描述
  description?: string;
}

export interface DepartmentSearchProps {
  [x: string]: string | number | string[] | undefined;
  departmentName?: string;
  page?: number;
  pageSize?: number;
}

export interface UserModel {
  departmentName?: string;
  page?: number;
  pageSize?: number;
}

export const defaultDepartmentSearchProps: DepartmentSearchProps = {
  departmentName: undefined,
  page: 1,
  pageSize: PAGE_SIZE,
};
