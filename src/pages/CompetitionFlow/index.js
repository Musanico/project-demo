import "@/pages/CompetitionFlow/index.css"
import Nav from "@/components/nav";
import ScrollLock from "react-scrolllock";
import CompetitionSideBar from "@/components/comp-sidebar";
import Flow from "@/components/steps";
import {Button} from "antd";


function Competition(){
    return(
        <div>
            <Nav/>
            <ScrollLock>
                <div className="flow-sidebar">
                    <CompetitionSideBar/>
                </div>
            </ScrollLock>
            <div className="flow-main">
                <Flow/>
                <div className="flow-intro">
                    <div className="flow-intro-line1">
                        <p className="flow-intro-p1">项目名称：</p>
                        <p className="flow-intro-p2">电子信息产业链全景可视化和监控预警平台</p>
                    </div>
                    <div className="flow-intro-line1" style={{marginTop: "10px"}}>
                        <p className="flow-intro-p1">项目成员：</p>
                        <p className="flow-intro-p2">陈琪凯 | 沈曹祎 | 郭天仡 | 戴彧 | 邓晴天 | 王基豫 | 陈嘉翰 | 舒佳恒 | 蒋涵羽</p>
                    </div>
                    <div className="flow-intro-line1" style={{marginTop: "10px"}}>
                        <p className="flow-intro-p1">指导老师：</p>
                        <p className="flow-intro-p2">龚晓君 | 樊谨 | 吕伟昕</p>
                    </div>
                </div>
                <Button className="flow-b">申请</Button>
            </div>
        </div>
    )
}

export default Competition