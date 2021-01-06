
import './App.css';
import ChatBot from "react-chatbot-kit"
import config from './chatbot/config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';

function App() {
  return (
    <div className="App">
  
    <div className="chatbot" >
     <ChatBot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
     </div>
    </div>
  );
}

export default App;
