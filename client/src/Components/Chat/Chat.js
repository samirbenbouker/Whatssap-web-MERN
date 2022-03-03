import React from 'react'
import "./Chat.css"

// COMPONENTS FROM MATERIAL/UI
import { Avatar, IconButton } from '@material-ui/core'

// ICONS FROM MATERIAL/ICONS
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
  return (
    <div className='chat'>
      <div className='chat--header'>
        <Avatar />

        <div className='chat--headerInfo'>
          <h3>ROOM NAME</h3>
          <p>LAST SEEN AT...</p>
        </div>  

        <div className='chat--headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='chat--body'>
        <p className='chat--message'>
          <span className="chat--name">
            Samir
          </span>

          This is  a message

          <span className='chat--timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chat--message chat--reciever'>
          <span className="chat--name">
            Samir
          </span>

          This is  a message

          <span className='chat--timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className='chat--footer'>
        <InsertEmoticonIcon />
        <form>
          <input 
            placeholder='Type a message'
            type="text"
          />
          <button type='submit'>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat