import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, Quantity, price, photo, taste, details, supplier } = useLoaderData();
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        //send updated coffee to the db
        fetch(`https://coffee-store-server-mu-one.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(data);
                }
            })

    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Coffee name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='Quantity' defaultValue={Quantity} className="input w-full" placeholder="Quantity" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Supplier name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Taste name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details name" />
                    </fieldset>

                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;