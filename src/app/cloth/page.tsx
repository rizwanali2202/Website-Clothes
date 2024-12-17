import React from "react"

const Cloth = () => {

    const clothData = [
        {id: 1, name: "Baby", price : 600, description : "Baby Suit", image: "/pic11.jpg"},
        {id: 2, name: "Babydress", price : 800, description : "Babies Suit", image: "/pic12.webp"},
        {id: 3, name: "Twinsbaby", price : 650, description : "Beautyful suit ", image: "/pic13.webp"},
        {id: 4, name: "Cute", price : 900, description : "Natural beauty", image: "/pic14.jpg"},
        {id: 5, name: "Beautyfull", price : 9500, description : "Babydoll beauty", image: "/pic15.jpg"},
        {id: 6, name: "Nice", price : 500, description : "beauty", image: "/pic16.jpg"},
    ]
    return (
       <div>
            <div className="clothes">
                {clothData.map((cloth)=>(
                    <div key={cloth.id} className="cloth-card">
                    <img src={cloth.image} alt={cloth.name} />
                    <h3>{cloth.name}</h3>
                    <p>{cloth.description}</p>
                    <div className="price">Rs{cloth.price}</div>
                    <button>Add to Cart</button>
                </div>
                ))}
            </div>
       </div>
    )
}
export default Cloth
