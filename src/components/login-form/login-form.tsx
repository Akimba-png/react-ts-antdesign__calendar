import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import Item from 'antd/lib/form/FormItem';
import { IUser } from '../../types';
import { AppDispatch } from '../../store/store';
import { login } from '../../store/assync-actions';
import { validate } from '../../utils/common';
import { ValidateMessage } from '../../const';


function LoginForm(): JSX.Element {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch() as AppDispatch;

  const onFinish = () => {
    const userData: IUser = { username: user, password };
    dispatch(login(userData));
  };

  return (
    <Form
      className="form-login"
      name="login form"
      labelCol={{ span: 4 }}
      wrapperCol={{ offset: 1 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Item
        label="Username"
        name="username"
        rules={[validate.required(ValidateMessage.UserName)]}
      >
        <Input value={user} onChange={(evt) => setUser(evt.target.value)} />
      </Item>

      <Item
        label="Password"
        name="password"
        rules={[validate.required(ValidateMessage.Password)]}
      >
        <Input.Password
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
      </Item>

      <Item className="form-login__button_wrapper">
        <Button type="primary" htmlType="submit" className="form-login__button">
          Submit
        </Button>
      </Item>
    </Form>
  );
}

export default LoginForm;
