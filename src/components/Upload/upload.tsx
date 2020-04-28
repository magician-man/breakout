import {Upload, message, Button} from 'antd';
import {UploadOutline} from '@ant-design/icons';
import React from 'react';

const props = {
    name: 'file',
    action: 'https:127.0.0.1:8080/athlete/importExcel',
    method: 'post',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

export class chuan extends React.Component{
      render (){
          return(<Upload {...props}>
            <Button>
              <UploadOutline /> Click to Upload
            </Button>
          </Upload>
        )
      }
  }

  export default chuan;