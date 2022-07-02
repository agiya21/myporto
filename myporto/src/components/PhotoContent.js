import React from "react"
import Pics from './Pics'
import photo1 from './pics/AA014.jpg'
import photo2 from './pics/AA020.jpg'

function PhotoContent() {
    return (
        <div>
            <Pics src={photo1} />
            <Pics src={photo2} />
        </div>
    )
}

export default PhotoContent