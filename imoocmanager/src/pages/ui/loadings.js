import React from 'react';
import {Card, Button, Spin, Icon, Alert} from 'antd';
import './ui.less';

export default class Loadings extends React.Component{
    render(){
        const icon = <Icon type="plus" style={{fontSize:24}}/>
        const iconLoading = <Icon type="loading" style={{fontSize:24}}/>
        return(            
            <div>
                <Card title="Spin用法" className="wrap">
                    <Spin size="small"/>
                    <Spin style={{margin: '0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={{icon}} style={{marginLeft:10}}/>
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="React"
                        description="欢迎来到React高级实战课程"
                        type="info"
                    ></Alert>
                    <Alert
                        message="React"
                        description="欢迎来到React高级实战课程"
                        type="warning"
                    ></Alert>
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                        ></Alert>
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                        ></Alert>
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                        ></Alert>
                    </Spin>
                </Card>
            </div>
        );
    }
}