import React, { useState } from 'react'
import { Drawer, Button, Layout } from 'antd'

const NavbarFixed = () => {

  const { Header } = Layout
  const [DrawerVisible, setDrawerVisible] = useState(false)

  const showDrawer = () => {
    setDrawerVisible(true)
  }

  const closeDrawer = () => {
    setDrawerVisible(false)
  }

  return (
    <div id={"NavbarFixed"}>

      <Header className={"navbar"}>
        <div className={"button-nav"}>
          <Button
            icon="menu"
            onClick={showDrawer}
            type="link"
            ghost
          />
        </div>
      </Header>

      <Drawer
        placement={"left"}
        closable={false}
        onClose={closeDrawer}
        visible={DrawerVisible}
      >
        <div className={"imageDrawer"}>
          <img
            width={"100%"}
            src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} alt="lil" />
        </div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      {/* styling */}
      <style jsx>
        {`
          .navbar{
            width: 100%;
            padding: 10px;
            box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);
            position: inherit;
            top: 0;
            background-color: #2A4DAC;
            color: #ffff;
            z-index: 10;
          }
          .button-nav{
            display: none;
            margin-top:-10px;
          }
          .imageDrawer{
            left: 0;
            margin: -24px;
            margin-left: -24px;
            margin-right: -24px;
            margin-bottom: 20px;
          }
  
          {/* Mobile CSS */}
          @media only screen and (max-width: 479px) {
            .navbar{
              position: fixed;
            }
            .button-nav{
              display: block;
            }
          }
        `}
      </style>
    </div>
  )
}

export default NavbarFixed
