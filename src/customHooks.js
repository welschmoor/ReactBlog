
import { useEffect, useState } from "react"



const useData = (url) => {
    const [blogS, setBlogS] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()
        const fetchFunction = async () => {
            try {
                const fetchdata = await fetch(url, { signal: abortCont.signal })
                const datajson = await fetchdata.json()

                console.log('json parsed: ', datajson)
                setBlogS(datajson)

            } catch (error) {
                if (error.name === "AbortError") {
                    console.log('fetch aborted')
                } else {
                    console.error('37', error)
                }
            }
        }

        setTimeout(() => {
            fetchFunction()
        }, 200)

        return () => abortCont.abort()
    }, [url])

    return { blogS, setBlogS }
}

export default useData