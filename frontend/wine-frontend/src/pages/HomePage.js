import { useState, useEffect } from "react"
import WineAPI from "../api/WineAPI"
import WineList from "../components/WineList"

function HomePage() {
    // states
    const [wines, setWines] = useState([])

    // effects
    useEffect(() => {
      const getWines = async () => {
        const data = await WineAPI.fetchWines()
        if (data) {
          setWines(data.wines)
        }
      }
  
      getWines()
    }, [])
  
    // render
    return (
      <div>
        <h2>Home Page</h2>
        <hr />
        <WineList wines={wines}/>
      </div>
    )
}

export default HomePage

