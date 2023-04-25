import {Menu} from 'antd';
import {useNavigate} from 'react-router-dom'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
      getItem('教师简介', '/personpage1'),
      getItem('教师成果', '/personpage2'),
      getItem('教师图谱','/personpage3'),
      getItem('在线聊天','/talk'),
];
const PersonSidebar = (props) => {
  const navigate = useNavigate();

  const onClick = (e)=>{
    navigate(e.key,{replace: true})
  }

  return (
        <Menu
            style={{
              width: 120,
            }}
            onClick={onClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        ></Menu>
  );
};
export default PersonSidebar;