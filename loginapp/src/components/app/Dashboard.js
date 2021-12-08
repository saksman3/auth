import Cookies from "js-cookie";
import React,{useState,useEffect,Fragment} from "react";

const Dashboard = () =>{
    //const [userEmail,setUserEmail] = useState('');
    const [userName,setUserName] = useState('');
    const [loading,setLoading] = useState('');
    
    useEffect(()=>{
        if(Cookies.get('token') === undefined){
           console.log("Undefined.");
           window.location.replace('http://127.0.0.1:3000/login');
        }
        else{
            fetch('http://127.0.0.1:8000/api/user',{
                method:'GET',
                credentials:"include",
                
                headers:{
                    'Content-Type':'application/json'
                    
                     
                }
            }).then(res =>res.json())
            .then(data=>{
                //setUserEmail(data.email);
                setLoading(false);
                setUserName(data.name);
            })
        }
    },[]);
    return (<div>
            {loading === false && (
                <Fragment>
                    <h1>Dashboard</h1>
                    <h2>Hello {userName}</h2>
                </Fragment>
            )}
    </div>);
};

export default Dashboard;