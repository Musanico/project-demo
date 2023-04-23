import { Cascader } from 'antd';
import "@/components/filterate/index.css"
import Search from 'antd/es/input/Search'

const options1 = [
  {
    value: '卓越学院',
    label: '卓越学院',
  },
  {
    value: '机械工程学院',
    label: '机械工程学院',
  },
  {
    value: '电子信息学院',
    label: '电子信息学院',
  },
  {
    value: '通信工程学院',
    label: '通信工程学院',
  },
  {
    value: '自动化学院',
    label: '自动化学院',
  },
  {
    value: '计算机学院',
    label: '计算机学院',
  },
  {
    value: '材料与环境学院',
    label: '材料与环境学院',
  },
  {
    value: '圣光机联合学院',
    label: '圣光机联合学院',
  },
  {
    value: '理学院',
    label: '理学院',
  },
  {
    value: '经济学院',
    label: '经济学院',
  },
  {
    value: '管理学院',
    label: '管理学院',
  },
  {
    value: '会计学院',
    label: '会计学院',
  },
  {
    value: '外国语学院',
    label: '外国语学院',
  },
  {
    value: '人文艺术与数媒学院',
    label: '人文艺术与数媒学院',
  },
  {
    value: '法学院',
    label: '法学院',
  },
  {
    value: '网络空间安全学院',
    label: '网络空间安全学院',
  },
];
const options1_major = [
  {
    value: '计算机科学与技术',
    label: '计算机科学与技术',
  },
  {
    value: '电子信息工程',
    label: '电子信息工程',
  },
  {
    value: '智能科学与技术',
    label: '智能科学与技术',
  },
  {
    value: '会计学',
    label: '会计学',
  },
  {
    value: '软件工程',
    label: '软件工程',
  },
  {
    value: '智能制造工程',
    label: '智能制造工程',
  },
];
const options1_major_teachers = [
  {
    value: '智能制造',
    label: '智能制造',
  },
  {
    value: '人工智能',
    label: '人工智能',
  },
  {
    value: '大数据',
    label: '大数据',
  },
  {
    value: '前后端开发',
    label: '前后端开发',
  },
  {
    value: '工业设计',
    label: '工业设计',
  },
  {
    value: '数据库',
    label: '数据库',
  },
];


const Filterate = () => {
  return(
      <div className="filerate-body">
        <Search
            placeholder="请输入教师相关信息"
            allowClear
            enterButton="搜索"
            size="large"
            className="filterate-search"
            status="error"
        />
        <div className="filerate-all">
          <Cascader className="filerate-line" status="error" options={options1} placeholder="学院" />
          <Cascader className="filerate-line" status="error" options={options1_major} placeholder="专业" />
          <Cascader className="filerate-line" status="error" options={options1_major_teachers} placeholder="主攻方向" />
        </div>
      </div>
  )
};
export default Filterate;