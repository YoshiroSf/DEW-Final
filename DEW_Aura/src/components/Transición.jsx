import { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../assets/styles/main.css"

const Transición = () => {
    const arrayOfTitles = ['Sobre nosotros y', 'Ubicación'];
    const [paragraphCounter, setPragraphCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPragraphCounter((currentValue) => {
                if (currentValue + 1 === arrayOfTitles.length) {
                    return 0;
                }
                return currentValue + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <SwitchTransition>
            <CSSTransition
                key={arrayOfTitles[paragraphCounter]}
                classNames="fade"
                timeout={500}
            >
                <div className="App">
                    <h2>{arrayOfTitles[paragraphCounter]}</h2>
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}

export default Transición;
