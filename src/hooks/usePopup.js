import { useEffect, useState } from "react";

const usePopup = (ref) => {
    const [isShow, setIsShow] = useState();

    function togglePopup(e) {
        e.stopPropagation();
        setIsShow(!isShow);
    }
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsShow(false);
        }
    }

    useEffect(() => {
        if (isShow) {
            document.addEventListener("click", handleClickOutside, true);
        } else {
            document.removeEventListener("click", handleClickOutside, true);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [isShow])

    return {
        isShow,
        togglePopup,
        setIsShow,
    }
}

export default usePopup;