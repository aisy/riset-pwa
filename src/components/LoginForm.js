import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Card, Checkbox } from 'antd';

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
      <Card className={"card-login"}>
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
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Link
              className="login-form-forgot"
              to={"/forgot-password"}
            >
              Forgot password
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className={"login-form-button"}
              shape={"round"}
            >
              Log in
            </Button>

            <div className="strike">
              <span>or</span>
            </div>
            <Button
              type="default"
              htmlType="button"
              className={"login-form-button"}
              shape={"round"}
            // style={{ backgroundColor: "red", borderColor: "none" }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>

      </Card>

      <style jsx>
        {`
          .title-login {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .card-login {
            width: 400px;
            border: none;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .login-form-forgot {
            float: right;
          }
          .login-form-button {
            width: 100%;
          }
          .strike {
            display: block;
            text-align: center;
            overflow: hidden;
            white-space: nowrap; 
          }
          .strike > span {
            position: relative;
            display: inline-block;
          }
          .strike > span:before,
          .strike > span:after {
            content: "";
            position: absolute;
            top: 50%;
            width: 9999px;
            height: 1px;
            background: #d9d9d9;
          }
          .strike > span:before {
            right: 100%;
            margin-right: 15px;
          }
          .strike > span:after {
            left: 100%;
            margin-left: 15px;
          }

          /* start of desktop styles */
          @media screen and (max-width: 991px) {
            
          }
          @media screen and (max-width: 767px) {
          
          }
          @media screen and (max-width: 479px) {
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
