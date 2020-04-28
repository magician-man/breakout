/*
 * @文件描述: 首界面
 * @公司: 山东大学
 * @作者: 师佳佳
 * @LastEditors: Please set LastEditors
 * @Date: 2020-03-25 15:40:17
 * @LastEditTime: 2020-04-21 16:10:22
 */
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import {
  DepartmentModel,
  DepartmentEditModel,
  DepartmentSearchProps,
  defaultDepartmentSearchProps,
} from '@/interfaces/department';
import CustomTable from '@/components/CustomTable';
import { compose, withState } from 'recompose';
import { DepartmentService } from '@/services/department.service';
import SearchFilter from './SearchFilter';
import Loading from '@/components/Loading';
import { Divider, Modal } from 'antd';
const CommonModal = React.lazy(() => import('@/components/CommonModal'));
import DepartmentForm from './DepartmentForm';
import { ButtonItem } from '@/interfaces/component';

export interface DepartmentPageProps {
  departmentService: DepartmentService;
  selectedRowKeys: string[];
  selectRow: (selectedRowKeys: string[]) => void;

  searchProps: DepartmentSearchProps;
  setSearchProps: (searchProps: DepartmentSearchProps) => void;

  department?: DepartmentEditModel;
  setDepartment: (department?: DepartmentEditModel) => void;

  visible: boolean;
  setVisible: (visible: boolean) => void;
}

@inject('departmentService')
@observer
class DepartmentPage extends React.Component<DepartmentPageProps> {
  
  

  private columns = [
    { title: '运动员代码', dataIndex: 'athleteCode' },
    { title: '运动员名称', dataIndex: 'name' },
    { title: '注册号', dataIndex: 'regCode' },
    { title: '队伍编码', dataIndex: 'teamCode' },
    { title: '证件号', dataIndex: 'idNumber' },
    { title: '证件类型', dataIndex: 'idType' },
    { title: '性别', dataIndex: 'gender' },
    { title: '年龄', dataIndex: 'age' },
    { title: '比赛项目代码', dataIndex: 'competitionEventCode' },
    {
      title: '操作',
      render: (_: any, record: DepartmentModel) => (
        <>
          <a
            onClick={() => {
              this.props.setDepartment({
                ...record,
              });
              this.props.setVisible(true);
            }}
          >
            修改
          </a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              this.handleDelete([record.departmentCode]);
            }}
          >
            删除
          </a>
        </>
      ),
    },
  ];

  public componentDidMount() {
    this.props.departmentService.fetchPageData(this.props.searchProps);
  }

  public render() {
    const { selectRow, selectedRowKeys, departmentService } = this.props;
    const {
      pageData: { list, page, total },
      loading,
    } = departmentService.store;

    const buttons: ButtonItem[] = [
      {
        text: '新增',
        icon: 'icon-xinzeng',
        type: 'default',
        onClick: () => {
          this.props.setDepartment(undefined);
          this.props.setVisible(true);
        },
      },
      {
        text: '删除',
        icon: 'icon-xinzeng',
        disabled: this.props.selectedRowKeys.length === 0,
        type: 'primary',
        onClick: () => this.handleDelete(this.props.selectedRowKeys),
      },
      {
        text: '批量导入',
        icon: 'icon-xinzeng',
        type: 'default',
        onClick: () =>{this.props.setVisible;alert()}
      }
    ];

    return (
      <>
        <CustomTable
          loading={loading}
          columns={this.columns}
          buttons={buttons}
          dataSource={list}
          current={page}
          total={total}
          genRowKey={(record: DepartmentModel) => `${record.departmentCode}`}
          onPagination={(current: number) => {
            const searchProps = {
              ...this.props.searchProps,
              page: current,
            };
            departmentService.fetchPageData(searchProps);
          }}
          onRow={(record: DepartmentModel) => ({
            onClick: () => selectRow([`${record.departmentCode}`]),
          })}
          rowSelection={{
            columnTitle: '选择',
            selectedRowKeys,
            onChange: (keys: string[]) => selectRow(keys),
          }}
        >
          <SearchFilter
            searchProps={this.props.searchProps}
            changeSearchProps={props => {
              this.props.setSearchProps({
                ...this.props.setSearchProps,
                ...props,
              });
            }}
            onSearch={() => {
              departmentService.fetchPageData(this.props.searchProps);
            }}
          />
        </CustomTable>

        <React.Suspense fallback={<Loading />}>
          <CommonModal
            title={!!this.props.department ? '修改运动员' : '新增运动员'}
            visible={this.props.visible}
            setVisible={this.props.setVisible}
          >
            <DepartmentForm
              saving={loading}
              detailData={this.props.department}
              onClose={() => this.props.setVisible(false)}
              onSubmit={this.handleSave}
            />
          </CommonModal>
        </React.Suspense>
      </>
    );
  }

  private handleDelete = (codeList: string[]) => {
    if (!codeList || codeList.length === 0) {
      return;
    }

    const modal = Modal.confirm({
      centered: true,
      title: `您确定要删除选定的${codeList.length}个运动员吗？`,
      okText: '确定',
      cancelText: '取消',
      onOk: async () => {
        modal.update({
          okButtonProps: {
            loading: true,
          },
        });
        const result = await this.props.departmentService.delete(codeList);
        if (result) {
          this.props.departmentService.fetchPageData({
            ...this.props.searchProps,
            page: 1,
          });
          this.props.selectRow([])
        }
      },
    });
  };

  private handleSave = (data: DepartmentEditModel) => {
    let result: Promise<boolean>;
    if (this.props.department) {
      result = this.props.departmentService.update({
        ...data,
        departmentCode: this.props.department.departmentCode,
      });
    } else {
      result = this.props.departmentService.add(data);
    }

    result.then(() => {
      this.props.departmentService.fetchPageData(this.props.searchProps);
      this.props.setVisible(false);
    });
  };
}

export default compose(
  withState('selectedRowKeys', 'selectRow', []),
  withState('searchProps', 'setSearchProps', defaultDepartmentSearchProps),
  withState('department', 'setDepartment', undefined),
  withState('visible', 'setVisible', false),
)(DepartmentPage);
