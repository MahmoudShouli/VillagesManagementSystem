import PropTypes from "prop-types";

function Card({ text, number }) {
    return (
        <div className="bg-secondary text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center mt-4 h-48">
            <h3 className="text-2xl font-semibold mb-2 text-left">{text}</h3>
            <p className="text-2xl font-semibold text-gray-300 text-left">{number}</p>
        </div>
    );
}

Card.propTypes = {
    text: PropTypes.string.isRequired, 
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
};

export default Card;
