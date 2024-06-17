import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [extented, setExtended] = useState(false);

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} alt="menu_icon" className='menu' />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="new chat" />
                    {extented ? <p>New Chat</p> : null}
                </div>
                {extented ? <div className="recent">
                    <p className='recent-title'>Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="message_icon" />
                        <p>What is react...</p>
                    </div>
                </div> : null
                }

            </div>
            <div className='bottom'>

                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="question_icon" />
                    {extented?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="history-icon" />
                    {extented? <p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="setting_icon" />
                    {extented?<p>Settings</p>:null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar
