import Content from "./components/Content";
import { MyProvider } from "./context/MyProvider";
const App = () => {
  return (
   <MyProvider>
     <Content/>
   </MyProvider>
  );
};

export default App;
