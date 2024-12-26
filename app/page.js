import React from 'react'
import Navbar from './components/Navbar'
import RecentProjects from './projects/page'

import ArchitectureServices from './Architectureservices'
import OngoingProjects from './ongoingprojects'
const page = () => {
  return (
    <div>
      <Navbar/>
      <RecentProjects/>
      <ArchitectureServices/>
      {/*footer*/}
      
    </div>
  )
}

export default page
