/*
 * @文件描述:
 * @Author: 师佳佳
 * @公司: 山东大学
 * @Date: 2020-03-15 10:10:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-28 16:13:48
 */
import * as React from 'react';
import { Input, Button, AutoComplete } from 'antd';
import styles from './index.scss';
import { AthleteSearchProps } from '@/interfaces/athlete';
const { Option } = AutoComplete;
interface SearchFilterProps {
  changeSearchProps: (searchProps: AthleteSearchProps) => void;
  onSearch: () => string;
  onSearchSelect: (name: string) => void;
  options: any[];
}

export default class SearchFilter extends React.PureComponent<SearchFilterProps> {
  render() {
    const { onSearch, changeSearchProps, options, onSearchSelect } = this.props;

    let arrlist = options && options.length > 0 ? options : [];
    const children = arrlist.map(item => (
      <Option key={item.teamCode} value={item.teamCode}>
        {item.teamName}
      </Option>
    ));
    return (
      <div className={styles.filterPanel}>
        <div className={styles.filterItem}>
          <span className={styles.label}>运动员名称：</span>
          <Input
            id="hello"
            allowClear={true}
            placeholder="请输入运动员名称"
            onChange={e => changeSearchProps({ name: e.target.value })}
          />
        </div>
        <div className={styles.filterItem}>
          <span className={styles.label}>代表队名称：</span>

          <AutoComplete
            style={{ width: 200 }}
            onSelect={e => changeSearchProps({ teamCode: e })}
            onSearch={onSearchSelect}
            placeholder="请输入代表队名称自动匹配到编码"
          >
            {children}
          </AutoComplete>
        </div>
        <div className={styles.filterItem}>
          <span className={styles.label}>注册号：</span>
          <Input
            allowClear={true}
            placeholder="请输入注册号"
            onChange={e => changeSearchProps({ regCode: e.target.value })}
          />
        </div>
        <div className={styles.filterItem}>
          <span className={styles.label}>证件号：</span>
          <Input
            allowClear={true}
            placeholder="请输入证件号"
            onChange={e => changeSearchProps({ idNumber: e.target.value })}
          />
        </div>

        <Button type="primary" onClick={onSearch}>
          查询
        </Button>
      </div>
    );
  }
}
