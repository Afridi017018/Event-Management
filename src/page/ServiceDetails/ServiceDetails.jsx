import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../components/providers/AuthProvider';

const ServiceDetails = () => {
const {user} = useContext(AuthContext)
    const { id } = useParams();

    const serviceData = useLoaderData();

    const serviceById = serviceData.filter((e) => e.id === id);

    const navigate = useNavigate()

    if (serviceById.length === 0) {
        throw error
    }

    const handleOrder = () => {

        const newId = JSON.parse(localStorage.getItem(user.email)) || [];

        newId.push({ id: id })
        localStorage.setItem(user?.email, JSON.stringify(newId));


        Swal.fire(
            'Order successful!',
            '',
            'success'
        ).then((result) => {

            if (result.isConfirmed) {
                navigate("/orders")
            }
        })

    }


    return (
        <div className='container mx-auto my-5 px-5 lg:px-0'>
            <div>

                <div className='relative -z-20'>
                    <img className='h-[500px] w-screen rounded-t-md shadow-xl' src={serviceById[0].image} alt="" />
                    <div className='absolute w-full h-[61px] rounded-b-md bg-slate-100 opacity-100 flex items-center px-5'>
                        <h2 className='text-lg font-medium text-gray-600'>Price: ${serviceById[0].price}</h2>

                    </div>
                </div>
                <div className='text-center my-2'>
                    <button onClick={handleOrder} className='bg-green-800 hover:bg-green-950 px-4 py-2 rounded text-white text-xl font-bold'>Order Now</button>
                </div>
                <div>
                    <h2 className='text-4xl font-bold my-5'>{serviceById[0].name}</h2>
                    <p className='text-gray-500 mb-20'>{serviceById[0].event_details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;