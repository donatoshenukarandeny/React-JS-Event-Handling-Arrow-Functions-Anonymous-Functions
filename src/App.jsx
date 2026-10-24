function App() {

  function hello(){
    console.log("Hello 1");
  }

  const hello2 =() =>{
    console.log("Hello 2");
  }

  function hello3(){
    console.log("Hello 1");
  }
 
  return (
    <>
      <div id="wrapper">
        <button onClick={hello}>Click 1</button>
        <button onClick={hello2}>Click 2</button>
        <button onClick={hello3}>Click 3</button>
      </div>
    </>
  )
}

export default App
