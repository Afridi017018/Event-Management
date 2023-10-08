import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderCard from '../OrderCard/OrderCard';
import { AuthContext } from '../providers/AuthProvider';

const OrderCards = () => {
const {user} = useContext(AuthContext)
    const allOrders = useLoaderData();

    const getOrderInfo = JSON.parse(localStorage.getItem(user?.email)) || [];

    const orderInfo = getOrderInfo.map((e) => {
        // console.log(e)
        return allOrders.filter((filt)=> filt.id === e.id )[0];
    })
// console.log(orderInfo)
    return (
        <div>
           {
            orderInfo.length > 0 ?
        
            orderInfo.map((element, index)=>(
               <div key={element.id + index}>
                 <OrderCard element = {element}/>
               </div>
            ))
            
            :
            <div className='h-[545px] w-full flex justify-center items-center text-gray-500 text-4xl font-bold'>
                        Empty List !
            </div>
           }
           
        </div>
    );
};

export default OrderCards;