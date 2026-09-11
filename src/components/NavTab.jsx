import { useRef } from 'react'

const NavTab = ({ children, setPosition, className }) => {
    const navRef = useRef(null);
    return (
        <div
            ref={navRef}
            className={className}
            onMouseEnter={() => {
                if(!navRef?.current) return;

                const { width } = navRef.current.getBoundingClientRect();

                setPosition({
                    left: navRef.current.offsetLeft,
                    width: width,
                    opacity: 1,
                })
            }}
        >
            { children }
        </div>
    )
}

export default NavTab