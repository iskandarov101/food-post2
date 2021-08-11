import DashHeader from '../components/DashboardHeader/DashboardHeader'
import DashboardCont from '../containers/Dashboard/DashboardCont'
import Ticket from '../containers/Ticket/Tickets'
import MostDishes from '../containers/MostDishes/MostDishes'
import Diogram from '../containers/Diogram/Diogram'


const DashPage = () => {
    return (
     <div className='container'>
        <div className='container-left '>
        <DashHeader/>
        <DashboardCont/>
        <Ticket/>
       
      </div>
      <div className='container-right'>
       <MostDishes/>
       <Diogram/>
      </div>
     </div>
     
    )
  }
  
  export default DashPage;