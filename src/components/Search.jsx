
import styles from "./Search.module.css";
import {FaSearch} from"react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router";


export function Search() {
    const [searchText, setSearchText] = useState("");
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        history.push("/?search="+searchText);

    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchImput} type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                <button className={styles.searchButton} type="submit"><FaSearch size={20}/></button>
            </div>
        </form>
    )
}
