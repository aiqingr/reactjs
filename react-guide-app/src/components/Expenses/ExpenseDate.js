import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-Us", {month : "long"});
    const day = props.date.toLocaleString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-year">{year}</div>
            <div className="expense-date__month">{month}</div>
            <div className="xpense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;