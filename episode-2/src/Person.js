export const Person = (props)=>{
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <h2>Email : {props.email}</h2>
            <h2>Age : {props.age}</h2>
            <h3>Married : {props.isMarreid ? "yes" : "No" }</h3>
            {props.courses.map((course)=>(
                <h4>{course}</h4>
            ))}
        </div>
    )
}