import classes from "./List.module.css";
import PropTypes from 'prop-types'; 
import Button from "../cta-button/Cta-button";

const List = ({name, number, amount}) => {
    return (
        
        <div className={classes.container}>
              <Button label="Show List" size='medium' styleType="danger"></Button>
             <p className={classes.items}>{name}</p>
             <p className={classes.items}>{number}</p>
             <p className={classes.items}>{amount}</p>
        </div>
    )
}

List.defaultProps = {
    name: "Martin",
    number: "072 268 283",
    amount: "123412$"
};

List.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    amount: PropTypes.amount,
};

export default List;