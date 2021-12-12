import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import WineAPI from "../api/WineAPI"

function WinePage() {
  // states
  const [wine, setWine] = useState(null)

  // router props
  const params = useParams()

  // effects
  useEffect(() => {
    const getWine = async () => {
      const data = await WineAPI.fetchWineByID(params.wineID)
      if (data) {
        setWine(data)
      }
    }

    getWine()
  }, [params.wineID])

  // render
  const renderWine = () => {
    if (!wine)
      return null
    
    return (
      <div>
        <h3>Wine: { wine.wine_name }</h3>
        <p>Price: { wine.price }</p>
        <p>Varietal: { wine.varietal }</p>
        <p>Description: { wine.description }</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Wine Page</h2>
      <hr />
      { renderWine() }
    </div>
  )
}

export default WinePage
