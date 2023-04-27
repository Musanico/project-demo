import React from 'react';
import { Steps } from 'antd';
import "@/components/steps/index.css"
const Flow = () => (
    <Steps
        className="steps-main"
        current={1}
        items={[
            {
                title: '报名阶段',
                description: '2022.4.1'
            },
            {
                title: '提交材料',
                description: '2022.4.30'
            },
            {
                title: '审核阶段',
                description: '2022.5.3'
            },
            {
                title: '公布阶段',
                description: '2022.6.1'
            },
        ]}
    />
);

export default Flow;