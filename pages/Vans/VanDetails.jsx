import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetails() {
    const params = useParams()
    const [van, setVan] = React.useState(null)
    React.useEffect(() => {
      fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setVan(data.vans)
        })
        .catch(error => console.log('Error fetching vans:', error))
    }, [params.id])

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h1>{van.name}</h1>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h1>Loading...</h1>
            }
        </div>
    )
}