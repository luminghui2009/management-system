import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                let {username,password}=values;
                fetch("/login",{
                    body:JSON.stringify({username,password}),
                    method:"post",
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(res=>res.json()).then(data=>{
                    if(data.resultCode===200){
                        localStorage.setItem("username",data.username);
                        this.props.history.push("/home");
                    }
                })
            }
        });
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-bg">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 16,color: '#08c' }} />} placeholder="username" size="large"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 20,color: '#08c' }} />} type="password" placeholder="password" size="large" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div className="login-form-action">
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a className="login-form-register" onClick={e=>{this.props.history.push('/register')}}>立即注册</a>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>

        )
    }
}

const Login = Form.create()(NormalLoginForm);
export default Login;


