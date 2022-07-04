import React from "react";
import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.css';

function SaleItem({ item }) {
    const { name, description, price, purchase } = item;

    return (
        <div className="container-fluid">
            <div className="row my-2 justify-content-center">
                <div className="card p-1" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={require(`../../assets/listing/${name}.jpg`)}
                        alt={removeHyphens(name) && capitalizeFirstLetter(name)} />
                    {/* <div className="card-img-overlay example"> */}
                        <div className="card-body content">
                            <p className="card-text">{description}</p>
                            <p className="card-text">{price}</p>
                            <div>
                                <a href={purchase}>
                                <i class="fas fa-money-bill-wave-alt"></i>
                                </a>
                            </div>

                        </div>
                    {/* </div> */}

                </div>
            </div>
        </div>

    );
};

export default SaleItem;