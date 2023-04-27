import React from 'react';
import {Avatar, Button, Input, Space} from "antd";
import "@/components/commentBox/index.css"
import {LikeOutlined, UserOutlined} from "@ant-design/icons";

class CommentBox extends React.Component{
    state = {
        index: 4,
        comments:[
            {id:1, content:"教学很认真",name:"用户50043", time:"2023-02-24 10:17:23",num:"2"},
            {id:2, content:"老师很负责",name:"用户34279", time:"2023-03-11 18:20:19",num:"1"},
            {id:3, content:"沙发",name:"用户14382", time:"2023-04-22 9:18:20",num:"1"}
        ],
        userName:'',
        userContent:''
    }
    renderList(){
        const {comments} = this.state
        if(comments.length ===0){
            return <div className='no-conmment'>暂无评论，快去评论吧</div>
        }
        return(
            <div>
                {
                    comments.map(item=>(
                        <div key={item.id} className="comment-card">
                            <Avatar size="large" icon={<UserOutlined/>}  className="comment-card-avatar"/>
                            <div className="comment-card-right">
                                <p className="comment-card-text">{item.name}: {item.content}</p>
                                <p className="comment-card-time">{item.time}</p>
                                <LikeOutlined className="comment-card-like"/>
                                <p className="comment-card-like-num">{item.num}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

    handleForm = (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }

    addComment= ()=>{
        const {comments, userContent} = this.state;
        if(userContent.trim()===''){
            alert('请输入评论内容！');
            return;
        }
        const newComments = [{
            id: this.index,
            name: this.nameRandom(),
            content:userContent,
            time: this.getNowTime(),
            num: 0
        },...comments]
        this.setState({
            comments:newComments,
            userContent:'',
            index: this.index + 1,
        })


    }

    nameRandom(){
        let result = ''
        for (let i = 0; i < 5; i++) {
            let index = Math.floor(Math.random()*10)
            result = result + index.toString()
        }
        result = "用户" + result
        return result
    }

    getNowTime() {
        const date = new Date();

        const year = date.getFullYear(); //getFullYear()代替getYear()

        const month = date.getMonth() + 1;

        const day = date.getDate();

        const hour = date.getHours();

        const minute = date.getMinutes();

        const second = date.getSeconds();

        const time = year + '-' + this.addZero(month) + '-' + this.addZero(day) + ' ' + this.addZero(hour) + ':' + this.addZero(minute) + ':' + this.addZero(second);
        return time;
    }
    addZero(s) {
        return s < 10 ? ('0' + s) : s;
    }

    render(){
        const {userContent} = this.state;

        return(
            <div>
                <div className="comment-place">
                    {this.renderList()}
                </div>
                <Space direction="horizontal" className="comment-input-all">
                    <Input
                        placeholder="说说你对老师的看法"
                        onChange={this.handleForm}
                        className='comment-input'
                        value={userContent}
                        name="userContent"
                    />
                    <Button style={{ width: 80 }}
                            onClick={this.addComment}
                            >
                        发表
                    </Button>
                </Space>
            </div>
        )
    }
}
export default CommentBox
