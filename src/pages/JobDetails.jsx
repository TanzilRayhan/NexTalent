import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
//import { Link } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const { user } = useContext(AuthContext);
  const {_id,
    jobTitle,
    email,
    category,
    deadline,
    minPrice,
    maxPrice,
    description,
  } = job;

  const isBidDisabled = user.email === email;

  const handleJobBids = (e) => {

    e.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const bidder_email = form.bidder_email.value;
    const bid = {
      jobTitle,
      job_id: _id,
      bidder_email,
      jobOwner_email: email,
      deadline,
      price,
    }
    console.log(bid);

    //send data to the server
    fetch("https://nex-talent-server.vercel.app/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congrats!!!",
            text: "Bid added successfully !!!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl my-10 mx-auto">
      <div className="card flex flex-col bg-slate-200 shadow-xl">
        <div className="flex flex-col text-center p-10 ">
          <div>
            <h2 className="card-title text-black justify-center items-center text-3xl font-bold">
              {jobTitle}
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center pt-2 gap-2">
              <div className="badge badge-secondary font-extrabold p-4">
                {category}
              </div>
              <div className=" badge badge-primary p-4">
                Deadline: {deadline}
              </div>
            </div>

            <div className="flex  justify-center items-center py-2 gap-2">
              <div className="badge badge-lg badge-primary badge-outline font-extrabold p-4">
                Price: ${minPrice}-${maxPrice}
              </div>
            </div>

            <p className="font-semibold text-black text-lg">{description}</p>
          </div>
          <div className="text-center py-5">
            <h1 className="text-2xl lg:text-5xl py-3 text-black font-bold">
              Place your bid
            </h1>
          </div>
          <div className="w-full justify-center items-center p-10 rounded-xl themeColor">
            <form onSubmit={handleJobBids}>
              <div className=" gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-bold text-white">
                      Bidder Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="bidder_email"
                    placeholder="Enter email"
                    className="input input-bordered"
                    defaultValue={user?.email}
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
                    className="input input-bordered"
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
                    name="price"
                    placeholder="Enter Bidding Amount"
                    className="input input-bordered"
                    autoComplete="off"
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
                    className="input input-bordered "
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-10">
                <button
                  className="btn btn-primary text-white bg-[#0a183b]"
                  disabled={isBidDisabled}
                >
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
