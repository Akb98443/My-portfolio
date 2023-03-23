import "./floating-nav.css";
import data from "./data.js"

function FloatingNav() {
    return (
        <nav id="floating__nav">
                
                <ul className="floationgNav__menu">
                    {
                data.map((item)=>{
                    return (<li key={item.id}><a href={item.link} className = "floatingNav__icon">
                        {item.icon}
                        </a></li>)
                })
            }
                </ul>
        </nav>
    
        )

}

export default FloatingNav;