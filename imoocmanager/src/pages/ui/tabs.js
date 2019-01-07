import React from 'react';
import {Card, Icon, Alert, notification,Tabs, message} from 'antd';
import './ui.less';
const TabPane = Tabs.TabPane;

export default class Loadings extends React.Component{
    newTabIndex = 0;
    handleCallback = (key)=>{
        message.info('hi,你选择了页签:'+key);
    }
    componentWillMount(){
        const panes = [
            {
                title: 'Tab1',
                content: 'tab1',
                key:'1'
            },
            {
                title: 'Tab2',
                content: 'tab2',
                key:'2'
            },
            {
                title: 'Tab3',
                content: 'tab3',
                key:'3'
            }
        ];
        this.setState({
            activeKey: panes[0].key,
        });
    }
    onChange = (activeKey)=>{
        this.setState({
            activeKey
        });
    }

    render(){
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                        <TabPane tab="Tab1" key='1'>欢迎学习react课程</TabPane>
                        <TabPane tab="Tab2" key='2' >欢迎学习react课程</TabPane>
                        <TabPane tab="Tab3" key='3'>react是一门十分受欢迎的MV*框架</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图页签" className="card-wrap">
                    <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus" />Tab1</span>} key='1'>欢迎学习react课程</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab2</span>} key='2'>欢迎学习react课程</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab3</span>} key='3'>react是一门十分受欢迎的MV*框架</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图页签" className="card-wrap">
                    <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        defaultActiveKey='1' 
                        onChange={this.handleCallback}
                        type="editable-card"
                        onEdit={this.onEdit}
                        >
                        {
                            this.state.panes.map((panel)=>{
                                return <TabPane
                                    tab={panel.title}
                                    key={panel.key}
                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}