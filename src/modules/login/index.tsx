import React from "react";
import { Button } from "antd";
import { Input, Form, Spin } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.scss";
import { TOKEN } from "core/constants";
const Login = () => {
  const loading = false;
  const onLogin = (values: any) => {
    console.log(values);
    window.localStorage.setItem(TOKEN,values.username);
    window.location.href="/";
  };

  return (
    <div id="login" className="login">
      <div className="login__block">
        <div className="login__logo"></div>
        <div className="login__form">
          {loading ? <Spin /> : null}
          <Form onFinish={onLogin}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input
                size="large"
                placeholder="用户名"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password
                size="large"
                placeholder="密码"
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
