import Meal from "./Meal/Meal"

const Meals = props => {
    return <div >
        {props.mealsData.map(item => 
            <Meal 
                key={item.id}
                meal={item}
/*                 onAdd={props.onAdd}    
                onSub={props.onSub} */
            />)
        }
    </div>
}

export default Meals