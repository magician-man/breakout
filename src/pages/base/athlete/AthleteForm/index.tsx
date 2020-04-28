/*
 * @作者:师佳佳
 * @公司: 山东大学
 * @文件描述: 新建运动员
 * @LastEditors: Please set LastEditors
 * @Date: 2020-03-15 22:46:43
 * @LastEditTime: 2020-04-28 10:59:51
 */
import * as React from 'react';
import Form, { FormComponentProps } from 'antd/lib/form';
import { FILTER_FORM_LAYOUT } from '@/constant';
import { Input, Select } from 'antd';
const {Option}=Select;
import styles from './index.scss';
import { compose, withState } from 'recompose';
import { AthleteEditModel } from '@/interfaces/athlete';
import ModalButtons from '@/components/ModalButtons';
export interface UserFormProps extends FormComponentProps {
  saving: boolean;
  detailData?: AthleteEditModel;
  onClose: () => void;
  onSubmit: (data: AthleteEditModel) => void;
}

class UserForm extends React.PureComponent<UserFormProps> {
  handleChange(){
    
  }
  public componentDidMount() {
    const { detailData } = this.props;
    if (detailData) {
      if (detailData['gender']==='男'){detailData['gender']=0}
      if (detailData['gender']==='女'){detailData['gender']=1}

      if (detailData['idType']==='身份证'){detailData['idType']=1}
      if (detailData['idType']==='护照'){detailData['idType']=2}
      if (detailData['idType']==='军人身份证'){detailData['idType']=3}
      if (detailData['idType']==='港澳内地通行证'){detailData['idType']=4}
      if (detailData['idType']==='台湾居民来大陆通行证'){detailData['idType']=5}
      this.props.form.setFieldsValue(detailData);

    }
  }
// onChange={this.handleChange.bind(this)}
  public handleSubmit = () => {
    this.props.form.validateFields({ force: true }, (error: Error, values: AthleteEditModel) => {
      if (error) {
        return;
      }
      this.props.onSubmit(values);
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal" className={styles.form}>
        <Form.Item label="运动员名称" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入运动员名称',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="注册号" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('regCode', {
            rules: [
              {
                required: true,
                message: '请输入注册号',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="队伍编码" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('teamCode', {
            rules: [
              {
                required: true,
                message: '请输入队伍编码',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="证件号" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('idNumber', {
            rules: [
              {
                required: true,
                message: '请输入证件号',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="证件类型" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('idType', {
            rules: [
              {
                required: true,
                message: '请选择证件类型',
              },
            ],
          })
          ( <Select
            placeholder="下拉选择"
            
            allowClear
          >
            <Option value={1}>身份证</Option>
            <Option value={2}>护照</Option>
            <Option value={3}>军人身份证</Option>
            <Option value={4}>港澳台身份证</Option>
            <Option value={5}>台湾居民来大陆通行证</Option>
          </Select>)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="性别" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('gender', {
            rules: [
              {
                required: false,
                message: '请输入性别',
              },
            ],
          })( <Select
            placeholder="下拉选择"
            
            allowClear
          >
            <Option value={0}>男</Option>
            <Option value={1}>女</Option>
          </Select>)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="比赛项目代码" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('competitionEventCode', {
            rules: [
              {
                required: true,
                message: '请输入比赛项目代码',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="年龄" {...FILTER_FORM_LAYOUT}>
          {getFieldDecorator('age', {
            rules: [
              {
                required: false,
                message: '请输入年龄',
              },
            ],
          })(<Input placeholder="请输入" />)}
        </Form.Item>

        <ModalButtons
          onCancel={this.props.onClose}
          onOk={this.handleSubmit}
          loading={this.props.saving}
        />
      </Form>
    );
  }
}

export default compose<
  {},
  {
    saving: boolean;
    detailData?: AthleteEditModel;
    onClose: () => void;
    onSubmit: (data: AthleteEditModel) => string;
  }
>(withState('vehicleList', 'changeVehicleList', []))(Form.create()(UserForm));
