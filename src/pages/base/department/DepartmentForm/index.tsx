/*
 * @作者:师佳佳
 * @公司: 山东大学
 * @文件描述: 新建运动员
 * @LastEditors: 师佳佳
 * @Date: 2020-03-15 22:46:43
 * @LastEditTime: 2020-04-12 15:51:16
 */
import * as React from 'react';
import Form, { FormComponentProps } from 'antd/lib/form';
import { FILTER_FORM_LAYOUT } from '@/constant';
import { Input } from 'antd';
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
  public componentDidMount() {
    const { detailData } = this.props;
    if (detailData) {
      this.props.form.setFieldsValue(detailData);
    }
  }

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
                required: false,
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
                required: false,
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
                required: false,
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
                required: false,
                message: '请输入证件类型',
              },
            ],
          })(<Input placeholder="请输入" />)}
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
          })(<Input placeholder="请输入" />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}>
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

        </Form><Form.Item
          label="备注"
          style={{ width: '100%' }}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          {getFieldDecorator('description')(<Input placeholder="请输入备注" />)}
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
    onSubmit: (data: AthleteEditModel) => void;
  }
>(withState('vehicleList', 'changeVehicleList', []))(Form.create()(UserForm));
