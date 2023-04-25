import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
    ChatContainer,
    ConversationHeader, InfoButton,
    Message, MessageGroup,
    MessageInput,
    MessageList,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@/pages/Talk/index.css"
import Nav from "@/components/nav";
import Side from "@/components/side";
import Sidebar from "@/components/sidebar";
import PersonSidebar from "@/components/person-sidebar";
import ScrollLock from "react-scrolllock";
import {useRef, useState} from "react";
import {FileWordTwoTone, FolderAddTwoTone, LikeTwoTone, StarTwoTone} from "@ant-design/icons";


function Talk() {
    const remoteSender = "Kai";
    const localSender = "You";
    const groupIdRef = useRef(0);
    const msgIdRef = useRef(0);
    const remoteMsgCnt = useRef(0);
    const inputRef = useRef();
    const [msgInputValue, setMsgInputValue] = useState("");
    const [groups, setGroups] = useState([]);

    const handleSend = (message, sender, notCancel) => {
        if (groups.length > 0) {
            const lastGroup = groups[groups.length - 1];

            if (lastGroup.sender === sender) {
                // Add to group
                const newMessages = [...lastGroup.messages].concat({
                    _id: `m-${++msgIdRef.current}`,
                    message,
                    sender
                });
                const newGroup = { ...lastGroup,
                    messages: newMessages
                };
                const newGroups = groups.slice(0, -1).concat(newGroup);
                setGroups(newGroups);
            } else {
                // Sender different than last sender - create new group
                const newGroup = {
                    _id: `g-${++groupIdRef.current}`,
                    direction: sender === localSender ? "outgoing" : "incoming",
                    messages: [{
                        _id: `m-${++msgIdRef.current}`,
                        message,
                        sender
                    }]
                };
                setGroups(groups.concat(newGroup));
            }
        } else {
            const newGroup = {
                _id: `g-${++groupIdRef.current}`,
                direction: sender === localSender ? "outgoing" : "incoming",
                messages: [{
                    _id: `m-${++msgIdRef.current}`,
                    message,
                    sender: sender
                }]
            };
            setGroups([newGroup]);
        }

        if (!notCancel) {
            setMsgInputValue("");
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <Nav/>
            <Side/>
            <Sidebar/>
            <ScrollLock>
                <div className="talk-side">
                    <PersonSidebar/>
                </div>
            </ScrollLock>
            <div className="talk-main">
                <div style={{
                    height: "800px",
                    width: "920px"
                }}>
                    <ChatContainer>
                        <ConversationHeader>
                            <ConversationHeader.Content userName="匡振中"/>
                            <ConversationHeader.Actions>
                                <FileWordTwoTone className="talk-star"/>
                                <FolderAddTwoTone className="talk-star"/>
                                <LikeTwoTone className="talk-star"/>
                                <StarTwoTone className="talk-star"/>
                            </ConversationHeader.Actions>
                        </ConversationHeader>
                        <MessageList typingIndicator={<TypingIndicator/>}>
                            <Message model={{
                                message: "同学你好",
                                sentTime: "15 mins ago",
                                sender: "匡振中",
                                direction: "incoming",
                                position: "single"
                            }}/>
                            <Message model={{
                                message: "老师您好",
                                sentTime: "15 mins ago",
                                sender: "舒佳恒",
                                direction: "outgoing",
                                position: "single"
                            }}/>
                            {groups.map(g => <MessageGroup key={g._id} data-id={g._id} direction={g.direction}>
                                <MessageGroup.Messages key={g._id}>
                                    {g.messages.map(m => <Message as={Message} key={m._id} data-id={m._id} model={m} />)}
                                </MessageGroup.Messages>
                            </MessageGroup>)}
                        </MessageList>
                        <MessageInput placeholder="输入你想对老师说的话~" onSend={m => handleSend(m, localSender)} onChange={setMsgInputValue} value={msgInputValue} ref={inputRef} />
                    </ChatContainer>
                </div>
            </div>
        </div>
    )
}
export default Talk