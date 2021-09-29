import React,{useState, useEffect} from "react";
import DataTable from "react-data-table-component";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import './Api2.css'


function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
}


function toPages(pages) {
    const results = [];

    for (let i = 1; i < pages; i++) {
        results.push(i);
    }

    return results;
}

const columns = [
    {
        name: "ID",
        selector: (row) => row.id,
        sortable: true
    },
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true
    },
    {
        name: "UserName",
        selector: (row) => row.username,
        sortable: true
    },
    {
        name: "Email-Id",
        selector: (row) => row.email,
        sortable: true
    },
    {
        name: "Mobile.No-",
        selector: (row) => row.phone,
        sortable: true
    },
    {
        name: "Website-Name",
        selector: (row) => row.website,
        sortable: true
    },
    {
        name: "Company",
        selector: (row) => row.company.name,
        sortable: true
    },
    {
        name: "Address",
        selector: (row) => row.address.street,
        sortable: true
    }
];

// RDT exposes the following internal pagination properties
const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage
}) => {
    const handleBackButtonClick = () => {
        onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
        onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
        onChangePage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleBackButtonClick}
                        disabled={previosDisabled}
                        aria-disabled={previosDisabled}
                        aria-label="previous page"
                    >
                        Previous
                    </button>
                </li>
                {pageItems.map((page) => {
                    const className =
                        page === currentPage ? "page-item active" : "page-item";

                    return (
                        <li key={page} className={className}>
                            <button
                                className="page-link"
                                onClick={handlePageNumber}
                                value={page}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleNextButtonClick}
                        disabled={nextDisabled}
                        aria-disabled={nextDisabled}
                        aria-label="next page"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

function Api1() {
const [data, setData] = useState([])
const url = `https://jsonplaceholder.typicode.com/users`;
useEffect(() => {
  axios.get(url).then(json => setData(json.data))
  // eslint-disable-next-line
}, [])
    return (
        <div className="Api2" >
            <div className="Api2o">
                <DataTable
                    title="Api 2"
                    columns={columns}
                    data={data}
                    defaultSortFieldID={1}
                    pagination
                    paginationComponent={BootyPagination}
                />
            </div>
        </div>
    );
}

export default Api1
