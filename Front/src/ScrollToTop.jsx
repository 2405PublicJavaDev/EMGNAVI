import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { nav } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [nav]);

    return null;
}