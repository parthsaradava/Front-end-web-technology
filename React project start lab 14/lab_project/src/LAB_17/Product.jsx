

function Product() {
  const Product = [
    {id : 1 , Productname : "TV" , price : 90000},
    {id : 2 , Productname : "AC" , price : 56000},
    {id : 3 , Productname : "Mobile" , price : 20000},
    {id : 4 , Productname : "freeze" , price : 35000}
   ]

   const data = Product.map((temp) => (
        <tr key={temp.id}>
            <td>{temp.id}</td>
            <td>{temp.Productname}</td>
            <td>{temp.price}</td>
        </tr>
    ));
   

  return (
    <>
        <h1>Product table</h1>
        <table border={2}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {data}
            </tbody>
        </table>
    </>
  )
}

export default Product