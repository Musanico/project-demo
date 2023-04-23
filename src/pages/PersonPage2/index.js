import "@/pages/PersonPage2/index.css"
import Nav from '@/components/nav'
import PersonSidebar from '@/components/person-sidebar'

function Tperson2(){
  return(
      <div>
        <Nav/>
        <div className="tp2-sidebar">
          <PersonSidebar/>
        </div>
      </div>
  )
}

export default Tperson2