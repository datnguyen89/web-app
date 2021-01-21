import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Row, Col, Checkbox, Button } from 'antd'
import AuthLayout from '../../layouts/AuthLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { LoginPageWrapper } from './LoginPageStyled'
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const LoginPage = props => {

  const [formInstance] = Form.useForm()

  const handleSubmitForm = (values) => {
    console.log(values)
  }
  useEffect(() => {
    formInstance.setFieldsValue({
      IsRemember: true,
    })
  }, [])
  return (
    <AuthLayout>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginPageWrapper>
        <Form form={formInstance} layout={'vertical'} colon={false} size={'large'} onFinish={handleSubmitForm}>
          <Form.Item name={'UserName'}>
            <Input size={'large'} placeholder={'UserName'} prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name={'Password'}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name={'IsRemember'}  valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Link to={'#'}>Forgot password ?</Link>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type={'primary'} block htmlType={'submit'}>Submit</Button>
          </Form.Item>
        </Form>
      </LoginPageWrapper>
    </AuthLayout>
  )
}

LoginPage.propTypes = {}

export default LoginPage