import { useState, useEffect } from 'react';

function useKeyCombinationPressed(key: string, onKeyPressed: () => any) {
    const [lastKeyPressed, setLastKeyPressed] = useState<string>("");

    useEffect(() => {
        document.onkeydown = (e) => {
            if (e.key == key && e.ctrlKey) {
                setLastKeyPressed(e.key);
                onKeyPressed();
                e.preventDefault();
            }
        }
        return () => {
            document.onkeydown = null;
        };
    }, []);

   /**useEffect(() => {
        onKeyPressed(lastKeyPressed);
    }, [lastKeyPressed]);*/

    return lastKeyPressed;
}

export default useKeyCombinationPressed;