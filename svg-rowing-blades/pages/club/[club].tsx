import Blade, { names, shortNames } from "react-rowing-blades";

import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";

const allNames = {
  ...names.cambridge,
  ...names.international,
  ...names.oxford,
  ...names.uk,
};

const Club = () => {
  const router = useRouter();
  const { club } = router.query;

  return (
    <Layout title={`SVG Rowing Blades | ${allNames[club as string]}`}>
      <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <Blade
            club={club}
            size={100}
            className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{allNames[club as string]}</h4>
          <p className="mt-1">{club}</p>
        </div>
      </div>
      {/* <Blade club="emm" size={100} /> */}
      <a href={`/${"emm"}.svg`} download={`${"emm"}.svg`}>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Download
        </button>
      </a>
    </Layout>
  );
};

export default Club;
