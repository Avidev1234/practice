import PropTypes from 'prop-types';

export default function Inputtag({ table }) {
    // console.log(table);
    return (

        <div className="container text-center" id='table'>
            <div className="row align-items-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl no</th>
                            <th scope="col">List</th>
                            <th scope="col">Date</th>
                            <th scope="col">Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table.map((items) => {
                                return (
                                    <tr key={items.sl}>
                                        <th scope="row">{items.sl}</th>
                                        <td>{items.list}</td>
                                        <td>{items.date}</td>
                                        <td><button type="button" className="btn btn-danger">Delete</button></td>
                                    </tr>
                                );
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>

    )
}
Inputtag.propTypes = {
    table: PropTypes.array
};