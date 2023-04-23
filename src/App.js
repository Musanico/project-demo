import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Select from '@/pages/Select'
import PersonPage1 from '@/pages/PersonPage1'
import PersonPage2 from '@/pages/PersonPage2'

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
         </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
