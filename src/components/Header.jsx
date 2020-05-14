import React from "react";
import {Link} from "react-router-dom";

const Header = ({path, text}) => {
    return (
        <header>
            <Link to={path} className='header-back'>
                <svg version="1.1" id="Capa_1" className='arrow-back' x="0px" y="0px"
                     viewBox="0 0 443.52 443.52" fill="white">
                    <g>
                        <g>
                            <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
				c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
				L143.492,221.863z"/>
                        </g>
                    </g>
                </svg>
            </Link>
            {text}
        </header>
    )
}

export default Header;