import { useEffect, useState } from "react"

type WindowSize = {
    windowWidth: number,
    windowHeight: number
}

export const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    })

    useEffect(() => {
        const resize = () => {
            setWindowSize({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            })
        }

        window.addEventListener("resize", resize)

        return () => window.removeEventListener("resize", resize)
    }, [])

    return windowSize
}
