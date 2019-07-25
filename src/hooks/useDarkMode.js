import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const darkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("dkmode")
    useEffect(() => {
        if (darkMode === true)
        document.querySelector("body").classList.add("dark-mode")
        else
        document.querySelector("body").classList.remove("dark-mode") }, [darkMode])
        
        return [darkMode, setDarkMode]
    }