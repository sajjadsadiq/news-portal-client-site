import {useState, useEffect} from "react";
import "./Home.css"
import { Header } from '../../components/Header/Header'
import { Posts } from '../../components/Posts/Posts'
import { SideBar } from '../../components/SideBar/SideBar'
import axios from "axios"
export const Home = () => {
    const [posts, setPostos] = useState([])
    useEffect(() =>{
        const fatchPosts = async ()=>{
            const res = await axios.get("/posts")
            console.log("hello");
            console.log(res);
        }
        fatchPosts()
    }, [])
    return (
        <div>
            <Header/>
            <div className="home">
                <Posts/>
                <SideBar/>
            </div>
        </div>
    )
}
