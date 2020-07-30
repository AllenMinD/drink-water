import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import './index.less';
const { ipcRenderer } = window.electron;

//私有常量

//可抽离的逻辑处理函数/组件

let UserSetting = (_props: IProps) => {
    //变量声明、解构

    //组件状态

    //网络IO

    //数据转换

    //逻辑处理函数
    function onClickBtn() {
        message.success('yeah!', 2);
        new Notification('喝水通知', {
            body: '老铁起来喝水啦'
        });

        ipcRenderer.send('greetToMain', { greet: 'hello main' });
    }

    //组件Effect
    useEffect(() => {
        ipcRenderer.on('greetToRenderer', (event: any, arg: any) => {
            console.log('来自主进程的问候', arg);
        });
        return () => {
            ipcRenderer.removeAllListeners('greetToRenderer');
        }
    }, []);

    return (
        <div styleName="container">
            <Button type="primary" onClick={onClickBtn}>点击我有惊喜</Button>
            <div styleName="blue">喝水了老铁</div>
        </div>
    )
};

//props类型定义
interface IProps {

}

//prop-type定义，可选

export default UserSetting;