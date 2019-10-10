import React from 'react'
import { Menu, Icon } from 'antd'

const SideBar = () => {
  return (
    <>
      <Menu
        className={"side-menu"}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>

      <style jsx>
        {`
          .side-menu{
            width: 256px;
            margin-top: 40px; 
            height: 100%;
            display: block;
          }

          @media screen and (max-width: 991px) {
            
          }
          @media screen and (max-width: 767px) {
          
          }
          @media screen and (max-width: 479px) {
            .side-menu{
              display: none;
            }
          }
        `}
      </style>

    </>
  )
}

export default SideBar
