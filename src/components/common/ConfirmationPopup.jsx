import CloseIcon from "../../svg/CloseIcon.jsx";

const ConfirmationPopup = ({ children, onConfirm, onCancel }) => {
    return (
        <div className='flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50'>
            <div className='relative p-6 bg-white rounded-lg shadow-lg dark:bg-dark-textPrimary w-fit'>
                {/* Close Icon */}
                <button
                    className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'
                    onClick={onCancel}>
                    <CloseIcon />
                </button>
                {/* Warning Icon */}
                <div className='flex items-center space-x-3'>{children}</div>
                <div className='flex justify-end mt-6 space-x-4'>
                    <button
                        className='flex items-center px-4 py-2 space-x-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400'
                        onClick={onCancel}>
                        <span>Cancel</span>
                    </button>
                    <button
                        className='flex items-center px-4 py-2 space-x-2 text-white rounded bg-primary hover:bg-indigo-600'
                        onClick={onConfirm}>
                        <span>Confirm</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;