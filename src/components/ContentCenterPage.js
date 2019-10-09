import React from 'react'

const ContentCenterPage = (props) => {

  const { backgroundColor, colorText } = props

  return (
    <div id={"ContentCenterPage"}>
      <div className={"container-center-page"}>
        {props.children}
      </div>

      <style jsx>
        {`
          .container-center-page{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 10px;
            background-color: ${backgroundColor ? backgroundColor : "white"};
            color: ${colorText ? colorText : "black"}
          }
        `}
      </style>
    </div>
  )
}

export default ContentCenterPage
