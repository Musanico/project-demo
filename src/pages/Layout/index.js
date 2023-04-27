import Nav from '@/components/nav'
import Graph from '@/components/rotograph'
import "@/pages/Layout/index.css"
import Project from '@/components/college-project'
import Calendar from '@/components/calendar'
import Notice from '@/components/notice'

function Layout(){
  return(
      <div>

        <Nav/>
        <div className="layout-body">
          <Graph/>
          <div className="middle">
            <Project/>
            <Notice/>
            <Calendar/>
          </div>
        </div>

      </div>
  )
}

export default Layout