import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
      fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const vanList = vans.map(van => {
        return (
            <div key={van.id} className="van-title">
                <img src={van.imageUrl} alt={van.name} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van type ${van.type} selected`}>{van.type}</i>
            </div>
        )
    })

    return (
        <div className="vans-page-container">
            <h1>Vans page goes here</h1>
            <div className="vans-list">
                {vanList}
            </div>
        </div>
    )
}