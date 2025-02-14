import React, { useState } from "react";
import "./Menu.css"


const Menu = () => {
    const [controllMenu, setControllMenu] = useState(false)

    const openMenu = () => {
        setControllMenu(!controllMenu)
    }

    return (
        <div class="menu" onClick={openMenu} style={{backgroundColor: "black"}}>
            {controllMenu ? (
                <h1 backgroundColor="red">TRUE</h1>
            ) : (
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        x="10" y="10"
                        width="15" height="15"
                        fill="black"
                        stroke="white"
                        stroke-width="3"
                    />
                    <rect
                        x="10" y="40"
                        width="15" height="15"
                        fill="black"
                        stroke="white"
                        stroke-width="3"
                    />
                    <rect
                        x="10" y="70"
                        width="15" height="15"
                        fill="black"
                        stroke="white"
                        stroke-width="3"
                    />
                    </svg>
            )}
        </div>
    )

}

export default Menu;