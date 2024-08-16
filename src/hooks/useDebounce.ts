import { useState } from 'react'

const useDebounse = (
    cb: (...args: any[]) => void,
    ms: number
) => {
    const [isDebouncing, setIsDebouncing] = useState(false);
    let timerId: number;

    function wrapper(...args: any[]) {
        if (timerId) {
            clearTimeout(timerId)
        }

        timerId = setTimeout(() => {
            cb(...args)
        }, ms)
    }


    return {
        wrapper,
        isDebouncing
    }
}

export { useDebounse }