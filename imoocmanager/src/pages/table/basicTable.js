import React from 'react';
import {Card,Table} from 'antd';
// import 
export default class BasicTable extends React.Component{
    state = {};
    componentDidMount(){
        const dataSource = [
            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林奇克公园',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林奇克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林奇克公园',
                time: '09:00'
            }
        ]
        this.setState({
            dataSource
        });
    }

    // 动态获取mock数据
    request = ()=>{}

    render(){
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        return(
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns = {columns}
                        dataSource = {this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据表格" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns = {columns}
                        dataSource = {this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }
}