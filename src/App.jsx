import { useState } from 'react'
import './App.css'

function App() {
  const [toWork , setTo] = useState([])
  const [task , setTask] = useState("")
  const cItem = (e) => {
    setTask(e.target.value)
  }

  const adTo = () => {
    setTo([...toWork , task])
    setTask("")
  }

  const edem = (index,e) => {
    const upd = [...toWork]
    upd[index] = e.target.value
    setTo(upd)
  }

  const delet = (index) => {
    const upd = [...toWork]
    upd.splice(index,1)
    setTo(upd)
  }

  return (
    <>
      <div className="box">

        <div className="increase">

          <input className="tyype" type="text" value={task} placeholder="Add" onChange={(e) => cItem(e)} />

          <button className="click" onClick={adTo}>Add</button>

        </div>

        <div className="see">
          {toWork.map((task,index) => (
            
            <div key = {index}>
              
              <input className="tyype" type="text" value={task} onChange={(e) => edem(index,e)} />
             
              <button className="remove" onClick={() => delet(index)}>Remove</button>
            </div>
          )
          )}
          </div>
      </div>
    </>
  )
}

export default App