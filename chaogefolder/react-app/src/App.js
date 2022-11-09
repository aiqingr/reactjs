import { useState } from "react"
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Meals from "./components/Meals/Meals"
import CartContext from "./store/CartContext";

const MEALS_DATA = [
    {
        id: "1",
        title: "Burger1",
        desc: "No.1, very very very very delicious. I need to add more words here",
        price: 12,
        img: "/img/meals/1.png"
    },
    {
        id: "2",
        title: "Burger2",
        desc: "No.2, very very very very delicious. I need to add more words here",
        price: 23,
        img: "/img/meals/2.png"
    },
    {
        id: "3",
        title: "Burger3",
        desc: "No.3, very very very very delicious. I need to add more words here",
        price: 34,
        img: "/img/meals/3.png"
    },
    {
        id: "4",
        title: "Burger4",
        desc: "No.4, very very very very delicious. I need to add more words here",
        price: 45,
        img: "/img/meals/4.png"
    },
    {
        id: "5",
        title: "Burger5",
        desc: "No.5, very very very very delicious. I need to add more words here",
        price: 56,
        img: "/img/meals/5.png"
    },
    {
        id: "6",
        title: "Burger6",
        desc: "No.6, very very very very delicious. I need to add more words here",
        price: 67,
        img: "/img/meals/6.png"
    },
    {
        id: "7",
        title: "Burger7",
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

    // 创建filter函数
    const filterHandler = keyword => {
        const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1)
        setMealsData(newMealsData)
    }

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
                <FilterMeals onFilter={filterHandler}></FilterMeals>
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