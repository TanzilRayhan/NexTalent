import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
//import { Link } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {user} = useContext(AuthContext);
  const { jobTitle, email, category, deadline, minPrice, maxPrice, description } = job;
  
  return (
    <div className="max-w-4xl my-10 mx-auto">
      <div className="card flex flex-col bg-slate-200 shadow-xl">
        <div className="flex flex-col text-center p-10 ">
          <div>
            <h2 className="card-title  justify-center items-center text-3xl font-bold">{jobTitle}</h2>
            <div className="flex  justify-center items-center pt-2 gap-2">
              <div className="badge badge-secondary font-extrabold">
                {category}
              </div>
              <div className=" badge badge-primary">Deadline: {deadline}</div>
            </div>

            <div className="flex  justify-center items-center py-2 gap-2">
              <div className="badge badge-lg badge-primary badge-outline font-extrabold">
                Price: ${minPrice}-${maxPrice}
              </div>
            </div>

            <p className="font-semibold text-lg">{description}</p>
          </div>
          <div className="text-center py-5">
            <h1 className="text-2xl lg:text-5xl py-3 font-bold">Place your bid</h1>
          </div>
          <div className="w-full justify-center items-center p-10 rounded-xl themeColor">
            <form >
              <div className=" gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-bold text-white">
                     Bidder Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="input input-bordered text-slate-600"
                    defaultValue={user.email}
                    required
                    readOnly
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-bold text-white">
                      Job Owner Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="input input-bordered text-slate-600"
                    required
                    defaultValue={email}
                    readOnly
                  />
                </div>
              </div>
              <div className="lg:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-bold text-white">
                     Price
                    </span>
                  </label>
                  <input
                    type="number"
                    name="minPrice"
                    placeholder="Enter Bidding Amount"
                    className="input input-bordered text-slate-600"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-bold text-white">
                      Deadline
                    </span>
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    placeholder="Enter Deadline"
                    className="input input-bordered text-slate-600"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-10">
                <button className="btn btn-primary bg-[#0a183b]">
                Bid on the project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
