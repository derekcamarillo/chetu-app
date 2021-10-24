import React, { useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import {  loadPatients } from '../../redux/actions';

const Home4 =()=> {

  // const [rows, setRows] = useState();
  let dispatch = useDispatch();
  const { patients } = useSelector(state => state.data);
  // const history = useHistory();

  useEffect(() => {
      dispatch(loadPatients())
      // setRows(patients)
      // eslint-disable-next-line
  }, [])

  const [datatable] = React.useState({
    columns: [
      {
        label: "Id",
        field: "id",
        width: 150,
        sort: 'asc',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: "First Name",
        field: "FirstName",
        width: 270,
        sort: 'asc',
      },
      {
        label: "Last Name",
        field: "LastName",
        sort: 'asc',
        width: 150,
      },
      {
        label: "Guardian",
        selector: "Guardian",
        sort: 'asc',
        width: 150,
      },
      {
        label: "Guardian Mobile",
        field: "GuardianMobile",
        sort: 'asc',
        width: 150,
      },
      {
        label: "Patient Email",
        field: "PatientEmail",
        sort: 'asc',
        width: 150,
      },
      {
        label: "Guardian Email",
        field: "GuardianEmail",
        sort: 'asc',
        width: 150,
      },
      {
        label: "Patient Mobile",
        field: "PatientMobile",
        sort: 'asc',
        width: 150,
      },
      {
        label: "AlterNet Mobile",
        field: "AlterNetMobile",
        sort: 'asc',
        width: 150,
      },
      {
        label: "DateOfBirth",
        field: "DateOfBirth",
        sort: 'asc',
        width: 150,
      },
      {
        label: "DateOfAdmit",
        field: "DateOfAdmit",
        sort: 'asc',
        width: 150,
      },
      {
        label: "Patient Problem",
        field: "PatientProblem",
        sort: 'asc',
        width: 150,
      },
      {
        label: "Dr Name",
        field: "DrName",
        sort: 'asc',
        width: 150,
      },
      {
        label: "Current Address",
        field: "CurrentAddress",
        sort: 'asc',
        width: 150,
      },
    ],
    rows:patients,
    
  });
  console.log(patients)

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      barReverse
    />
  );
}

export default Home4;