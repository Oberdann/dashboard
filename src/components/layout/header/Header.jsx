import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FaUser, FaGear } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

import styles from "./Header.module.css"

function Header() {

    const [page, setPage] = useState()
    const { pathname } = useLocation()


    useEffect(() => {
        let alternationPage = () => {
            if (pathname === "/") {
                setPage("Dashboard");
                return;
            }
            setPage(pathname.charAt(1).toUpperCase() + pathname.slice(2));
        };

        alternationPage();
    }, [pathname]);

    return (
        <header className={styles.header_content}>

            <h4>{page}</h4>

            <div className={styles.div_container}>

                <div className={styles.search_bar}>
                    <label htmlFor="search"><CiSearch size={18} /></label>
                    <input type="search" name="search" id="search" placeholder="Clique aqui..." />
                </div>

                <Link className={styles.singIn_link}> <FaUser size={15} /> Sing In </Link>

                <Link> <FaGear size={15} /> </Link>

                <Link> <IoNotifications size={15} /> </Link>
            </div>

        </header>
    )
}

export default Header;