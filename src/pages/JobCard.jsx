

const JobCard = ({ job }) => {
    const { jobTitle, deadline, minPrice, maxPrice, description } = job;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <div>
                        <h2 className="card-title text-4xl font-bold">{jobTitle}</h2>

                        <div className="flex py-2 gap-2">
                            <div className="badge badge-lg badge-primary badge-outline font-extrabold">Price Range: ${minPrice}-${maxPrice}</div>
                            <div className="badge badge-lg badge-primary">DeadLine: {deadline}</div>
                        </div>

                        <p className="mr-20 font-semibold text-lg">{description}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Bid Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;