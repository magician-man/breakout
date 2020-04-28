/*
 * @文件描述: 
 * @Author: 师佳佳
 * @公司: 山东大学
 * @Date: 2020-03-15 10:10:30
 * @LastEditors: 师佳佳
 * @LastEditTime: 2020-04-12 12:10:58
 */
import * as React from 'react';
import { Input, Button } from 'antd';
import styles from './index.scss';
import { AthleteSearchProps } from '@/interfaces/athlete';

interface SearchFilterProps {
  searchProps: AthleteSearchProps;
  changeSearchProps: (searchProps: AthleteSearchProps) => void;
  onSearch: () => void;
}

export default class SearchFilter extends React.PureComponent<SearchFilterProps> {
  render() {
    const { searchProps, onSearch, changeSearchProps } = this.props;
    return (
      <div className={styles.filterPanel}>
        <div className={styles.filterItem}>
          <span className={styles.label}>运动员名称：</span>
          <Input
            allowClear={true}
            value={searchProps.departmentName}
            placeholder="请输入运动员名称"
            onChange={e => changeSearchProps({ athleteName: e.target.value })}
          />
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>代表队编码：</span>
          <Input
            allowClear={true}
            value={searchProps.director}
            placeholder="请输入代表队编码"
            onChange={e => changeSearchProps({ director: e.target.value })}
          />
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>注册号：</span>
          <Input
            allowClear={true}
            value={searchProps.director}
            placeholder="请输入注册号"
            onChange={e => changeSearchProps({ director: e.target.value })}
          />
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>证件号：</span>
          <Input
            allowClear={true}
            value={searchProps.director}
            placeholder="请输入证件号"
            onChange={e => changeSearchProps({ director: e.target.value })}
          />
        </div>

        <Button type="primary" onClick={onSearch}>
          查询
        </Button>
      </div>
    );
  }
}
