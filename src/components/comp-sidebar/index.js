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
    getItem('竞赛通知', '/competition1'),
    getItem('竞赛流程', '/competition2'),
    getItem('获奖情况','/competition3'),
];
const CompetitionSideBar = (props) => {
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
export default CompetitionSideBar;