import { useState } from 'react';
import { createContainer } from 'unstated-next';
import moment from 'moment';

// 水杯容量（单位：毫升）
function useCupCapacityContainer() {
    const [cupCapacity, setCupCapacity] = useState<number>(500);
    return { cupCapacity, setCupCapacity };
}

// 总共一天要喝多少天水（单位：毫升）
function useTotalCapacityContainer() {
    const [totalCapacity, setTotalCapacity] = useState<number>(2500);
    return { totalCapacity, setTotalCapacity };
}

// 上班时间（开始喝水计划时间）
function useStartWorkTimeContainer() {
    const [startWorkTime, setStartWorkTime] = useState(moment('900', 'hmm'));
    return { startWorkTime, setStartWorkTime };
}

// 下班时间（结束计划时间）
function useEndWorkTimeContainer() {
    const [endWorkTime, setEndWordTime] = useState(moment('1800', 'hhmm'));
    return { endWorkTime, setEndWordTime };
}

function PatrolDevice() {
    const cupCapacityContainer = useCupCapacityContainer();
    const totalCapacityContainer = useTotalCapacityContainer();
    const startWorkTimeContainer = useStartWorkTimeContainer();
    const endWorkTimeContainer = useEndWorkTimeContainer();

    return {
        ...cupCapacityContainer,
        ...totalCapacityContainer,
        ...startWorkTimeContainer,
        ...endWorkTimeContainer,
    }
}

export const UserOptionsContainer = createContainer(PatrolDevice);