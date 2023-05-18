import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';

const AddNew = () => {
    const { user } = useContext(AuthContext)

    const handleAddToys = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const ProductName = form.name.value;
        const sellerName = user.displayName
        const sellerEmail = user.email
        const subCategory = form.subCategory.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = parseFloat(form.quantity.value);
        const description = form.description.value;


        const newToys = { photo, ProductName, sellerEmail, sellerName, subCategory, price, rating, quantity, description }




        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toys Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }
    //console.log(user.displayName)

    return (
        <div>
            <form onSubmit={handleAddToys} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Photo url"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='photo'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="productName"
                            value="Product Name"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='name'
                        required={true}
                    />
                </div>

                <div>
                    <Label htmlFor="disabledInput2">
                        Seller Name
                    </Label>
                    <TextInput
                        type="text"
                        id="disabledInput2"
                        placeholder={user?.displayName}
                        disabled={true}
                        readOnly={true}
                    />
                </div>
                <div>
                    <Label htmlFor="disabledInput2">
                        Seller Email
                    </Label>
                    <TextInput
                        type="text"
                        id="disabledInput2"
                        placeholder={user?.email}
                        disabled={true}
                        readOnly={true}
                    />
                </div>

                {/* <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Sub-category"
                            value="Sub-category"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='subCategory'
                        required={true}
                    />
                </div> */}
                <div id="select">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Sub-category"
                            value="Sub-category"
                        />
                    </div>
                    <Select
                        id="countries"
                        type="text"
                        name='subCategory'
                        required={true}
                    >
                        <option>
                        Sports Car
                        </option>
                        <option>
                        Regular Car
                        </option>
                        <option>
                        Truck
                        </option>
                        
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="price"
                            value="Price"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='price'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="rating"
                            value="Rating"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='rating'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="quantity"
                            value="Available quantity"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='quantity'
                        required={true}
                    />
                </div>
                {/* <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="Detail description"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='description'
                        required={true}
                    />
                </div> */}
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="Detail Description"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        type="text"
                        name='description'
                        placeholder='Type Detail'
                        required={true}
                        rows={4}
                    />
                </div>


                {/* <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div> */}

                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AddNew;