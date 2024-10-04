
import './App.css'
import Header from './components/Header'
import OverviewContainer from './components/OverviewContainer'
import OverviewTodayCoainter from './components/OverviewTodayCoainter'
import data from "../data/data.json"
function App() {

  return (
    <> 
    <Header/>
    <OverviewContainer data={data}/>
    <OverviewTodayCoainter data={data}/>
    </>
  )
}

export default App
