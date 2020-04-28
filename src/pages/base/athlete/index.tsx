/*
 * @文件描述: 首界面
 * @公司: 山东大学
 * @作者: 师佳佳
 * @LastEditors: Please set LastEditors
 * 张泽宇
 * @Date: 2020-03-25 15:40:17
 * @LastEditTime: 2020-04-28 16:31:52
 */
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import {
  AthleteModel,
  AthleteEditModel,
  AthleteSearchProps,
  defaultAthleteSearchProps,
} from '@/interfaces/athlete';
import CustomTable from '@/components/CustomTable';
import { compose, withState } from 'recompose';
import { AthleteService } from '@/services/athlete.service';
import { TeamService } from '@/services/team.service';
import SearchFilter from './SearchFilter';
import Loading from '@/components/Loading';
import { Divider, Modal, message } from 'antd';
const CommonModal = React.lazy(() => import('@/components/CommonModal'));
import AthleteForm from './AthleteForm';
import { ButtonItem } from '@/interfaces/component';

import Ul from './shangchuan';
import AthleteForm3 from './AthleteForm3';

export interface AthletePageProps {
  athleteService: AthleteService;
  teamService: TeamService;
  selectedRowKeys: string[];
  searchData: AthleteSearchProps;
  options: any;
  selectRow: (selectedRowKeys: string[]) => void;

  athlete?: AthleteModel;
  setAthlete: (athlete?: AthleteModel) => void;

  visible: boolean;
  setVisible: (visible: boolean) => void;

  visibletwo: boolean;
  setVisibletwo: (visibletwo: boolean) => void;
}

@inject('athleteService', 'teamService')
@observer
class AthletePage extends React.Component<AthletePageProps> {
  private columns = [
    { title: '运动员编码', dataIndex: 'athleteCode' },
    { title: '运动员名称', dataIndex: 'name' },
    { title: '注册号', dataIndex: 'regCode' },
    { title: '队伍编码', dataIndex: 'teamCode' },
    { title: '队伍名称', dataIndex: 'teamName' },
    { title: '性别', dataIndex: 'gender' },
    { title: '年龄', dataIndex: 'age' },
    { title: '比赛项目代码', dataIndex: 'competitionEventCode' },
    { title: '比赛项目名称', dataIndex: 'competitionEventName' },
    {
      title: '操作',
      render: (_: any, record: AthleteModel) => (
        <>
          <a
            onClick={() => {
              this.props.setAthlete({
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
              this.handleDelete([record.athleteCode]);
            }}
          >
            删除
          </a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              this.props.setAthlete({
                ...record,
              });
              this.props.setVisibletwo(true);
            }}
          >
            详情
          </a>
        </>
      ),
    },
  ];

  public componentDidMount() {
    //console.log(this.props)
    //alert(this.props);
    //this.props.athleteService.fetchPageData(this.props.searchProps);
  }
  public searchData = {};
  public setSeachData(item) {
    Object.assign(this.searchData, item);
  }
  public render() {
    const { selectRow, selectedRowKeys, athleteService, teamService } = this.props;
    const {
      pageData: { list, page, total },
      loading,
    } = athleteService.store;
    const options = teamService.store.pageData;

    const buttons: ButtonItem[] = [
      {
        text: '新增',
        icon: 'icon-xinzeng',
        type: 'default',
        onClick: () => {
          this.props.setAthlete(undefined);
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
          genRowKey={(record: AthleteModel) => `${record.athleteCode}`}
          onPagination={(current: number) => {
            const searchProps = {
              ...this.searchData,
              page: current,
            };
            athleteService.fetchPageData(searchProps);
          }}
          onRow={(record: AthleteModel) => ({
            onClick: () => selectRow([`${record.athleteCode}`]),
          })}
          rowSelection={{
            columnTitle: '选择',
            selectedRowKeys,
            onChange: (keys: string[]) => selectRow(keys),
          }}
        >
          <SearchFilter
            options={options}
            onSearchSelect={id => {
              teamService.fetchPageData(id);
            }}
            changeSearchProps={this.setSeachData.bind(this)}
            onSearch={() => {
              athleteService.fetchPageData(this.searchData);
            }}
          />
        </CustomTable>

        <React.Suspense fallback={<Loading />}>
          <CommonModal
            title={!!this.props.athlete ? '修改运动员' : '新增运动员'}
            visible={this.props.visible}
            setVisible={this.props.setVisible}
          >
            <AthleteForm
              saving={loading}
              detailData={this.props.athlete}
              onClose={() => this.props.setVisible(false)}
              onSubmit={this.handleSave}
            />
          </CommonModal>
        </React.Suspense>

        <React.Suspense fallback={<Loading />}>
          <CommonModal
            title={'运动员详情'}
            visible={this.props.visibletwo}
            setVisible={this.props.setVisibletwo}
          >
            <AthleteForm3
              saving={loading}
              detailData={this.props.athlete}
              onClose={() => this.props.setVisibletwo(false)}
            />
          </CommonModal>
        </React.Suspense>
        <br></br>
        <Ul></Ul>
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
        const result = await this.props.athleteService.delete(codeList);
        if (result) {
          this.props.athleteService.fetchPageData({ ...this.searchData, page: 1 });
          this.props.selectRow([]);
        }
      },
    });
  };

  private handleSave = (data: AthleteEditModel) => {
    let result: Promise<boolean>;
    if (this.props.athlete) {
      result = this.props.athleteService.update({
        ...data,
        athleteCode: this.props.athlete.athleteCode,
      });
    } else {
      result = this.props.athleteService.add(data);
    }
    result.then(() => {
      this.props.athleteService.fetchPageData(this.searchData);
      this.props.setVisible(false);
    });
  };
}

export default compose(
  withState('selectedRowKeys', 'selectRow', []),
  withState('searchProps', 'setSearchProps', defaultAthleteSearchProps),
  withState('athlete', 'setAthlete', undefined),
  withState('visible', 'setVisible', false),
  withState('visibletwo', 'setVisibletwo', false),
)(AthletePage);
