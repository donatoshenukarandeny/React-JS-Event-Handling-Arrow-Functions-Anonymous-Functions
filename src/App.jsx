function App() {

  function hello(e){
    console.log("Hello 1" , e.target);
  }

  const hello2 =() =>{
    console.log("Hello 2");
  }

  function hello3(name,e){
    console.log("Hello 3 " + name,e);
  } 

  const hello4 = (name,i) => {
    console.log("Hello 4 " + name,i);
  }
 
  return (
    <>
      <div id="wrapper">
        <button onClick={hello}>Click 1</button>
        <button onClick={hello2}>Click 2</button>
        <button onClick={(e) => {hello3("Learning", e.target)}}>Click 3</button>
        <button onClick={(i) => {hello4("Learning" , i)}}>Click 4</button>
      </div>
    </>
  )
}

export default App
