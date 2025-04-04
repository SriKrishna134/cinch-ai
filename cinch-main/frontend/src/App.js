import "./App.css";
import { useColorMode } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ChatState from "./context/chatState";
import { useContext } from "react";
import chatContext from "./context/chatContext";
import { ChakraProvider } from "@chakra-ui/react";

function App(props) {
  const {  toggleColorMode } = useColorMode();
  const context = useContext(chatContext);

  // localStorage.removeItem("token")

  return (
  
     
    <ChakraProvider>
    <ChatState>
      <div className="App">
        <Navbar toggleColorMode={toggleColorMode} context={context} />
      </div>
    </ChatState>
    </ChakraProvider>
  
  );
}

export default App;
