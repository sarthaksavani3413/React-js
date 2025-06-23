import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCart} from '../redux/action/apiaction';

const Cart = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.users.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <div align="center">
            <h1>Cart api calling</h1>
            {data.length == 0 ? (
                <p>Loading carts...</p>
            ) : (
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Total Products</th>
                            <th>Total Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cart) => (
                            <tr key={cart.id}>
                                <td>{cart.id}</td>
                                <td>{cart.userId}</td>
                                <td>{cart.totalProducts}</td>
                                <td>{cart.totalQuantity}</td>
                                <td>${cart.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Cart;