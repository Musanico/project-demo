import "@/pages/Select/index.css"
import Nav from '@/components/nav'
import Side from '@/components/side'
import Sidebar from '@/components/sidebar'
import Teachers from '@/components/teachers'

function Select(){
  return(
      <div>
        <Nav/>
        <Side/>
        <Sidebar/>
        <div className="select-body">
          <Teachers name={"樊瑾"} intro={"圣光机学院 | 副教授 | 工业大数据分析、异常检测、普适计算"} done={1} total={3}/>
          <Teachers name={"王坚"} intro={"圣光机学院 | 教授 | 移动机器人、运动规划、决策理论、智能控制"} done={2} total={3}/>
          <Teachers name={"张林"} intro={"理学院 | 教授 | 量子通信"} done={1} total={3}/>
        </div>
      </div>
  )
}

export default Select