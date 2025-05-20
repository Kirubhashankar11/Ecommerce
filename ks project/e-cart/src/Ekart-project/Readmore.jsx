import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ReactStars from "react-stars";

const Readmore = () => {
  const { id } = useParams();
  const dat = useFetch(`https://fakestoreapi.com/products/${id}`);
  console.log(dat);

  return (
    <>
      <div className="container-fluid p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div>
                <img src={dat.image} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-9 hstack">
              <div className="vr d-none d-lg-block"></div>
              <div className="ps-4">
                <h3 className="fw-bold text-secondary">{dat.title}</h3>
                <h6 className="fw-normal  mt-5">
                  <span className="fw-bold text-warning">Description:</span>
                  {dat.description}
                </h6>
                <h6 className="fw-normal">
                  <span className="fw-bold text-warning">Category:</span>
                  {dat.category}
                </h6>
                <h6 className="fw-normal">
                  <span className="fw-bold text-warning">Price:</span>$
                  {dat.price}
                </h6>
                <p>
                  <ReactStars
                      edit={false}
                      count={5}
                      size={30}
                      isHalf={true}
                      value={dat?.rating?.rate}
                      activeColor="#ccff00"
                    />
                </p>
                <p>
                  <span className="fw-bold text-warning">Stock left:</span>
                  {dat?.rating?.count}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Readmore;
