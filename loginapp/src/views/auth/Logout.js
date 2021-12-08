import Cookies from "js-cookie";
import React,{useState,useEffect,Fragment} from "react";

const Logout = ()=>{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        if(Cookies.get('token')===undefined){
            window.location.replace('http://127.0.0.1:3000/login');
        }else{
            setLoading(false);
        }
    },[]);
    const handleLogout = e=>{
        e.preventDefault();
        console.log("handle Logout");
        fetch('http://127.0.0.1:8000/api/logout',{
            method:'POST',
            credentials:"include",
            headers: {
                'Content-Type':'application/json'

            }
            
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            Cookies.remove('token');
            window.location.replace('http://127.0.0.1:3000/login');
        });
    };
    console.log("Logout");
    return (
        <div>
            {loading === false && (
                <Fragment>
                    <h1>Are you sure you want to logout?</h1>
                    <input type='button' value='Logout' onClick={handleLogout}/>
                </Fragment>
            )}
        </div>
    );
};



export default Logout;