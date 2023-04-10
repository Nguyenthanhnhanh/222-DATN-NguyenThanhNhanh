
import Navbar from '../../navbar/Navbar'
import Sidebar from '../../sidebar/Sidebar'
import Widget from '../../widget/Widget'
import './hommeadmin.scss'
const HomeAdmin = () => {
    return(
     <div className='home'>
       <Sidebar/> 
       <div className='homeContainer'>
         <Navbar/>
         <div className="widgets">
         <Widget type="user" />
         <Widget type="order" />
         <Widget type="earning" />
         <Widget type="balance" />
       </div>
       </div>
      
     </div>
    )
}
export default HomeAdmin