import React, { useEffect } from 'react';
import { Button, message, Form, InputNumber, TimePicker } from 'antd';
import './index.less';
import { UserOptionsContainer } from '../../store/container';
const { ipcRenderer } = window.electron;

//私有常量
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

//可抽离的逻辑处理函数/组件

let UserSetting = (_props: IProps) => {
    //变量声明、解构
    const { cupCapacity,
        totalCapacity, 
        setCupCapacity, 
        setTotalCapacity, 
        startWorkTime, 
        endWorkTime, 
        setStartWorkTime, 
        setEndWordTime } = UserOptionsContainer.useContainer();

    //组件状态

    //网络IO

    //数据转换

    //逻辑处理函数
    // function onClickBtn() {
    //     message.success('yeah!', 2);
    //     new Notification('喝水通知', {
    //         body: '老铁起来喝水啦'
    //     });

    //     ipcRenderer.send('greetToMain', { greet: 'hello main' });
    // }

    // 保存表单
    function onFinish(values: any) {
        // console.log('Received values of form: ', values);
        setCupCapacity(values.cupCapacity);
        setTotalCapacity(values.totalCapacity);
        setStartWorkTime(values.startWorkTime);
        setEndWordTime(values.endWorkTime);
        message.success('保存成功', 2);
    }

    //组件Effect
    // useEffect(() => {
    //     ipcRenderer.on('greetToRenderer', (event: any, arg: any) => {
    //         console.log('来自主进程的问候', arg);
    //     });
    //     return () => {
    //         ipcRenderer.removeAllListeners('greetToRenderer');
    //     }
    // }, []);

    return (
        <div styleName="container">
            <div styleName="left">
                <div styleName="title">设置</div>
                <div styleName="pic" />
            </div>
            <div styleName="right">
                <Form
                    {...layout}
                    initialValues={{
                        cupCapacity: cupCapacity,
                        totalCapacity: totalCapacity,
                        startWorkTime: startWorkTime,
                        endWorkTime: endWorkTime,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="每日喝水总量"
                        name={['totalCapacity']}
                        rules={[{ required: true }]}
                    >
                        <InputNumber min={0} formatter={value => `${value} mL`} step={100} />
                    </Form.Item>
                    <Form.Item
                        label="我的水杯容量"
                        name={['cupCapacity']}
                        rules={[{ required: true }]}
                    >
                        <InputNumber min={0} formatter={value => `${value} mL`} step={100} />
                    </Form.Item>
                    <Form.Item
                        label="上班营业时间"
                        name="startWorkTime"
                        rules={[{ required: true }]}
                    >
                        <TimePicker format="HH:mm" getPopupContainer={node => node} />
                    </Form.Item>
                    <Form.Item
                        label="下班跑路时间"
                        name="endWorkTime"
                        rules={[{ required: true }]}
                    >
                        <TimePicker format="HH:mm" getPopupContainer={node => node} />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

//props类型定义
interface IProps {

}

//prop-type定义，可选

export default UserSetting;