import { useEffect } from 'react';
import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';

import { channel } from './pusher';

function App() {
  

  useEffect(() => {
    // once
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="app">
      <div className='app--body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
