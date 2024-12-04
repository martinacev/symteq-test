import classes from "./List.module.css";
import PropTypes from 'prop-types'; 

const List = ({name}) => {
    return (
        <div className={classes.container}>
             <p className={classes.items}>{name}</p>
        </div>
    )
}

List.defaultProps = {
    name: "Martin",
};

List.propTypes = {
    name: PropTypes.string,
};

export default List;