import { Upload, message, Button } from 'antd';
import {ToTopOutline} from '@ant-design/icons';
import { Component } from 'react';
import React from 'react';
import user from '@/utils/user';
import styles from './index.scss';
import { makeNonEnumerable } from 'mobx/lib/internal';


class Ul extends Component {
    
  public render(){
    const props = {
        showUploadList:false,
        
        //headers:{ accessToken: user.getToken() },
        className: styles.avatarUploader,
        //name: 'file',
        name:'Excel',
        action: 'http://127.0.0.1:8080/athlete/importExcel',
        headers: {
          accessToken: user.getToken(),
          "authorization": 'authorization-text',
          "Accept": "application/json",
          "method": "POST",
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            console.log(info.file);
               if (info.file.response['success']===false){
                message.error(`${info.file.response['message']}`)
               }
                else{message.success(`${info.file.name}上传成功，新增${info.file.response['data']}条记录！`);}
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    return(
    <> 
      
    <Upload {...props}>
     
    <Button >
       批量上传
    </Button>
  </Upload> 
  </>
  )      
  }  
}
export default Ul;