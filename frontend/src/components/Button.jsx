import { useNavigate } from "react-router-dom";

import '../styles/Button.css'

function Button({ text, url }) {
    const navigate = useNavigate();

    function registration() {
        navigate(`${url}`);
    }

    return (
        <>
            <button className='redi' onClick={registration}>
                <p>{text}</p>
            </button>
        </>
    );

}

export default Button;