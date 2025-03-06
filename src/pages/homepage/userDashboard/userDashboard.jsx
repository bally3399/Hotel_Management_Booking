import { useNavigate } from "react-router-dom";
import Navbar from "../../../component/navbar/Navbar";
import Footer from "../../../component/footer";
import styles from "./UserDashboard.module.css";
//import axios from "axios";
import { useEffect, useState } from "react";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState([]);



    const token = "2345678098";
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;

    useEffect(() => {
        try{
            setLoading(true);
            const response = axios.get("http://api.fortunaehotel.com/api/v1/bookings", )
            setBookings(response);
        }catch(error){
          console.error(error);
        }finally{
            setLoading(false);
        }
    })


// http://hotel-api.fortunaelibrary-api.comapi/v1/bookings/update/{bookingId}

    const handleEdit = (e, bookingId) => {
        e.preventDefault();
        try{
            setLoading(true);
            const response = axios.put(`http://api.fortunaehotel.com/api/v1/bookings/update/${bookingId}`, null, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log("Edited", response);
            alert("Booking edited successfully");
            navigate("/bookings");
        }catch(error){
            console.error(error);
    }
};

// http://hotel-api.fortunaelibrary-api.comapi/v1/bookings/cancel/{bookingId}?userId={userId}

    const handleCancelBooking = (e, bookingId) => {
        try{
            setLoading(true);
            const response = axios.delete(`http://api.fortunaehotel.com/api/v1/bookings/cancel/${bookingId}?userId=${userId}`, null, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(response);
            alert("Booking deleted successfully");
            navigate("/user-dashboard");
        }catch(error){
            console.error(error);
        }
    }



    return (
        <main>
            <Navbar/>
            <div className={styles.dashboard}>
                <button onClick={() => navigate("/create-booking")} className={styles.actionButton}>Create booking</button>
            </div>


            <div>
                {bookings.map(booking => ( 
                    <li key={booking.id}>
                      <p onClick={(e) => handleEdit(e, booking.id)}>Edit</p>
                      <p onClick={(e) => handleCancelBooking(e, booking.id)}>Cancel</p>
                    </li>
            ))}
            </div>
            <Footer/>
        </main>
    );
};

export default Dashboard;
