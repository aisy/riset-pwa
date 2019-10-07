import React from 'react'

const ContentPage = (props) => {
  return (
    <div id={"ContentPage"}>
      <div className={"content-page"}>
        {props.children}
      </div>

      {/* styling */}
      <style jsx>
        {`
          .content-page{
            margin-top:50px;
            padding: 0px 10px 10px 10px;
          }

          /* start of desktop styles */
          @media screen and (max-width: 991px) {
            
          }
          @media screen and (max-width: 767px) {
          
          }
          @media screen and (max-width: 479px) {
            .content-page{
              margin-top:60px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default ContentPage
