import { useRef } from 'react'
export default function useDebounce(fn, delay) {
    const timeoutRef = useRef(null)
    return (...args) => {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}