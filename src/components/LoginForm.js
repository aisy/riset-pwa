import React from 'react'
import { Form, Icon, Input, Button, Card } from 'antd';

const LoginForm = (props) => {

  const { getFieldDecorator } = props.form;

  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (

    <div id={"loginForm"}>
      <div className={"card-login"}>
        <Card>
          <div className={"title-login"}>
            Login
          </div>

          {/* form login */}
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Item>
              {
                getFieldDecorator('username', {
                  rules: [{ required: true, message: "Tolong Masukkan username anda" }]
                })(
                  <Input
                    prefix={<Icon type={"user"} style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder={"Username"}
                  />
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: "Tolong Masukkan password anda" }]
                })(
                  <Input
                    prefix={<Icon type={"lock"} style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder={"Password"}
                  />
                )
              }
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={"login-form-button"}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>

      <style jsx>
        {`
          .login-form-button {
            width: 100%;
          }
          .card-login {
            width: 400px;
          }
          .title-login {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
          }

          /* start of desktop styles */
          @media screen and (max-width: 991px) {
            
          }
          @media screen and (max-width: 767px) {
          
          }
          @media screen and (max-width: 479px) {
            .card-login {
              width: 350px;
              margin: 10px;
            }
          }
          @media screen and (max-width: 320px) {
            .card-login {
              width: 300px;
            }
          }
        `}
      </style>
    </div>
  )
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(LoginForm)

export default WrappedNormalLoginForm
