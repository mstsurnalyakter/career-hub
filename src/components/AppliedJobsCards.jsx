
import { AiOutlineDollar } from "react-icons/ai";
import google from "../assets/logo/google.png";
import { CiLocationOn } from "react-icons/ci";
const AppliedJobsCards = () => {
  return (
    <section className="">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {/*  */}
        <div className="card lg:card-side bg-gradient-to-r flex items-center justify-center from-blue-50 rounded-lg to-purple-50">
          <figure className="bg-white mt-10 ml-10  mb-4 flex items-center justify-center w-60 h-60 rounded-lg">
            <img alt="" className="w-36 h-12" src={google} />
          </figure>
          <div className="card-body ">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div>
                <h3 className="flex-1 text-2xl mb-2 font-extrabold text-[#474747] leading-snug">
                  Technical Database Engineer
                </h3>
                <p className="text-[#757575] text-xl font-semibold mb-4">
                  Google LLC
                </p>
                <div className="space-x-3 mb-4">
                  <button
                    type="button"
                    className="px-4 py-2 font-semibold border border-[#7E90FE] border-dashed rounded text-[#7E90FE]"
                  >
                    Remote
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 font-semibold border border-[#7E90FE] border-dashed rounded text-[#7E90FE]"
                  >
                    Full Time
                  </button>
                </div>
                <div className="flex gap-6 mb-6">
                  <p className="flex items-center gap-2">
                    <CiLocationOn />
                    <span className="text-[#757575] text-xl font-semibold">
                      Dhaka, Bangladesh
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <AiOutlineDollar />
                    <span className="text-[#757575] text-xl font-semibold">
                      Salary : 100K - 150K
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <button className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto">
                  View Details
                </button>
              </div>
            </div>

          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
}

export default AppliedJobsCards