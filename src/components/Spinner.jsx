import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

function Spinner() {
  return (
    <div className="flex justify-center items-center text-center h-full m-auto">
      <BeatLoader color="#374151" margin={0} size={30} />
    </div>
  );
}

export default Spinner;
