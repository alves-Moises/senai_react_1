import "./Img.css"

export function Img({name, age, imgurl}){
    return (
        
        <div>
            {/* <h2> Bem vindo</h2> */}


            <div style={{ 
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
                margin: "0",
                marginTop: "10px",
                backgroundColor: "#958",
                width: "300px", 
                border: '1px solid black', borderRadius: '20px' 
                

             }} >
                <img style={{ 
                    borderRadius: "20px",
                    
                 }}
                
                    src={imgurl}
                />
                <div className="profileAtrr">

                <p className=" "><strong>Name:</strong>{name}</p>
                <p className=" "><strong>Idade:</strong> {age}</p>
                </div>
            </div>
        </div>
        
    )
}