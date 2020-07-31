import React, { useState } from 'react';
import './index.less';
import { UserOptionsContainer } from '../../store/container';
import { Progress, Button, message } from 'antd';
import moment from 'moment';
import Countdown from 'antd/lib/statistic/Countdown';

//私有常量

//可抽离的逻辑处理函数/组件

let Home = (props: IProps) => {
    //变量声明、解构
    const { cupCapacity, totalCapacity, startWorkTime, endWorkTime } = UserOptionsContainer.useContainer();
    const workHours = moment.duration(endWorkTime.diff(startWorkTime)).as('hours'); // 工作时长
    const drinkDuration = workHours / Math.floor((totalCapacity / cupCapacity)); // 喝水间隔时长
    const deadline = moment().add(drinkDuration, 'hours').valueOf();

    //组件状态
    const [curCups, setCurCups] = useState<number>(0); // 当前已喝杯数

    //网络IO

    //数据转换

    //逻辑处理函数
    function onClickIncrease() {
        setCurCups(n => n + 1);
    }

    function onClickDecrease() {
        if (curCups > 0) {
            setCurCups(n => n - 1);
        }
    }

    // 倒计时结束
    function onCountdownFinish() {
        // 发起通知
        message.success('yeah!', 2);
        const notify = new Notification('喝水通知', {
            body: '老铁起来喝水啦',
        });

        notify.onclose = () => {
            onClickIncrease();
        }
    }

    //组件Effect

    return (
        <div styleName="container">
            <div styleName="left">
                <div styleName="title">你今日饮咗未？</div>
                <div styleName="pic" />
            </div>
            <div styleName="right">
                <div styleName="plan">
                    <div>
                        今日上班
                        <span styleName="fountain-blue">
                            &nbsp;{workHours}&nbsp;
                        </span>
                        个小时;
                    </div>
                    <div>
                        每隔
                        <span styleName="fountain-blue">
                            &nbsp;{drinkDuration} 小时&nbsp;
                        </span>
                        需要喝一杯水;
                    </div>
                </div>
                <div styleName="count-down">
                    <Countdown
                        title="下一杯水倒计时"
                        value={deadline}
                        valueStyle={{
                            color: '#62BDCB',
                            textAlign: 'center',
                        }}
                        onFinish={onCountdownFinish}
                    />
                </div>
                <div styleName="progress">
                    <Progress
                        type="circle"
                        width={250}
                        strokeColor={'#62BDCB'}
                        trailColor={'#E4E3D8'}
                        percent={curCups / Math.floor((totalCapacity / cupCapacity)) * 100}
                        format={_percent => `${curCups} / ${Math.floor((totalCapacity / cupCapacity))} 杯水`}
                    />
                </div>
                <div styleName="button-row-1">
                    <Button type="primary" danger onClick={onClickDecrease}>不，我说谎了</Button>
                    <div styleName="gap" />
                    <Button type="primary" onClick={onClickIncrease}>我刚喝了一杯</Button>
                </div>
            </div>
        </div>
    )
};

//props类型定义
interface IProps {
    
}

//prop-type定义，可选

export default Home;