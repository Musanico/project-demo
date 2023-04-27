import "@/pages/CompetitionNotice/index.css"
import Nav from "@/components/nav";
import ScrollLock from "react-scrolllock";
import CompetitionSideBar from "@/components/comp-sidebar";
import {Button, Card} from "antd";
import {LinkOutlined} from "@ant-design/icons";


function CompetitionNotice(){
    return(
        <div>
            <Nav/>
            <ScrollLock>
                <div className="comp-sidebar">
                    <CompetitionSideBar/>
                </div>
            </ScrollLock>
            <div className="comp-main">
                <div className="comp-intro">
                    <div className="comp-comp-name">第十八届学生服务外包大赛</div>
                    <div className="comp-comp-people">发布人： 陈琪凯</div>
                </div>
                <Card className="comp-notice"/>
                <div className="comp-link"><LinkOutlined style={{
                    fontSize:"20px"
                }}/>附件下载</div>
                <div className="comp-time">2023年4月1日</div>
                <Button className="comp-b">申请</Button>
            </div>
        </div>
    )
}

export default CompetitionNotice