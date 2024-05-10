
export default function Table() {
    return (
        <div className="row align-items-start">
            <div className="col">
                <strong><label>List</label></strong>

                <input type="text" className="form-control" placeholder='Enter list' />
            </div>
            <div className="col">
                <strong><label>Enter Date</label></strong>
                <input type="date" className="form-control" />
            </div>
            <div className="col mt-2">
                <button type="button" className="btn btn-success">Add</button>
            </div>
        </div>
    )
}
