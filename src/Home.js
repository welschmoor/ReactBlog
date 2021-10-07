
import React from "react"
import Blogposts from "./Blogposts.js"
import useData from "./customHooks.js"

// const blogData = [
//     { id: 1, title: 'We moved to a new house!', paragraph: 'So, how is it going everyone', },
//     { id: 2, title: 'CNN finally publishes real new after 20 years!', paragraph: 'So, how is it going everyone', },
//     { id: 3, title: 'Something something... bright side', paragraph: 'So, how is it going everyone', },
//     { id: 4, title: 'Kek is not bur and bur is not lol', paragraph: 'But is kek === lol?', },
// ]



const Home = () => {
    const { blogS, setBlogS } = useData('http://localhost:8111/blogs')

    // const [blogS, setBlogS] = useState(null)


    // useEffect( ()=> {
      
    //     const fetchFunction = async ()=> {
    //       try {
    //         const fetchdata = await fetch('http://localhost:8111/blogs')
    //         const datajson = await fetchdata.json()

    //         console.log('json parsed: ', datajson)
    //         setBlogS(datajson)
    
    //       } catch(error) {console.error('37', error)}
    //     }

    //     setTimeout(()=> {
    //         fetchFunction()
    //     }, 2000)
    //   }, [])
    

    return (
        <section className="home-section-grid">

            <div className="sidepost-col">
                <p>Kek</p>
                <p>Kek</p>
                <p>Kek</p>
            </div>
           
           {blogS ? <Blogposts blogS={blogS} title={"Blogs"} setBlogS={setBlogS}/> : <div className="spinner">&nbsp;</div> }
       
            <div className="sidepost-col">
                <p>Kek</p>
                <p>Kek</p>
                <p>Kek</p>
            </div>

        </section>
    )
}

export default Home;