

const JobCard = ({ job }) => {
    const { jobTitle, deadline, minPrice, maxPrice, description } = job;

    return (
        <div>
            <div className="card my-5 bg-base-100 shadow-xl">
                <div className="card-body">
                <div>
                        <h2 className="card-title text-4xl font-bold">{jobTitle}</h2>

                        <div className="flex flex-col items-center lg:flex-row py-2 gap-2">
                        <div className="badge p-4 badge-lg badge-info">DeadLine: {deadline}</div>
                            <div className="badge p-4 badge-lg badge-primary badge-outline font-extrabold">$Price Range(weekly): {minPrice} - {maxPrice}</div>
                        </div>

                        <p className="mr-20 font-semibold text-lg">{description}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn w-40 btn-info">Bid Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;