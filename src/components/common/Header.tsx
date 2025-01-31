function Header() {
  
    return (
        <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">譬嘶&啦雾</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">主页</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">纪念日</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./christmas.html">圣诞快乐</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">留言</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
  }
  
  export default Header