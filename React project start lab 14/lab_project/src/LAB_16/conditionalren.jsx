

function Conditionalren(props) {
  return (
    <>
        {props.isdisplay=="true" && <h1>Hello True</h1>}
        {props.isdisplay=="false" && <h1>Hello False</h1>}
    </>
  )

    
}

export default Conditionalren