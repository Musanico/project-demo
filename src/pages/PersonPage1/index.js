import "@/pages/PersonPage1/index.css"
import Nav from '@/components/nav'
import PersonSidebar from '@/components/person-sidebar'
import ScrollLock from 'react-scrolllock';

function Tperson1(){
  return(
      <div>
          <Nav/>
          <ScrollLock>
            <div className="tp1-sidebar">
              <PersonSidebar/>
            </div>
          </ScrollLock>
          <div className="tp1-main">
            <div>
              <img src={require("@/assets/example.png")}  className="tp1-avatar" alt=""/>
            </div>
          </div>
      </div>
  )
}

export default Tperson1