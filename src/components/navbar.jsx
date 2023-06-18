
function Navbar() {
    return (
        <>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-item nav-link" href="#Home">Home</a>
            <a class="nav-item nav-link" href="#Level-1">Level 1</a>
            <a class="nav-item nav-link" href="#Level-2">Level 2</a>
            <a class="nav-item nav-link" href="#Level-3">Level 3</a>
            <a class="nav-item nav-link" href="#Secure">Secure Version</a>
        </div>
        </div>
        </nav>
        <div id="Home">
            <div className="main">
                <h1>XSS lab</h1>
                <h3>by: Yash Singh Chauhan</h3>
            </div>
        </div>
        </>
    )
}

export default Navbar;