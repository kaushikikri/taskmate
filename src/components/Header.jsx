import logo from '../assets/logo.png'
export default function Header({ theme, setTheme }) {

    return (
        <header>
            <div className="header-img">
                <img src={logo} alt="logo" />
                <span className="head-title"> Taskmate</span>
            </div>
            <div className="themes">
                <span  className={`light ${theme === "light" ? "active" : null}`} onClick={()=> setTheme("light")}></span>
                <span  className={`greyish ${theme === "greyish" ? "active" : null}` }  onClick={()=> setTheme("greyish")}></span>
                <span  className={`black ${theme === "black" ? "active" : null}`} onClick={()=> setTheme("black")}></span>
                <span  className={`spark ${theme === "spark" ? "active" : null}`} onClick={()=> setTheme("spark")}></span>
                <span  className={`space ${theme === "space" ? "active" : null}`} onClick={()=> setTheme("space")}></span>
                <span  className={`night ${theme === "night" ? "active" : null}`} onClick={()=> setTheme("night")}></span>
            </div>
        </header>
    )
}
