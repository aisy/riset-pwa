import React, { useContext } from 'react'
import { Col, Card, Row, Skeleton, Avatar } from 'antd';
import LoginContext from '../context/LoginContext';

const CardContentMain = () => {

  const context = useContext(LoginContext);

  return (
    <>
      <Col
        lg={{ span: 6, offset: 0 }}
        md={{ span: 12, offset: 0 }}
        sm={{ span: 40, offset: 0 }}
        key={key}
      >
        <Card
          style={{ marginTop: 16 }}
          // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Skeleton
            avatar={{ size: 200, shape: "square" }}
            active={true}
            paragraph={false}
            title={false}
            loading={loading}
          />
          <Skeleton
            paragraph={{ rows: 4 }}
            active={true}
            loading={loading}
          >
            {result.title}
          </Skeleton>
        </Card>
      </Col>
    </>
  )
}

export default CardContentMain
