import {Avatar, Card} from 'antd';
import React from 'react';
import "@/components/side/index.css"
const Side = () => {
  return (
      <Card style={{width: 300}} className="side">
        <Avatar className="avatar2" src={<img src={require("@/assets/avatar.jpg")} alt="avatar"/>} size={150}/>
        <div>
          <div className="name">
            舒佳恒
          </div>
          <div className="apply">
            <p className="number">13</p>
            <p className="text">我的申请</p>
          </div>
          <div className="collect">
            <p className="number">20</p>
            <p className="text">我的收藏</p>
          </div>
        </div>
      </Card>
  )
};

export default Side;