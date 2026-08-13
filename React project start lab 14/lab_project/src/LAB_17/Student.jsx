

function Student() {
  const Student = [
    {id : 1 , name : "Parth" , spi : 9.00},
    {id : 2 , name : "Jenish" , spi : 9.22},
    {id : 3 , name : "Om" , spi : 8.97},
    {id : 4 , name : "Kenil" , spi : 8.88}
   ]

   const data = Student.map((temp) => (
        <tr key={temp.id}>
            <td>{temp.id}</td>
            <td>{temp.name}</td>
            <td>{temp.spi}</td>
        </tr>
    ));
   

  return (
    <>
        <h1>Student table</h1>
        <table border={2}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>spi</th>
                </tr>
            </thead>

            <tbody>
                {data}
            </tbody>
        </table>
    </>
  )
}

export default Student