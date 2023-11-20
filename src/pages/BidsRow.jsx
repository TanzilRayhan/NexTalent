
const BidsRow = ({ bid, handleDeleteBid }) => {
    const {_id, jobTitle, jobOwner_email, deadline } = bid || {};

    return (
        <div>
            <tr>
                <th>
                    <button  onClick={() => handleDeleteBid(_id)} className="btn btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div>
                            <div className="font-bold">{jobTitle}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {jobOwner_email}
                </td>
                <td>
                    {deadline}
                </td>
                <td>
                    <button className="btn btn-primary btn-xs">pending</button>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">Complete</button>
                </th>
            </tr>
        </div>
    );
};

export default BidsRow;