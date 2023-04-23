import React from 'react';
import {GiftOutlined, GithubOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Avatar, Menu} from 'antd';
import "@/components/nav/index.css"
import {useNavigate} from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '学生检索',
    key: 'student',
    icon: <UserOutlined />,
  },
  {
    label: "教师检索",
    key: '/select',
    icon: <UserOutlined />,
  },
  {
    label: '竞赛相关',
    key: 'competition',
    icon: <GithubOutlined />,
    inlineCollapsed: false
  },
  {
    label: '活动相关',
    key: 'activity',
    icon: <GiftOutlined />,
  },
];

const Nav = () => {
  const navigate = useNavigate();

  const onClick = (e)=>{
    navigate(e.key,{replace: true})
  }
  return (

      <div className="nav-all">
        <div className="all">
          <p className="title">圣光机科技创新平台</p>
          <Menu className="menu" onClick={onClick} mode="horizontal" items={items} />
          <Avatar size={50} className="avatar1" src={require("@/assets/avatar.jpg")} />
        </div>
      </div>
  );
};
export default Nav;