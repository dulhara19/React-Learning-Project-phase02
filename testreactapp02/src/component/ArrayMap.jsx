const arrayMap = ({names}) => {
    return (
    <div className="App">
        
        <ul>
            {
             names.map((name,index)=>{
                return <li key={index}>{name}</li>  
             })
            }
 
      
        </ul>
        
    </div>
    )
}
export default arrayMap;