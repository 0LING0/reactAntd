import React from 'react';
import {Card, Button, Spin, Icon, Alert, notification} from 'antd';
import './ui.less';

export default class Loadings extends React.Component{

    openNotification = (type,direction)=>{
        notification.config({
            placement: direction
        });
        notification[type]({
            message: '发工资了',
            description: '上个月考勤22天，迟到12天，实发工资250，请笑纳'
        });
    }
    render(){
        return(
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success','topLeft')}>success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info','topRight')}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning','BottomLeft')}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error','BottomRight')}>error</Button>
                </Card>
            </div>
        );
    }
}