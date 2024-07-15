// import imagage from "../assets/futsal.jpg";

// const Card = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
//       <img
//         className="rounded-t-lg w-full h-48 object-cover"
//         src={imagage}
//         alt="Mountain"
//       />
//       <div className="p-2">
//         <h5 className="text-lg font-bold mb-2">Yala Futsal</h5>
//         <p className="text-gray-600">
//           Enjoy the game.
//         </p>
//         <div className="flex justify-end mt-4">
//           <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
//             Buy
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
//             Book
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


import PropTypes from 'prop-types';

const Card = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-around items-center my-2">
      {data.map((product, index) => (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-2" key={index}>
          <img
            className="w-full h-64 object-cover p-5 bg-cover rounded"
            src={product.imgUrl}
            alt="fashion beauty"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 py-4 text-left">
            <button className="bg-black text-white px-5 py-2 text-center">
              Learn more..
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
