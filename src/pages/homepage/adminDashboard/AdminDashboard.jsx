import { useNavigate } from "react-router-dom";
import Navbar from "../../../component/navbar/Navbar";
import Footer from "../../../component/footer";
import styles from "./AdminDashboard.module.css";
import { useEffect, useState } from "react";
import axios from 'axios';


const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [rooms, setRooms] = useState([])
    const [type, setType] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
   const [filteredRooms, setFilteredRooms] = useState([]);


    const token = "2345678098";
    useEffect(() => {
        try{
            setLoading(true);
            const response = axios.get("http://api.fortunaehotel.com/api/v1/rooms/hotel/1", null, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            setRooms(response);
        }catch(error){
console.error(error);
        }finally{
            setLoading(false);
        }
    })



    const handleUpdate = () => {
      navigate("/edit-room");
    }


    const handleDelete = () => {
        try{
            setLoading(true);
            const response = axios.delete("http://api.fortunaehotel.com/api/v1/rooms/2", null, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log("Deleted");
            alert("Room deleted successfully");
            navigate("/rooms");
        }catch(error){
            console.error(error);
        }
    }

    const handleCheckAvailable = () => {
        try{
            setLoading(true);
            const response = axios.get("http://api.fortunaehotel.com/api/v1/rooms/hotel/1/available", null, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
        }catch(error){
            console.error(error);
    }
}

const DeactivateRoom = () => {
    try{
        setLoading(true);
        const response = axios.put("http://api.fortunaehotel.com/api/v1/rooms/hotel/1/deactivate/1", null, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
    }catch(error){
        console.error(error);
    }
}

const activateRoom = () => {
    try{
        setLoading(true);
        const response = axios.put("http://api.fortunaehotel.com/api/v1/rooms/hotel/1/activate/1", null, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
    }catch(error){
        console.error(error);
    }
}

const handleFilterByType = () => {
    try{
        setLoading(true);
        const response = axios.get(`http://api.fortunaehotel.com/api/v1/rooms/hotel/1/filter?type=${type}`, null, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        setFilteredRooms(response);
    }catch(error){
        console.error(error);
    }
}

// http://hotel-api.fortunaelibrary-api.comapi/v1/rooms/filter/price?minPrice={minPrice}&maxPrice={maxPrice}

const handleFilterByPriceRange = () => {
    try{
        setLoading(true);
        const response = axios.get(`http://api.fortunaehotel.com/api/v1/rooms/filter/price?minPrice=${minPrice}&maxPrice=${maxPrice}`, null, )
        setFilteredRooms(response);
    }catch(error){
        console.error(error);
    }
};


// http://hotel-api.fortunaelibrary-api.com/api/v1/rooms/1/availability

const handleFilterByState = () => {
    try{
        setLoading(true);
        const response = axios.get(`http://api.fortunaehotel.com/api/v1/rooms/filter/state?state={}`, null, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        setFilteredRooms(response);
    }catch(error){
        console.error(error);
    }
};

const getAvailableRooms = () => {
    try{
        setLoading(true);
        const response = axios.get(`http://api.fortunaehotel.com/api/v1/rooms/1/availability`, null, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        setFilteredRooms(response);
    }catch(error){
        console.error(error);
    }
}

   // http://api.fortunaehotel.com/api/v1/rooms/2


    return (
        <main>
            <Navbar/>
            <div className={styles.dashboard}>
                <button onClick={() => navigate("/create-hotel")} className={styles.actionButton}>Create Hotel</button>
                <button onClick={() => navigate("/list")} className={styles.actionButton}>List Of Hotel</button>
                <button onClick={() => navigate("/roomDetails")} className={styles.actionButton}>Get Hotel Details</button>
                <button onClick={() => navigate("/add-room")} className={styles.actionButton}>Add Room To Hotel</button>
                <button onClick={() => navigate("/delete")} className={styles.actionButton}>Delete Hotel</button>
                <button onClick={() => navigate("/view")} className={styles.actionButton}>Get Total Hotel In State</button>
                <button onClick={() => navigate("/ViewHistory")} className={styles.actionButton}>Delete Room From Hotel</button>
            </div>

            <div className="filter">
                Filter by type, price range, Price & State, available rooms
            </div>





            <div>
                {rooms.map(room => {
                    <li key={room.id}>
                      <img src={room.img} alt="image" />
                      <p onClick={handleUpdate}>Edit</p>
                      <p onClick={handleDelete}>Delete</p>
                      <p>Activate</p>
                    </li>
                })}
            </div>
            <Footer/>
        </main>
    );
};

export default Dashboard;
