import PropTypes from 'prop-types';

const Error=({ error })=>{
    return (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span className="font-medium">{error}</span>
        </div>
    )
}

Error.propTypes = {
    error: PropTypes.string
};

export default Error;