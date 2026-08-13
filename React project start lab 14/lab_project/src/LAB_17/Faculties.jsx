
function Faculties() {

   const faculties = [
    {id : 1 , name : "arjun bala" , subject : "FEWT"},
    {id : 2 , name : "Dhvanik zala" , subject : "P&B"},
    {id : 3 , name : "deep padliya" , subject : "DBMS"},
    {id : 4 , name : "PS jadeja" , subject : "DS"}
   ]

   const data = faculties.map((temp) => (
        <tr key={temp.id}>
            <td>{temp.id}</td>
            <td>{temp.name}</td>
            <td>{temp.subject}</td>
        </tr>
    ));
   

  return (
    <>
        <h1>Faculties table</h1>
        <table border={2}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>subject</th>
                </tr>
            </thead>

            <tbody>
                {data}
            </tbody>
        </table>
    </>
  )
}

export default Faculties