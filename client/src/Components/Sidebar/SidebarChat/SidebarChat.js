import React from 'react'
import './SidebarChat.css'

// COMPONENTS FROM MATERIAL/UI
import { Avatar } from '@material-ui/core'

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat--info'>
            <h2>ROOM NAME</h2>
            <p>THI IS THE LAST MESSASGE</p>
        </div>
    </div>
  )
}

export default SidebarChat