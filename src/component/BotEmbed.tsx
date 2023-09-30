import React, { useEffect, useRef } from 'react'
// import botIcon from './boticon.png'
import {BsRobot} from "react-icons/bs"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbSend} from "react-icons/tb"
import './style.css'

function BotEmbed(props: BotProps) {

    const [showChatBox, setShowChatBox] = React.useState<boolean>(false)

    const [title, setTitle] = React.useState<string>(props.title)
    const [profileImage, setProfileImage] = React.useState<string>(require("./boticon.png").default)
    const [description, setDescription] = React.useState<string>("")

    const [message, setMessage] = React.useState<string>("")

    const [chats, setChats] = React.useState<Chat[]>([])
    const [chatsUpdater, setChatsUpdater] = React.useState<string | null>(null)

    const embedRef = useRef<HTMLDivElement>(null)

    // IF YOU ARE HERE, YOU ARE NOT SUPPOSED TO BE HERE
    const getBotInfo = async () => {
        const response = await fetch("https://server.humanizeai.in/get-my-bot-details", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": props.apiKey,
            }
        })
        const data = await response.json()
        console.log(data)

        if (data?.success) {
            setTitle(data?.data?.name)
            setProfileImage(data?.data?.pic)
            setDescription(data?.data?.description)
        } else {
            console.log(data?.message)
        }
    }

    React.useEffect(()=>{
        getBotInfo()
        if (props.initialMessage) {
            setChats([
                {
                    message: props.initialMessage,
                    sender: "bot",
                }
            ])
        }
    }, [])

    // outside click handler
    React.useEffect(() => {
        function handleClickOutside(event: any) {
            if (embedRef.current && !embedRef.current.contains(event.target)) {
                setShowChatBox(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [embedRef])

    const sendMessage = async () => {
        console.log("Sending message", message)
        console.log("Existing chats", chats)
        let tempChats = [...chats]
        tempChats.push({message: message, sender: "user"})
        tempChats.push({message: "Loading...", sender: "bot"})
        console.log("Temp chats", tempChats)
        setChatsUpdater(message)
        // const oldLength = tempChats.length
        console.log("New chats", chats)
    }
    useEffect(()=>{
        if (chatsUpdater === null) return
        let tempChats = [...chats]
        tempChats.push({message: chatsUpdater, sender: "user"})
        tempChats.push({message: "Loading...", sender: "bot"})
        setChats(tempChats)
    }, [chatsUpdater])
    
    useEffect(() => {
        if (chatsUpdater === null) return
        console.log("Sending msg", chatsUpdater)
        const url = `https://server.humanizeai.in/api/message-bot/${props.apiKey}/${message}`
        if ('EventSource' in window) {
        try {
              let source = new EventSource(url, {withCredentials: false})
        
              source.addEventListener("open", () => {
                console.log("Connection opened")
              })
        
              source.addEventListener("message", (e: any) => {
                console.log("Printing msgs")
                const newData = JSON.parse(JSON.stringify(e.data));
                console.log("NEW word", newData)
                let newChats = [...chats]
                if (newChats[newChats.length - 1]?.message === "Loading...") {
                  newChats[newChats.length - 1].message = newData
                } else {
                  newChats[newChats.length - 1].message += newData
                  setChats(newChats)
                  // console.log("New chats", newChats)
                  // console.log(newData);
                }
              })
        
              source.addEventListener("error", (e: any) => {
                console.log("Error")
                console.log(e)
                source.close()
              })
        
        } catch (e) {
            console.log("Today's API limit reached")
            console.log(e)
        }
        } else {
          console.log("EventSource not supported")
        }
    }, [chats.length])
    
    const messageListRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight
        }
    }, [chats])

  return (
    <div
        className={props?.className}
        ref={embedRef}
        style={{
        ...props?.style,
        position: "fixed",
        bottom: props?.autoposition?.includes("bottom") ? "25px" : undefined,
        top: props?.autoposition?.includes("top") ? "25px" : undefined,
        right: props?.autoposition?.includes("right") ? "30px" : undefined,
        left: props?.autoposition?.includes("left") ? "30px" : undefined,
        zIndex: 9999,
    }}>
        <div style={{
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            backgroundColor: colors[props?.theme]?.primary,
            color: colors[props?.theme]?.secondary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            transition: "all 0.2s ease-in-out",
            transform: showChatBox ? "scale(0)" : "scale(1)",
            opacity: showChatBox ? 0 : 1,
         }} onClick={() => setShowChatBox(true)}>
           <BsRobot size={40} /> 
        </div>

        <div style={{
            width: "380px",
            height: "500px",
            borderRadius: "10px",
            backgroundColor: colors[props?.theme]?.secondary,
            color: colors[props?.theme]?.primary,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            transition: "all 0.2s ease-in-out",
            transform: showChatBox ? "scale(1)" : "scale(0)",
            transformOrigin: "bottom right",
            opacity: showChatBox ? 1 : 0,
            position: "absolute",
            bottom: props?.autoposition?.includes("bottom") ? "25px" : undefined,
            top: props?.autoposition?.includes("top") ? "25px" : undefined,
            right: props?.autoposition?.includes("right") ? "30px" : undefined,
            left: props?.autoposition?.includes("left") ? "30px" : undefined,
            zIndex: 9999,
         }}>
            <div style={{
                height: "fit-content",
                padding: "12px",
                borderRadius: "10px 10px 0px 0px",
                backgroundColor: colors[props?.theme]?.primary,
                color: colors[props?.theme]?.secondary,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                zIndex: 9998,
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
             }}>
                {
                    profileImage ? 
                    <img
                        src={profileImage.startsWith("https") ? profileImage : `https://server.humanizeai.in/assets/${profileImage}`}
                        alt="Bot Image"
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                        }}
                    />
                    :
                    <BsRobot size={40} />
                }

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "start",
                    marginRight: "auto"
                }}>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                    }}>
                        {title}
                    </span>
                    <span style={{
                        fontSize: "12px",
                    }}>
                        {
                            // having triple dots if description is too long
                            description.length > 50 ? `${description.substring(0, 50)}...` : description
                        }
                    </span>
                </div>


                    <div style={{   
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        cursor: "pointer",
                        transition: "all 0.2s ease-in-out",
                        transform: showChatBox ? "scale(1)" : "scale(0)",
                        opacity: showChatBox ? 1 : 0,
                     }} onClick={() => setShowChatBox(false)}>
                        <AiFillCloseCircle size={20} color='white' />
                    </div>
            </div>

            <div style={{
                width: "100%",
                maxWidth: "100%",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                marginTop: "72px",
                marginBottom: "72px",
                // paddingLeft: "12px",
                // paddingRight: "12px",
                overflowY: "auto",
                zIndex: 9997,
                position: "relative",
            }} ref={messageListRef}>
                {
                    chats.map((chat, index) => {
                        return <Message
                            key={index}
                            message={chat.message}
                            sender={chat.sender}
                            primaryColor={colors[props?.theme]?.primary}
                        />
                    })
                }
            </div>

            <div style={{
                height: "fit-content",
                padding: "12px",
                borderRadius: "0px 0px 10px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9998,
                backgroundColor: "#e4e4e4",
             }}>
                <input
                    type="text"
                    placeholder='Ask me Something'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                        flexGrow: 1,
                        padding: "8px",
                        border: "none",
                        borderBottom: `1px solid ${colors[props?.theme]?.primary}`,
                        outline: "none",
                        fontSize: "15px",
                        background: "transparent",
                    }}
                    onKeyUp={(e)=>{
                        if (e.key === "Enter") {
                            sendMessage()
                        }
                    }}
                />
                <span style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    padding: "10px",
                }}>
                    <TbSend style={{
                        cursor: "pointer",
                        width: "20px",
                        minWidth: "16px",
                        height: "20px",
                        minHeight: "16px",
                        backgroundColor: colors[props?.theme]?.primary,
                        color: colors[props?.theme]?.secondary,
                        borderRadius: "50%",
                    }} onClick={sendMessage} />
                </span>
            </div>

        </div>
    </div>
  )
}

const colors: any = {
    default: {
        primary: "#1f1f1f",
        secondary: "#f0f0f0",
        tertiary: "#F5F8FA",
    },
    blue: {
        primary: "#1F6ED4",
        secondary: "#FFFFFF",
        tertiary: "#F5F8FA",
    },
    red: {
        primary: "#E0245E",
        secondary: "#FFFFFF",
        tertiary: "#F5F8FA",
    },
    green: {
        primary: "#28A745",
        secondary: "#FFFFFF",
        tertiary: "#F5F8FA",
    },
    purple: {
        primary: "#6F42C1",
        secondary: "#FFFFFF",
        tertiary: "#F5F8FA",
    },
}

// IF YOU'RE STILL HERE, CONSIDER APPLYING AS A SOFTWARE DEV AT HUMANIZEAI
interface BotProps {
    className?: string,
    style: React.CSSProperties,
    theme: "default" | "blue" | "red" | "green" | "purple",
    title: string,
    autoposition?: "top-right" | "bottom-right" | "top-left" | "bottom-left",
    apiKey: string,
    initialMessage?: string,
}

interface Chat {
    message: string,
    sender: "bot" | "user",
}

BotEmbed.defaultProps = {
    className: "",
    style: {},
    theme: "default",
    title: "Chatbot",
    autoposition: "bottom-right",
}

const Message = (props: MessageProps) => {
    return (
        <div style={{
            padding: "8px",
            paddingLeft: "12px",
            paddingRight: "12px",
            borderRadius: "10px",
            borderBottomLeftRadius: props.sender === "bot" ? "0px" : "10px",
            borderBottomRightRadius: props.sender === "bot" ? "10px" : "0px",
            backgroundColor: props.sender === "bot" ? "#F5F8FA" : props.primaryColor,
            color: props.sender === "bot" ? "#1F1F1F" : "#FFFFFF",
            display: "flex",
            marginLeft: props.sender === "user" ? "auto" : "10px",
            marginRight: props.sender === "user" ? "10px" : "auto",
            justifyContent: "center",
            textAlign: "left",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            maxWidth: "65%",
            transitionDuration: "0.2s",
         }}>
            <span style={{
                fontWeight: "bold",
                fontSize: "16px",
            }}>
                {props.sender === "bot" ? <BsRobot style={{width: 22, height: 22}} /> : "You"}
            </span>
            <span style={{
                fontSize: "15px",
            }}>
                {
                    props.message === "Loading..." ?
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    :
                    <div dangerouslySetInnerHTML={{__html: props.message}}>
                    </div>
                }
            </span>
        </div>
    )
}

interface MessageProps {
    message: any,
    sender: "bot" | "user",
    primaryColor?: string,
}


export default BotEmbed