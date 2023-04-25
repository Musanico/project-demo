import "@/pages/PersonPage1/index.css"
import Nav from '@/components/nav'
import PersonSidebar from '@/components/person-sidebar'
import ScrollLock from 'react-scrolllock';
import {MailOutlined} from '@ant-design/icons'
import Side from "@/components/side";
import Sidebar from "@/components/sidebar";
import {Button} from "antd";

function Tperson1(){
  return(
      <div>
          <Nav/>
          <ScrollLock>
            <div className="tp1-sidebar">
              <PersonSidebar/>
            </div>
          </ScrollLock>
          <div className="tp1-main">
            <div>
              <img src={require("@/assets/example.png")}  className="tp1-avatar" alt=""/>
            </div>
            <div className="tp1-name">匡振中</div>
            <div className="tp1-email"><MailOutlined />  zzkuang@hdu.edu.cn</div>
            <div className="tp1-intro">匡振中，男，1987年生，山东日照人，副研究员，硕士生导师。于2017年6月获得中国石油大学与美国北卡罗莱纳大学联合培养博士学位，自2017年10月起任职于杭州电子科技大学计算机学院，是复杂系统建模与仿真教育部重点实验室成员，属于浙江省高水平创新团队成员，入选杭州电子科技大学优秀骨干教师支持计划。</div>
            <Button className="tp1-b1" size={'large'}>申请</Button>
          </div>
          <Side/>
          <Sidebar/>

      </div>
  )
}

export default Tperson1