import { useState } from "react"
import Meals from "./components/Meals/Meals"
import CartContext from "./store/CartContext";

const MEALS_DATA = [
    {
        id: "1",
        titil: "Burger1",
        desc: "No.1, very very very very delicious. I need to add more words here",
        price: 12,
        img: "/img/meals/1.png"
    },
    {
        id: "2",
        titil: "Burger2",
        desc: "No.2, very very very very delicious. I need to add more words here",
        price: 23,
        img: "/img/meals/2.png"
    },
    {
        id: "3",
        titil: "Burger3",
        desc: "No.3, very very very very delicious. I need to add more words here",
        price: 34,
        img: "/img/meals/3.png"
    },
    {
        id: "4",
        titil: "Burger4",
        desc: "No.4, very very very very delicious. I need to add more words here",
        price: 45,
        img: "/img/meals/4.png"
    },
    {
        id: "5",
        titil: "Burger5",
        desc: "No.5, very very very very delicious. I need to add more words here",
        price: 56,
        img: "/img/meals/5.png"
    },
    {
        id: "6",
        titil: "Burger6",
        desc: "No.6, very very very very delicious. I need to add more words here",
        price: 67,
        img: "/img/meals/6.png"
    },
    {
        id: "7",
        titil: "Burger7",
        desc: "No.7, very very very very delicious. I need to add more words here",
        price: 78,
        img: "/img/meals/7.png"
    }
];

const App = () => {
    const [mealsData, setMealsData] = useState(MEALS_DATA)
    /* 
        1. 商品 【】
        2. 商品总数
        3. 商品总价
    */
    const [cartData, setCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0
    })

    const addItem = meal => {
        // meal 要添加进购物车的商品
        // 对购物车进行复制

        const newCart = {...cartData}
        if(newCart.items.indexOf(meal) === -1) {
            newCart.items.push(meal)
            meal.amount = 1
        } else {
            meal.amount +=1
        }
        
        newCart.totalAmount += 1

        newCart.totalPrice += meal.price
        // 重新传入新的cartData
        setCartData(newCart)
    }

    const removeItem = meal => {
        const newCart = {...cartData}
        meal.amount -= 1

        if(meal.amount === 0) {
            newCart.items.splice(newCart.items.indexOf(meal), 1)
        }

        newCart.totalAmount -= 1

        newCart.totalPrice -= meal.price

        setCartData(newCart)
    }
    return (
            <CartContext.Provider value={{...cartData, addItem, removeItem}}>
                <div>
                    <Meals 
                        mealsData={mealsData} 
                        // onAdd={addMealHandler}
                        // onSub={subMealHandler}
                    />
                </div>
            </CartContext.Provider>

    )
}

export default App