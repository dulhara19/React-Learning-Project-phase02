const arrayfilter = ({names}) => {

    const filteredNames= names.filter((name)=>(name.startsWith('A'))); //filtering names starting with A
    console.log(filteredNames);

    return (
    <div className="App">
        
        <ul>
            {
             filteredNames.map((namess,index)=>{
                return (<li key={index}>{namess}</li> )
             })
            }
 
      
        </ul>
        
    </div>
    )
}
export default arrayfilter;