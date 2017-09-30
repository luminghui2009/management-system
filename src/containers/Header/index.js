import React from 'react';
import {Menu,Layout,Icon} from 'antd';
import logo from '../../images/logo.png';
import './index.less';
const {Header}=Layout;
export default class HeaderNav extends React.Component {
    render() {
        return (
                <Header style={{ background: '#333', padding: 0 ,position:"relative",height:"50px"}}>
                    <img src={logo} className="logo" alt="logo"/>
                    <span style={{color:"#fff",fontSize:"16px"}} className="header-title">博客后台管理系统</span>
                    <div className="individual">
                        <Menu mode='horizontal'theme='dark'>
                            <Menu.SubMenu title={<span style={{color:"#fff",fontSize:"12px"}}><Icon type="user"/>{localStorage.getItem("username")?localStorage.getItem("username"):null}</span>}>
                                <Menu.Item key="individual">个人信息</Menu.Item>
                                <Menu.Item key="logout">退出</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </div>
                </Header>
        );
    }
}

