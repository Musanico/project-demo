import {Card} from 'antd';
import React from 'react';
import "@/components/sidebar/index.css"

const Sidebar = () => {
  return (
      <Card style={{width: 300}} className="sidebar" title={"导师申请"} extra={<a href="https://www.baidu.com">更多</a>}>
        <div className="inline">简历优化</div>
        <div className="inline">面试辅导</div>
      </Card>
  )
};

export default Sidebar;