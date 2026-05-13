import { Link, useRoute } from "wouter"
import headers from "./header"

const Header = () => {
    const [match, _] = useRoute("/gallery")
    const imgTag = !match ? 
            <img id="logo" width="485px" height="147px" src={headers.default} /> :
            <img id="logo" width="182px" height="55px" src={headers.stickyPath} />
    return (
        <header className={match ? "slim" : ""}>
            {imgTag}
            <nav>
                <Link href="/"><span className="nav-item">About</span></Link>
                <Link href="/gallery"><span className="nav-item">Gallery</span></Link>
            </nav>
        </header>
    );
}

export default Header;