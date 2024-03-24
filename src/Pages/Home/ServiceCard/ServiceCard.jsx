import { Link } from "react-router-dom";

const ServiceCard = ({services}) => {
  console.log(services);
  const { _id,title, img, price } = services;

  return (
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-5 pt-10">
          <img
            src={img}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-[#FF3811]">{'$'+ price}</p>
          <div className="card-actions">

           <Link to ={`checkout/${_id}`}>
             <button className="btn btn-primary">Book Now</button>
            </Link>

          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ServiceCard;
