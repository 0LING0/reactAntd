import React from 'react';
import {Card,Button,Radio} from 'antd';
import './ui.less';

export default class Buttons extends React.Component{
    state = {
        loading: true,
        size:'default'
    }

    handleChange = (e)=>{
        this.setState({
            size:e.target.value
        });
    }
    render(){
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button shape='primary' icon='search'>搜索</Button>
                    <Button shape='primary' icon='download'>下载</Button>

                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon="left" style={{marginRight:0}}>返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group size={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size} type="dashed">Imooc</Button>
                    <Button size={this.state.size} type="danger">Imooc</Button>
                </Card>
            </div>
        );
    }
}