function Map() {

    const fruits = ["apple" , "Mango" , "Banana" , "strawbarry"]

  return(
    <>
     <h1>Map mathod</h1>
     <ul style = {{listStyleType : 'disc'}}>
        {fruits.map((fruit , index)=>{
            return <li key={index}>{fruit}</li>
        })}
     </ul>
    </>
  );
}

export default Map;
