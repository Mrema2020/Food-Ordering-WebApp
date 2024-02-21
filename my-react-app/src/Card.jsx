

function Card (props){
    return (
        <div className="foodCard">
            <img className="card-image" src={props.src } alt="" />
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui odit veniam nihil inventore quaerat impedit 
                ex tempore aspernatur, velit nulla. Distinctio iste nisi earum tempora? Ipsam pariatur mollitia eaque tenetur.</p>
                <button className="addCart">Add to cart</button>
        </div>
    );
}

export default Card