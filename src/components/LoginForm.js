import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>

      <style jsx>
        {`
          .login-form-button {
            width: 100%;
          }
        `}
      </style>
    </div>
  )
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(LoginForm)

export default WrappedNormalLoginForm
