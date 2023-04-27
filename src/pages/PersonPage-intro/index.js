import "@/pages/PersonPage-intro/index.css"
import Nav from '@/components/nav'
import PersonSidebar from '@/components/person-sidebar'
import ScrollLock from 'react-scrolllock';
import {MailOutlined} from '@ant-design/icons'
import Side from "@/components/side";
import Sidebar from "@/components/sidebar";
import {Button} from "antd";
import CommentBox from "@/components/commentBox";

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
            <div className="tp1-name-title">匡振中</div>
            {/*<div className="tp1-email"><MailOutlined />  zzkuang@hdu.edu.cn</div>*/}
              <div className="tp1-intro-subtitle">杭州电子科技大学计算机学院硕士生导师、副研究员</div>
            <div className="tp1-intro">
                <div className="tp1-intro-line" style={{
                    marginTop:"-15px"
                }}>
                    <p style={{
                        fontWeight:"bold",
                        color:"grey"
                    }}
                    >中文名</p>
                    <p>匡振中</p>
                    <p style={{
                        fontWeight:"bold",
                        color:"grey",
                        marginLeft:"60px"
                    }}
                    >职业</p>
                    <p>教师</p>
                </div>
                <hr style={{
                    border:"1px dashed #987cb9",
                    color:"grey",
                    marginLeft:"30px",
                    marginTop:"5px",
                    width:"400px"
                }}/>
                <div className="tp1-intro-line" style={{
                    marginTop:"10px"
                }}>
                    <p style={{
                        fontWeight:"bold",
                        color:"grey"
                    }}
                    >出生日期</p>
                    <p>1987年</p>
                    <p style={{
                        fontWeight:"bold",
                        color:"grey",
                        marginLeft:"45px"
                    }}
                    >专业方向</p>
                    <p>视觉识别技术</p>
                </div>
                    <hr style={{
                        border:"1px dashed #987cb9",
                        color:"grey",
                        marginLeft:"30px",
                        marginTop:"5px",
                        width:"400px"
                    }}/>
                <div className="tp1-intro-line" style={{
                    marginTop:"10px"
                }}>
                    <p style={{
                        fontWeight:"bold",
                        color:"grey"
                    }}
                    >学位/学历</p>
                    <p>博士</p>
                    <p style={{
                        fontWeight:"bold",
                        color:"grey",
                        marginLeft:"55px"
                    }}
                    >任职院校</p>
                    <p>杭州电子科技大学计算机学院</p>
                </div>
                <hr style={{
                    border:"1px dashed #987cb9",
                    color:"grey",
                    marginLeft:"30px",
                    marginTop:"5px",
                    width:"500px"
                }}/>
                <div className="tp1-intro-block">
                    于2017年6月获得中国石油大学与美国北卡罗莱纳大学联合培养博士学位，自2017年10月起任职于杭州电子科技大学计算机学院，是复杂系统建模与仿真教育部重点实验室成员，属于浙江省高水平创新团队成员，入选杭州电子科技大学优秀骨干教师支持计划。
                </div>
            </div>
            <Button className="tp1-b1" size={20}>申请</Button>
          </div>
          <div className="tp1-commentPlace">
              <CommentBox/>
          </div>
          <Side/>
          <Sidebar/>
      </div>
  )
}

export default Tperson1