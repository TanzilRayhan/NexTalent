
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const PostedJobsCard = ({ job, jobs, setProducts }) => {

    const { _id, jobTitle, category, deadline, minPrice, maxPrice, description} = job;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!!!",
                                text: "Job deleted successfully!!!",
                                icon: "success",
                                confirmButtonText: "Ok"
                            })
                            
                            const remaining = jobs.filter(job => job._id !== _id);
                            setProducts(remaining);
                        }
                    });
            }
        })
    }

    return (
        <div>
            <div className="card card-side flex flex-col lg:flex-row  bg-slate-200 shadow-xl">
                <div className="flex flex-col lg:flex-row justify-center py-10 items-center ml-10">
                    <div>
                        <h2 className="card-title text-3xl font-bold">{jobTitle}</h2>
                        <div className="flex pt-2 gap-2">
                            <div className="badge badge-secondary font-extrabold">{category}</div>
                            <div className="badge badge-primary">{deadline}</div>
                        </div>

                        <div className="flex py-2 gap-2">
                            <div className="badge badge-lg badge-primary badge-outline font-extrabold">Price: ${minPrice}-${maxPrice}</div>
                        </div>

                        <p className="mr-20 font-semibold text-lg">{description}</p>
                    </div>


                    <div className="card-actions px-4 justify-end">
                        <div className="btn-group lg:btn-group-vertical pt-5 lg:space-y-3">
                            <Link to={`/updateJobs/${_id}`}>
                                <button className="btn btn-neutral rounded-lg w-full">UPDATE</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-error w-full">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostedJobsCard;