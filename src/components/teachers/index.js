import "@/components/teachers/index.css"
import {Button, Card} from 'antd'
import {CommentOutlined, LikeTwoTone, StarTwoTone} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'
function Teachers(props){
  const navigate = useNavigate();

  const onClick = ()=>{
    navigate("/talk",{replace: true})
  }
  return(
      <Card style={{ width: 1000,}} className="teacher-card">
        <LikeTwoTone className="teachers-like"/>
        <StarTwoTone  className="teachers-star"/>
        <a className="teachers-p1" href={"http://localhost:3000/personpage1"}>{props.name}</a>
        <p className="teachers-p2">{props.intro}</p>
        <Button className="teachers-b1" icon={<CommentOutlined/>} onClick={onClick}>立即沟通</Button>
        <Button className="teachers-b2" size={'large'}>申请</Button>
      </Card>
  )
}

export default Teachers