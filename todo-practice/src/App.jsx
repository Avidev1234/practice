import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Inputtag from './component/Inputtag'
import Table from './component/Table'
function App() {

  let tableArr = [
    {
      sl: "1",
      list: "javascrpit",
      date: "12/2/2024"
    },
    {
      sl: "2",
      list: "python",
      date: "12/2/2024"
    },
    {
      sl: "3",
      list: "java",
      date: "12/2/2024"
    },
    {
      sl: "4",
      list: "react",
      date: "12/2/2024"
    },
    {
      sl: "5",
      list: "angular",
      date: "12/2/2024"
    }
  ]
  return (
    <div className='w-100 d-flex flex-column'>
      <div className="container text-center">
        <Table />
      </div>
      <div>
        <Inputtag table={tableArr}/>
      </div>
    </div>
  )
}

export default App
