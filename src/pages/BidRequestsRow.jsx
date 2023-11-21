
const BidsRequestsRow = ({ bid, handleDeleteBid, handleConfirm }) => {
    const { _id, jobTitle, bidder_email, jobOwner_email, deadline, status } = bid || {};

    return (
        <div>
            <tr>
                <th>
                    <button onClick={() => handleDeleteBid(_id)} className="btn btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div>
                            <div className="font-bold">{jobTitle}</div>
                            <span className="badge badge-sm badge-ghost">{jobOwner_email}</span>
                        </div>
                    </div>
                </td>
                <td>
                    {bidder_email}
                </td>
                <td>
                    {deadline}
                </td>
                <td>

                </td>
                <th>
                    {
                        <button className="btn btn-ghost btn-xs">
                        {status === 'accept' ? 'In progress' : status === 'reject' ? 'Rejected' : 'Pending'}
                        {status !== 'accept' && (
                            <span>
                                <button onClick={() => handleConfirm(_id)} className="btn btn-info btn-xs">
                                    Accept
                                </button>
                            </span>
                        )}
                        {status !== 'reject' && (
                            <span>
                                <button onClick={() => handleConfirm(_id)} className="btn btn-warning btn-xs">
                                    Reject
                                </button>
                            </span>
                        )}
                    </button>
                    }

                </th>
            </tr>
        </div>
    );
};

export default BidsRequestsRow;