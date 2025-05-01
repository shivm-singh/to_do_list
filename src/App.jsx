import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  let [todolist, settodolist] = useState([])

  let savetodolist=(e)=>{
e.preventDefault()

 let toname=e.target.toname.value
// alert('hello')

if (!todolist.includes(toname)) {
   let final=[...todolist,toname]
   settodolist(final)
}
else
alert('same input again dear')

  }



let list=todolist.map((value,index)=>{
  return(
<Todolistitem value={value} index={index} todolist={todolist} settodolist={settodolist}/>
  )

})


  return (
    <>
    <div className="app">
      <h1>TODO list</h1>
      <form onSubmit={savetodolist}>
        <input type="text" name="toname" id="" />
        <button>Save</button>
      </form>
    </div>

<div className="outerdiv">
  <ul>
 {list}
  </ul>
</div>


</>
  )
}

export default App


function Todolistitem({value,index,todolist,settodolist}){

  function deleterow(){
    let finaldata=todolist.filter((v,i)=>
    i!=index
    )

   settodolist(finaldata) }


//    let checkstatus=(e)=>{
// e.target.
//    }


   
  return(
     
    

    <li> {index+1}    {value}<span onClick={deleterow}>&times;</span></li>
  )
}

 
// function Todolistitem(props){
//   return(
//     <li>{props.value}<span>⨯</span></li>
//   )
// }
