import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, actions) => {
	if (actions.type === "ADD") {
		// const updatedItems = state.items.concat(actions.item);
		const updatedTotalAmount =
			state.totalAmount + actions.item.amount * actions.item.price;

		const existingCartItemIndex = state.items.findIndex(item => 
			item.id === actions.item.id
		);

		const existingCartItem = state.items[existingCartItemIndex]
		
		let updatedItems;
		if(existingCartItem) {
			// copy the obj properties but update amount value
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + actions.item.amount
			};
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
		} else {
			updatedItems = state.items.concat(actions.item)
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if(actions.type === "REMOVE") {
		const existingCartItemIndex = state.items.findIndex(item => 
			item.id === actions.id
		);

		const existingCartItem = state.items[existingCartItemIndex];

		const updatedTotalAmount = state.totalAmount - existingCartItem.price;
		let updatedItems;
		if(existingCartItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== actions.id)
		} else {
			const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		}
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({
			type: "ADD",
			item: item,
		});
	};

	const removeItemToCartHandler = (id) => {
		dispatchCartAction({
			type: "REMOVE",
			id: id,
		});
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
