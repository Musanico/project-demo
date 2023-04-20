import "@/components/teachers/index.css"
import {Button, Card} from 'antd'
import {CommentOutlined} from '@ant-design/icons'
function Teachers(props){
  return(
      <Card style={{ width: 1000,}} className="teacher-card">
        <p className="teachers-p1">{props.name}</p>
        <p className="teachers-p2">{props.intro}</p>
        <Button className="teachers-b1" icon={<CommentOutlined />}>立即沟通</Button>
        <Button className="teachers-b2" size={'large'} type={'primary'}>申请</Button>
        <p className="teachers-p3">{props.done}/{props.total}</p>
      </Card>
  )
}

export default Teachers