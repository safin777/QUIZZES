import NodataImage from "../../assets/no-data.svg";
const NoData = ({ text }) => {
    return (
        <div className='flex flex-col justify-center items-center max-w-80'>
            <img src={NodataImage} alt='No data found' />
            <h3 className='font-semibold text-gray-500 font-xl'>{text}</h3>
        </div>
    );
};

export default NoData;