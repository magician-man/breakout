/*
 * @Description: 自定义上传组件
 * @Company: thundersdata
 * @Author: luhengchang
 * @Date: 2019-06-07 11:45:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-22 11:09:03
 */
import * as React from 'react';
import { Upload, Icon, message } from 'antd';
import { compose, withState } from 'recompose';
import styles from './index.scss';
import user from '@/utils/user';
import { BACKEND_URL } from '@/services/common';
import { action } from 'mobx';
//const uploadUrl = `${BACKEND_URL}/image/search`;
const uploadUrl = `${BACKEND_URL}/athlete/importExcel`;
interface CustomUploadProps {
  disabled: boolean;

  imageUrl: string | undefined;
  changeImageUrl: (imageUrl: string | undefined) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const CustomUpload: React.SFC<CustomUploadProps> = ({
  loading,
  setLoading,
  imageUrl,
  changeImageUrl,
  disabled,
}) =>(
  <Upload
    listType="text"
    accept= ".xlsx"
    className={styles.avatarUploader}
    disabled={disabled}
    showUploadList={false}
    action={uploadUrl}
    method = {"POST"}
    data={{ access_token: user.getToken() }}
    /*beforeUpload={file => {
      return new Promise((resolve, reject) => {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
          reject(false);
        }
        resolve();
      });
    }}*/
    onChange={({ file }) => {
      const { status } = file;
      imageUrl = file.url;
      if (status === 'uploading') {
        setLoading(true);
        return;
      }

      if (status === 'done') {
        setLoading(false);
        //changeImageUrl(file.response.data);
        message.success(`${file.name} file uploaded successfully!`)
        return;
      }else if(file.status==='error'){
        message.error(`${file.name} file upload failed.`)
      }
    }}
  >
    {imageUrl ? (
      <img src={imageUrl} alt="avatar" />
    ) : (
      <div>
        <p className="ant-upload-drag-icon">
          <Icon type={loading ? 'loading' : 'inbox'} />
        </p>
        <p className="ant-upload-text">点击上传</p>
      </div>
    )}
  </Upload>
);
CustomUpload.defaultProps = {
  disabled : false,
  loading: false,
  
}
export default compose<
  {},
  {
    imageUrl: string | undefined;
    //uploadUrl: string;
    disabled?: boolean;
  
     
    changeImageUrl?: (imageUrl: string | undefined) => void;
  }
>(withState('loading', 'setLoading', false))

(CustomUpload);
