import Layout from "../component/layout/Layout";
import BookRoomPage from "../pages/homepage/booking/BookRoom";
import RoomsPage from "../pages/homepage/rooms/Rooms";
import Register from "../pages/homepage/register/Register";
import Login from "../pages/homepage/login/Login";
import TourPage from "../pages/homepage/tour/Tour";
import CreateHotel from "../pages/homepage/createHotel/CreateHotel";
import AdminDashboard from "../pages/homepage/adminDashboard/AdminDashboard";
import AddRoom from "../pages/homepage/AddRoom/Addroom";
import EditRoom from "../pages/homepage/editRoom/EditRoom";
import UserDashboard from "../pages/homepage/userDashboard/userDashboard";
import About from "../pages/homepage/about/About";
import RoomDetailsPage from "../pages/homepage/roomDetails/RoomDetails";
import ListOfHotelPage from "../pages/homepage/listOfHotel/ListOfHotel";




export const ROUTES = [
    {
        path:"/",
        element: <Layout/>,
    },

    {
        path:"/register",
        element: <Register/>,
    },


    {
        path:"/login",
        element: <Login/>,
    },

    {
        path:"/book",
        element: <BookRoomPage/>,
    },
    {
        path:"/rooms",
        element: <RoomsPage/>,
    },
    {
        path:"/tour",
        element: <TourPage/>,
    },
    {
        path:"/create-hotel",
        element: <CreateHotel/>,
    },

    {
        path:"/admin-dashboard",
        element: <AdminDashboard/>,
    },

    {
        path: "/user-dashboard",
        element: <UserDashboard/>,
    },

    {
       path: "/add-room",
         element: <AddRoom/>,
    },
    {
        path: "/edit-room",
        element: <EditRoom/>,
    },
    {
        path:"/about",
        element: <About/>,
    },
    {
        path:"/roomDetails",
        element: <RoomDetailsPage/>,
    },

    {
        path:"/list",
        element: <ListOfHotelPage/>,
    },


]