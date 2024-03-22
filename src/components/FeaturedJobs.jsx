import accounts from "../assets/icons/accounts.png";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";

const FeaturedJobs = () => {
  return (
    <section className="py-6 sm:py-12">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <p className="font-serif text-sm text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8  lg:grid-cols-2">
          <article className="flex flex-col bg-gradient-to-r from-blue-50 rounded-lg to-purple-50 p-10">
            <figure className="bg-gradient-to-r from-blue-100 mb-4 flex items-center justify-center to-purple-100 bg-opacity-10 w-20 h-20 rounded-lg">
              <img alt="" className="w-10 h-10" src={accounts} />
            </figure>
            <div className="flex flex-col">
              <h3 className="flex-1 text-2xl mb-2 font-extrabold text-[#474747] leading-snug">
                Technical Database Engineer
              </h3>
              <p className="text-[#757575] text-xl font-semibold mb-4">Google LLC</p>
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
              <div>
                <button className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto">
                  View Details
                </button>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
            <figure className="bg-gradient-to-r mt-10 ml-10 from-blue-100 flex items-center justify-center to-purple-100 bg-opacity-10 w-16 h-16">
              <img alt="" className="w-10 h-10" src={accounts} />
            </figure>
            <div className="flex flex-col p-6">
              <h3 className="flex-1 text-lg font-semibold leading-snug">
                Account & Finance
              </h3>
              <p>300 Jobs Available</p>
            </div>
          </article>
          <article className="flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
            <figure className="bg-gradient-to-r mt-10 ml-10 from-blue-100 flex items-center justify-center to-purple-100 bg-opacity-10 w-16 h-16">
              <img alt="" className="w-10 h-10" src={accounts} />
            </figure>
            <div className="flex flex-col p-6">
              <h3 className="flex-1 text-lg font-semibold leading-snug">
                Account & Finance
              </h3>
              <p>300 Jobs Available</p>
            </div>
          </article>
          <article className="flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
            <figure className="bg-gradient-to-r mt-10 ml-10 from-blue-100 flex items-center justify-center to-purple-100 bg-opacity-10 w-16 h-16">
              <img alt="" className="w-10 h-10" src={accounts} />
            </figure>
            <div className="flex flex-col p-6">
              <h3 className="flex-1 text-lg font-semibold leading-snug">
                Account & Finance
              </h3>
              <p>300 Jobs Available</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
