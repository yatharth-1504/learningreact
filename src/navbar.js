const Navbar = () => {
    const link = "https://www.google.com";
    const title1 = "Directs to home";
    const title2 = "About us";
    const title3 = "For frequent contact MAil : help@gmail.com";
    return (  
        <div className = "nav">
            <ul>
            <li><a href = {link} title= { title1 }>   Home    </a></li>
            <li><a href = {link} title= { title3 }>   Contact </a></li>
            <li><a href = {link} title2= { title2 }> About</a></li>
            </ul>
        </div>
    );
}
 
export default Navbar;