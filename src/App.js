import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Select from '@/pages/Select'
import PersonPage1 from 'src/pages/PersonPage-intro'
import PersonPage2 from 'src/pages/PersonPage-achieve'
import Talk from "src/pages/PersonPage-talk";
import CompetitionNotice from "src/pages/CompetitionNotice";
import CompetitionFlow from "@/pages/CompetitionFlow";

function App() {
  return (
      //路由配置
      <BrowserRouter>
        <div className="App">
         <Routes>
           {/*创建路由path和组件对应关系*/}
           <Route path="/" element={<Layout/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/select" element={<Select/>}></Route>
           <Route path="/personpage1" element={<PersonPage1/>}></Route>
           <Route path="/personpage2" element={<PersonPage2/>}></Route>
           <Route path="/talk" element={<Talk/>}></Route>
           <Route path="/competition1" element={<CompetitionNotice/>}></Route>
           <Route path="/competition2" element={<CompetitionFlow/>}></Route>
         </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
