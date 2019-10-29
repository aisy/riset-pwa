import React, { useEffect, useState } from 'react'
import {
  Layout,
  Breadcrumb,
  Skeleton,
  Card,
  Icon,
  Row,
  Col,
} from 'antd';

import { LoginProvider } from '../context/LoginContext';
import SideBar from '../components/SideBar';
import NavbarFIxed from '../components/NavbarFixed2';
import CardContent from '../components/CardContentMain';
import CardContentMain from '../components/CardContentMain';

const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Content, Footer } = Layout;

  const dataLogin = { name: localStorage.getItem("username"), loggedIn: true }

  const getDataAPI = async () => {
    try {
      let respon = await fetch('https://facebook.github.io/react-native/movies.json');
      let responJson = await respon.json();

      setLoading(false);
      setData(responJson.movies);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    getDataAPI();
  }, [])

  return (
    <LoginProvider>
      <Layout>
        <SideBar />
        <Layout className={"layout-home"}>
          <NavbarFIxed />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ textAlign: 'center' }}>
              <Row gutter={16}>
                {
                  data.map((result, key) => (
                    <CardContentMain />
                  ))
                }
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

        <style jsx>
          {`
            .layout-home{
              margin-left: 280px;
            }

            @media screen and (max-width: 991px) {
              .layout-home{
                margin-left: 280px;
              }
            }
            @media screen and (max-width: 767px) {
              .layout-home{
                margin-left: 0px;
              }
            }
            @media screen and (max-width: 479px) {
              .layout-home{
                margin-left: 0px;
              }
            }
          `}
        </style>
      </Layout>
    </LoginProvider>
  )
}

export default Home
