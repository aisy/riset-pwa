import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import ContentCenterPage from '../components/ContentCenterPage'

const PageNotFound = () => {
  return (
    <div id={"PageNotFound"}>
      <ContentCenterPage
      // backgroundColor={"#2A4DAC"}
      // colorText={"white"}
      >
        <div className={"content-pageNotFound"}>
          <div className={"code-error"}>
            Oops...
          </div>
          <div className={"subtitle-error"}>
            Sepertinya anda tersesat
          </div>
          <div className={"image-lost"}>
            <img
              src={require('../assets/img/undraw_lost_bqr2.svg')}
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <Link to={"/"}>
            <Button
              gradient={true}
              text={"Kembali ke Home"}
            />
          </Link>

        </div>
      </ContentCenterPage>

      <style jsx>
        {`
          .content-pageNotFound{
            width:500px;
            text-align: center;
          }
          .code-error{
            font-size: 40px;
            font-weight: 700;
            color: #2A4DAC;
          }
          .subtitle-error{
            font-size: 18px;
            font-weight: 400;
            color: #999;
          }
          .image-lost{
            width: 500px;
            margin-top:20px;
            margin-bottom:20px;
          }
          .btn {
            flex: 1 1 auto;
            margin: 10px;
            padding: 15px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
            /* box-shadow: 0 0 20px #eee; */
            border-radius: 50px;
            border: none;
          }
          .btn:hover {
            background-position: right center; /* change the direction of the change here */
            box-shadow: 0 0 5px #eee;
          }
          .btn:focus {outline:0;}
          .btn-1 {
            background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
          }

          /* start of desktop styles */
          @media screen and (max-width: 991px) {
            
          }
          @media screen and (max-width: 767px) {
          
          }
          @media screen and (max-width: 479px) {
            .content-pageNotFound{
              width:300px;
            }
            .image-lost{
              width: 300px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default PageNotFound
