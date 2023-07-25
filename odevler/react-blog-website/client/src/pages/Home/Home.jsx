import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts")
            console.log(res)
        }
        fetchPosts();
    }, [])
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
        </>
    )
}

export default Home