import { useEffect } from 'react';
export const useIntervalCheck = (callback, delay) => {
    useEffect(() => {
        const intervalId = setInterval(callback, delay);
        return () => clearInterval(intervalId); // 이 함수는 컴포넌트가 unmount되거나 dependency가 변경될 때 호출됩니다.
    }, [callback, delay]);
};