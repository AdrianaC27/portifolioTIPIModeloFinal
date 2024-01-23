import { useNavigate } from "react-router-dom"
import Style from './SytleVoltaHome.module.css'

function VoltaHome(){
    const navigate = useNavigate();

    const handleHome = () => {
        return navigate("/");
    }

    return(
        <div className={Style.dvolta}>
            <button onClick={handleHome}>Home</button>
        </div>
    )
}

export default VoltaHome;