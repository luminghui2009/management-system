import React from 'react';
import { Form,Input,Button } from 'antd';
import './index.less';
const FormItem = Form.Item;

class RegisterForm extends React.Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                console.log(values);
                // fetch("/login",{
                //     body:JSON.stringify({username,password}),
                //     method:"post",
                //     headers:{
                //         "Content-Type":"application/json"
                //     }
                // }).then(res=>res.json()).then(data=>{
                //     if(data.resultCode===200){
                //         this.props.history.push("/home");
                //     }
                // });
            }
        });
    };
    render(){
        const formItemLayout = {
            labelCol: {
                 span: 6
            },
            wrapperCol: {
                 span: 15
            }
        };
        const {getFieldDecorator}=this.props.form;
        return(
            <div className="register-form">
                <Form onSubmit={this.handleSubmit} style={{width:300}}>
                    <FormItem {...formItemLayout} label="用户名">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input  size="large"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input  size="large"/>
                        )}
                    </FormItem>
                    <div className="register-btn">
                        <Button type="primary" htmlType="submit">注册</Button>
                    </div>

                </Form>
            </div>
        )
    }
}
const Register = Form.create()(RegisterForm);
export default Register;



