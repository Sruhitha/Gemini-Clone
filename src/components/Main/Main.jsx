import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);



  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=""/>
        </div>
        <div className="main-container">

            {!showResult
            ?<>
               <div className="greet">
                <p><span>Hello, Akshitha.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>How to make Vision Board in 2024?</p>
                    <img src={assets.compass_icon} alt=""/>
                </div>
                <div className="card">
                    <p>Breifly summarize about this concept:Data Engineering</p>
                    <img src={assets.bulb_icon} alt=""/>
                </div>
                <div className="card">
                    <p>How to declare 2D list in Java</p>
                    <img src={assets.message_icon} alt=""/>
                </div>
                <div className="card">
                    <p>How to set wallpaper in my desktop</p>
                    <img src={assets.code_icon} alt=""/>
                </div>
            </div>
            </>
            :<div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt=""/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
            }

            <div className="main-bottom">
                <div className="serach-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Yourprivacy and Gemini Apps.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main