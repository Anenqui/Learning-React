import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {useTransition, animated} from "react-spring";
import NavigationMenu from "./NavigationMenu";

//  let menu
//     let menuMask;

//     if(showMenu){
//         menu=<div className="menu">
//             The menu
//         </div>
//         menuMask=
//         <div className="menu-mask"
//         onClick={() => setShowMenu(!showMenu)}>
            
//         </div>
//     }

            // {menuMask}
            // {menu}

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const masktransitions = useTransition(showMenu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
   const menutransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

 return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon 
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>
      {masktransitions((style, item) =>
        item && (
          <animated.div 
            style={style} 
            className="menu-mask"
            onClick={() => setShowMenu(false)}
          />
        )
      )}

      {menutransitions((style, item) =>
        item && (
          <animated.div 
            style={style} 
            className="menu"
            onClick={() => setShowMenu(false)}
          >
            <NavigationMenu 
            closeMenu={()=>setShowMenu(false)}/>
          </animated.div>
        )
      )}
    </nav>
  );
}

export default Navigation;