/*
 * @作者:张泽宇
 * @公司: 山东大学
 * @文件描述: 新建运动员
 * @LastEditors: Please set LastEditors
 * @Date: 2020-03-15 22:46:43
 * @LastEditTime: 2020-04-28 16:33:43
 */
import * as React from 'react';
import Form, { FormComponentProps } from 'antd/lib/form';
import { FILTER_FORM_LAYOUT } from '@/constant';
import { Input } from 'antd';
import styles from './index.scss';
import { compose, withState } from 'recompose';
import { AthleteEditModel, AthleteModel } from '@/interfaces/athlete';
export interface UserFormProps extends FormComponentProps {
  saving: boolean;
  detailData?: AthleteModel;
  onClose: () => void;
  onSubmit: (data: AthleteEditModel) => void;
}

class UserForm extends React.PureComponent<UserFormProps> {
  handleChange(){
    
  }
  public componentDidMount() {
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
    const { detailData } = this.props;
  //  const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal" className={styles.form}>
        <Form.Item label="运动员名称" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.name} />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="注册号" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.regCode} />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="队伍编码" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.teamCode} />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="队伍名称" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.teamName} />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="证件号" {...FILTER_FORM_LAYOUT}>
          {(<Input value={detailData?.idNumber} />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="证件类型" {...FILTER_FORM_LAYOUT}>
          { (<Input  value={detailData?.idType}/>)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="性别" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.gender}/>) }
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="比赛项目代码" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.competitionEventCode} />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="年龄" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.age} />)}
        </Form.Item>


        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="运动员编码" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.athleteCode} />)}
        </Form.Item>

      

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="创建时间" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.createdAt} />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="创建人" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.createdBy} />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="更新时间" {...FILTER_FORM_LAYOUT}>
          { (<Input value={detailData?.updatedAt} placeholder="请输入" />)}
        </Form.Item>

        <Form layout="horizontal" className={styles.form}></Form>
        <Form.Item label="更新人" {...FILTER_FORM_LAYOUT}>
          {(<Input value={detailData?.updatedBy} placeholder="请输入" />)}
        </Form.Item>

        
      </Form>
    );
  }
}

export default compose<
  {},
  {
    saving: boolean;
    detailData?: AthleteModel;
    onClose: () => void;
  
  }
>(withState('vehicleList', 'changeVehicleList', []))(Form.create()(UserForm));
