import classes from "./List.module.css";
import PropTypes from 'prop-types'; 
import Button from "../cta-button/Cta-button";

const List = ({ items }) => {
    return (
        <div className={classes.container}>
            <Button label="Show List" size='medium' styleType="danger" />
            {items.map((item, index) => (
                <div key={index} className={classes.item}>
                    <p className={classes.items}>{item.name}</p>
                    <p className={classes.items}>{item.number}</p>
                    <p className={classes.items}>{item.amount}</p>
                </div>
            ))}
        </div>
    );
}

List.defaultProps = {
    items: [
        { name: "Martin", number: "072 268 283", amount: "123412$" },
        { name: "John", number: "078 145 678", amount: "54321$" }
    ]
};

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired
        })
    )
};

export default List;
