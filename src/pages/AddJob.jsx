import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const description = form.description.value;


        const newJobs = { email, jobTitle, category, deadline, minPrice, maxPrice, description};
        console.log(newJobs);

        //send data to the server
        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJobs),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congrats!!!",
                        text: "Job added successfully !!!",
                        icon: "success",
                        confirmButtonText: "Ok"
                    })
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title>Add Job | NexTalent</title>
            </Helmet>
            <div className="hero min-h-screen "
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/QnrjSwr/istockphoto-1349094945-1024x1024.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="lg:flex-col ">
                    <div className="text-center text-white">
                        <h1 className="text-2xl lg:text-5xl py-3 font-bold">Add Job</h1>

                    </div>
                    <div className="w-full p-10 rounded-xl shadow-2xl themeColor mb-10">
                        <form onSubmit={handleAddJob}>
                            <div className="lg:flex gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter email" className="input input-bordered text-slate-600" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Job Title</span>
                                    </label>
                                    <input type="text" name="jobTitle" placeholder="Enter Job Title" className="input input-bordered text-slate-600" required />
                                </div>
                            </div>
                            <div className="lg:flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Enter Category" className="input input-bordered text-slate-600" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Deadline</span>
                                    </label>
                                    <input type="date" name="deadline" placeholder="Enter Deadline" className="input input-bordered text-slate-600" required />
                                </div>
                            </div>
                            <div className="lg:flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Minimum Price</span>
                                    </label>
                                    <input type="number" name="minPrice" placeholder="Enter Minimum Price" className="input input-bordered text-slate-600" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Maximum Price</span>
                                    </label>
                                    <input type="number" name="maxPrice" placeholder="Enter Maximum Price" className="input input-bordered text-slate-600" required />
                                </div>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-white">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter job description" className="input input-bordered w-full h-16 text-slate-600" required autoComplete="off" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold text-white pt-2">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-3">
                                <button className="btn btn-primary bg-[#0a183b]">Add Job</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJob;