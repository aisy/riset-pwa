import React, { useContext } from 'react';
import { Menu, Icon, Layout, Avatar } from 'antd';
import LoginContext from '../context/LoginContext';

const SideBar = () => {

  const { Sider } = Layout;
  const { SubMenu } = Menu;

  const dataLogin = useContext(LoginContext);

  console.log(dataLogin);

  const logout = () => {
    // localStorage.removeItem("username")
    // localStorage.removeItem("password")
    localStorage.clear()
  }

  return (
    <>
      <Sider
        width={280}
        className={"side-menu"}
      >
        <div className="logo" />
        <div style={{ width: "100%", height: 20, padding: 30 }}>
          <div style={{ backgroundColor: "white" }}></div>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
          <Menu.Item key="1">
            <Icon type="home" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Products</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
          <SubMenu
            key="sub11"
            title={
              <span>
                <Avatar>U</Avatar> <span>{dataLogin.name}</span>
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Item key="5" onClick={logout}>
              Logout
              </Menu.Item>
          </SubMenu>
        </Menu>


      </Sider>
      <style jsx>
        {`
          .side-menu{
            display: block;
            overflow: auto;
            height: 100vh;
            position: fixed;
            left: 0;
          }
          li .ant-menu-item{
            padding-left: 60px !important;
          }
          .bottom-content{
            bottom:0;
            position: absolute;
            padding-bottom: 20px;
          }
          .avatar-user .anticon .anticon-user{
            margin-right: 0px;
          }

          @media screen and (max-width: 991px) {
            
          }
          @media screen and (max-width: 767px) {
            .side-menu{
              display: none;
            }
          }
          @media screen and (max-width: 479px) {
            .side-menu{
              display: none;
            }
            li .ant-menu-item{
              padding-left: 0px !important;
            }
          }
        `}
      </style>
    </>
  )
}

export default SideBar
