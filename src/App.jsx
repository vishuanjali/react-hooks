import { useState ,useEffect, useRef } from "react";
import { react } from "react";
import './App.css'

function App() {
  // USESTATE....................
  // const [counter , setcounter] =useState(10)
  // console.log(counter);
  // const [color , setcolor] =useState("red")
//  let color = "red";
//  const  changecolor=()=>{
//   setcolor('blue');
//    console.log(color);
    // }
    //-----------------------------------------------------------
  //  const[brand , setbrand]=useState('farrari')
  //  const[year ,colorsetyear]=useState('2023')
  //  const[model, setmodel]=useState('roma')
  //  const[color, setcolr]=useState('red')

  // const[car, setcar]=useState({
  //   brand:"farrari",
  //   model:" Remo",
  //   year:"2023",
  //   color:"red"
  // });
  //  const changecolor=()=>{
  //   let color="blue";
  //  setcolr('blue')
  // setcolr({color:"blue"})
  //  }

  // const changecolor=()=>{
  //   setcar((prev)=>{
  //    return{...prev ,
      // brand:"sarrari",
      // model:" demo",
      // year:"2024",
  //     color:"blue"}
  //   })
  // }
//--------------------------------------------------------------
// const[counter,setcounter]=useState(0)

// const increment=()=>{
// setcounter(()=>{
//   counter=counter+1;
//   console.log(counter);
  
// })
// setcounter(counter+3)
// setcounter(counter+1)
// setcounter(counter+1)
// }
//---------------------------------------------------------

//USEEFFECT.......................................

// const[count, setcount]=useState(0)
// const[name, setnamae]=useState('anjali')
// const countinc=()=>
// {setcount(count+1)}
 
// useEffect(()=>{
//   setTimeout(()=>{
//     setcount(count=>count+1)
//   } , 2000)
// },[count,name])
//-------------------------------------------------
  //USEREF................................................
//  const[value,setvalue]= useState(0)
//  const inc=()=>
//  {setvalue(value+1)

//  }

//  const dic=()=>{
//   setvalue(value-1)
//  }

//  const count =useRef(10)
//  console.log(count);
 
// useEffect(()=>{
//   count.current=count.current+1;
// })

// useEffect(()=>{
//   count.current=count.current-1;
// })

// const inputelem =useRef();

// const bnclicked=()=>{
//   console.log(inputelem.current);
//   inputelem.current.style.background="blue"
  
// }
//----------------------------------------------
//USEMEMO..................................................

  return (
    <>
       {/* <h1>my favourate color is {color}!</h1>
       <button onClick={changecolor}>blue</button> */}

       {/* <h1>my {car.brand}</h1>
       <h2>it is a {car.color} {car.model} from {car.year}</h2>
       <button onClick={changecolor}>blue</button> */}


       {/* <h1>count : {counter}</h1>
       <button onClick={increment}>increasse</button> */}

       {/* <h1>i've rendered {count} times!</h1> */}

       {/* <button onClick={inc}>+1</button>
       <h1>{value}</h1>
       <button onClick={dic}>-1</button>
       <h1>render count:{count.current}</h1> */}

        {/*  <input type="text"  ref={inputelem}/>
        <button onClick={bnclicked}>click here</button>
    */}
    </>
  )
}

export default App
