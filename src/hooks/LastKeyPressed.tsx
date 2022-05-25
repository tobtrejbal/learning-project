import { useState, useEffect } from 'react';

function useLastKeyPressed(onKeyPressed: (key: string) => any) {
    const [lastKeyPressed, setLastKeyPressed] = useState<string>("");

    useEffect(() => {
        document.onkeydown = (e) => {
            setLastKeyPressed(e.key);
            onKeyPressed(e.key);
            e.preventDefault();
        }
        return () => {
            document.onkeydown = null;
        };
    }, []);

   /**useEffect(() => {
        onKeyPressed(lastKeyPressed);
    }, [lastKeyPressed]);

    return lastKeyPressed;*/
}

export default useLastKeyPressed;