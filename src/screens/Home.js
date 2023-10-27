import React, { useState } from "react";
import './styles/Button.css';

const Generator=()=>{
    const [count, setCount] = useState(0); //This is useState hook in react. Initial value of this 'count' is set to 0.

    const handleIncrement =()=>{
        setCount(count+1);
    }
    const handleDecrement =()=>{
        setCount(0);
    }

    return(
        <div>
            <p style={styles.count}>Count:{count}</p>
            <button onClick={handleIncrement}>
                Generate
            </button>
            <div style={{marginTop:10, alignSelf: 'center',marginLeft:18 ,}}>
                <button onClick={handleDecrement}>
                    Reset
                </button>
            </div>       
        </div>
    )
}

const Home=()=>{
    return(
        <div style={styles.container}>
            <div style={styles.buttonStyle}>
                <Generator />
            </div>
            
        </div>
    )
}

export default Home;

const styles = {
    container:{
        display: "flex",
        justifyContent: 'center',
    },
    buttonStyle:{
        marginTop: 250,
    },
    count:{
        display:'flex', 
        justifyContent:'center',
        fontSize:30,
    }
}