import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CoffeeDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const singleData = data.find(item => item._id === id);
    const { details, _id, name, Quantity, price, photo, supplier, taste } = singleData;
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-col">
                <img
                    src={photo}
                    className="w-96 rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{details}</h1>
                    <div className='flex justify-start gap-6'>
                        <p className="py-6">
                            Name : {name}
                        </p>
                        <p className="py-6">
                            Quantity :  {Quantity}
                        </p>
                        <p className="py-6">
                            Color : {name}
                        </p>
                        <p className="py-6">
                           Supplier : {supplier}
                        </p>
                        <p className="py-6">
                           Taste : {taste}
                        </p>

                    </div>
                    <div className="pb-3">
                        <h1 className="text-2xl font-semibold">Price : {price}</h1>
                    </div>
                    <button className="btn btn-primary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;