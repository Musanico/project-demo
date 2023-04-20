import React, {useState} from 'react';
import {GiftOutlined, GithubOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Avatar, Menu} from 'antd';
import "@/components/nav/index.css"

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'layout',
    icon: <HomeOutlined />,
  },
  {
    label: '学生检索',
    key: 'student',
    icon: <UserOutlined />,
  },
  {
    label: '教师检索',
    key: 'teacher',
    icon: <UserOutlined />,
    // children: [
    //   {
    //     type: 'group',
    //     label: 'Item 1',
    //     children: [
    //       {
    //         label: 'Option 1',
    //         key: 'setting:1',
    //       },
    //       {
    //         label: 'Option 2',
    //         key: 'setting:2',
    //       },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Item 2',
    //     children: [
    //       {
    //         label: 'Option 3',
    //         key: 'setting:3',
    //       },
    //       {
    //         label: 'Option 4',
    //         key: 'setting:4',
    //       },
    //     ],
    //   },
    // ],
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
  const [current, setCurrent] = useState('mail');
  const url = "https://avatars.githubusercontent.com/u/108330876?s=400&u=0c5c811a193fd0dac9e46348ac2104dcea881654&v=4"
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
      <div className="nav-all">
        <div className="all">
          <p className="title">圣光机科技创新平台</p>
          <Menu className="menu" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          <Avatar size={50} className="avatar1" src={url} />
        </div>
      </div>
  );
};
export default Nav;