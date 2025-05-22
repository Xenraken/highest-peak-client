import SearchBar from "../components/SearchBar"
import Bar from "../components/Bar"
import PlaceholderVideo from "../components/PlaceholderVideo"
import styles from './home.module.css';
import ButtonCreate from "../components/ButtonCreate";
import { Link } from "react-router-dom";

function Home()
{
    return (
        <div>
            <SearchBar />
            <Link to="/" style={{
                position: "absolute", top: "-8px", left: "20px", margin: 0, textDecoration: "none", color: "White"
            }}> <h1>Highest Peak</h1></Link>
            <Bar />
            <div className={` ${styles.buttonContainer}`}>
                <ButtonCreate className="button" text="Signup" />
                <ButtonCreate className="button" text="Login" />
            </div>

            <div className={` ${styles.videoContainer}`}>
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />

            </div>


        </div>)
}


export default Home;