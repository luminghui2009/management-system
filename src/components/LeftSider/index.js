import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon} from 'antd';
import game from '../../images/game_1.png';
import './index.less';
const SubMenu = Menu.SubMenu;
export default class LeftSider extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
    };
    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div className="left-sider">
                <div className="left-user">
                    <img src={game} alt=""/>
                    <p className="left-welcome">您好！<span>{localStorage.getItem("username")?localStorage.getItem("username"):""}</span>，欢迎登陆</p>
                </div>
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 240,borderRight:"3px solid green",height:500}}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >

                    <Menu.Item key="1"><Link to='/info' style={{color:'#fff',fontSize:'12px',textAlign:"left"}}><Icon type="home"/>首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/info' style={{color:'#fff',fontSize:'12px',textAlign:"left"}}><Icon type="home"/>公司简介</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/info' style={{color:'#fff',fontSize:'12px',textAlign:"left"}}><Icon type="home"/>新闻列表</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/info' style={{color:'#fff',fontSize:'12px',textAlign:"left"}}><Icon type="home"/>产品列表</Link></Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>新闻动态</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>

                </Menu>
            </div>
        );
    }
}



