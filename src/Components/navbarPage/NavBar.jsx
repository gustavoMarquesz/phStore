import { Link } from "react-router-dom";


function NavBar (){
    return(
        <section>
            <header>
                <nav>
                    <span>PH</span>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/services">Serviços</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    )

}

export default NavBar