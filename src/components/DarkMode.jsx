import { useState } from "react";
export const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    let contador = 0;
    const cambiar = () =>{
        const panTotal = document.querySelectorAll("#panTotal")
        const a = document.querySelectorAll("a")
        const p = document.querySelectorAll("p")
        const cajas = document.querySelectorAll(".cajas-live")
        contador ++
        if(contador === 1){
            cajas.forEach(element=>{
                element.classList.remove("cajas-live")
                element.classList.add("caja-live-light")
            })
            p.forEach(element => {
                element.classList.add("text-dark")
                element.classList.remove("text-white")
            });
            a.forEach(element => {
                element.classList.add("text-dark", "fw-bolder")
                element.classList.remove("text-white")
            });
            panTotal.forEach(element => {
                element.classList.remove("color", "color-live")
                element.classList.add("color-light-live")
            });
        }else{
            const cajas2 = document.querySelectorAll(".caja-live-light")
            p.forEach(element => {
                element.classList.remove("text-dark")
                element.classList.add("text-white")
            });
            a.forEach(element => {
                element.classList.remove("text-dark", "fw-bolder")
                element.classList.add("text-white")
            });
            panTotal.forEach(element => {
                element.classList.add("color", "color-live")
                element.classList.remove("color-light-live")
            });
            cajas2.forEach(element=>{
                element.classList.add("cajas-live")
                element.classList.remove("caja-live-light")
            })
            contador=0
        }
    }
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <span style={{ color: darkMode ? "blue" : "#c96dfd" }} className="fs-3">☽</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={cambiar} />
                        <span className="slider round"> </span>
                    </label>
                </div>
                <span style={{ color: darkMode ? "#c96dfd" : "grey" }} className="fs-3">☀︎</span>
            </div>
        </div>
    )

}