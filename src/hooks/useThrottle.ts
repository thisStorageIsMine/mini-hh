import { useState } from 'react'

const useThrottle = (
    cb: (...args: unknown[]) => void,
    ms: number
) => {
    const [isThrottling, setIsThrottling] = useState(false);

    function wrapper(...args: unknown[]) {
        if (isThrottling) return;
        cb(...args);
        setIsThrottling(true)
        setTimeout(() => {
            setIsThrottling(false)
        }, ms)


    }

    return {
        wrapper,
        isThrottling
    }
}

export { useThrottle }