import React, { useState } from 'react'
import { Drawer, Icon } from 'antd'

const DrawerLeft = () => {

  const [visible, setVisible] = useState(false)

  showDrawer = () => {
    visible(true)
  }

  closeDrawer = () => {
    setVisible(false)
  }

  return (
    <div id={"drawerLeft"}>
      <Drawer
        title={"Drawer"}
        placement={"left"}
        onClose={() => closeDrawer()}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default DrawerLeft
