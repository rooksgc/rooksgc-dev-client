import { Form, Input, Button, Card } from 'antd'
import { LockOutlined } from '@ant-design/icons'

const ChangePassword = () => {
  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="card-container">
      <Card style={{ width: 500, margin: '0 auto' }} title="Изменение пароля">
        <p>Придумайте новый пароль</p>
        <Form
          name="change-password"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Введите пароль!' }]}
          >
            <Input.Password
              placeholder="Пароль"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirm-password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Введите подтверждение пароля!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Пароли должны совпадать!'))
                }
              })
            ]}
          >
            <Input.Password
              placeholder="Пароль еще раз"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>

          <Button
            className="submit-button"
            type="primary"
            htmlType="submit"
            size="large"
            block
          >
            Изменить пароль
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default ChangePassword
