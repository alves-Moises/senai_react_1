export function Img({name, age, imgurl}){
    return (
        
        <div>
            <h2> Bem vindo</h2>


            <div style={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: ".1px",

             }} >
                <img src={imgurl}/>
            </div>
            <p>Name: {name}</p>
            <p>Idade: {age}</p>
        </div>
        
    )
}