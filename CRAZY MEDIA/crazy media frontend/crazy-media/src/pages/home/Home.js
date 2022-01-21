import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import './home.css'
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

function Home() {
    const { user } = useContext(AuthContext);
    if(user !== null){
        let authToken = user.authToken;
        localStorage.setItem("auth-token", `${authToken}`);
    }
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed username={false} />
                <Rightbar profile={false} />
            </div>
        </>
    )
}

export default Home
