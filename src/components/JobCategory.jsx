

import accounts from "../assets/icons/accounts.png";

const JobCategory = () => {
  return (
    <section className="py-6 sm:py-12">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Job Category List</h2>
          <p className="font-serif text-sm text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col bg-gradient-to-r from-blue-50 rounded-lg to-purple-50">
            <figure className="bg-gradient-to-r mt-10 ml-10 from-blue-100 mb-4 flex items-center justify-center to-purple-100 bg-opacity-10 w-20 h-20 rounded-lg">
              <img alt="" className="w-10 h-10" src={accounts} />
            </figure>
            <div className="flex flex-col p-6 ml-4">
              <h3 className="flex-1 text-xl font-extrabold text-[#474747] leading-snug mb-1">
                Account & Finance
              </h3>
              <p className="text-[#A3A3A3] font-medium">300 Jobs Available</p>
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
}

export default JobCategory