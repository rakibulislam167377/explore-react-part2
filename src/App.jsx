
import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'


function App() {
 
function handleClick(){
  alert('button click')
}
const handleClick2=()=>{
  alert('Payment Me')
}
  return (
    <>
    <Friends></Friends>
    <Users></Users>
   <Team></Team>
      <Counter></Counter>
      <h3> React Core Concepts2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button  onClick={handleClick2}>Payment</button>
      
    </>
  )
}

export default App
