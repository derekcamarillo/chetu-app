import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, updateUser } from '../redux/actions';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginTop: 20,
        fontSize: '1rem',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '35ch',
    },
    button: {
        marginTop: 29,
        margin: theme.spacing(1),
    },
}));
function Update() {
    const history = useHistory();
    const classes = useStyles();
    let dispatch = useDispatch();
    let { id } = useParams();
    const { user } = useSelector((state) => state.data)

    const [state, setState] = useState({
        name: "",
        email: "",
        mobile: "",
        date: "",
        address: "",
        company: "",
        pass: ""
    })
    const [error, setError] = useState("");
    const { name, email, mobile, date, address, company, pass } = state;
    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user])
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !mobile || !date || !address || !company || !pass) {
            setError("Please input all input fields.")
        }
        else {
            dispatch(updateUser(state, id))
            history.push("/");
            setError("");
        }
    }
    return (
        <div className="main">
            <div className="inner">
                <h1>User Update Form</h1>
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <div>
                    <Button variant="contained" color="secondary" onClick={() => history.push("/")}>Back to Home</Button>
                </div>

                <div className='{classes.root}'></div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            required
                            label="UserName"
                            type='text'
                            onChange={handleInputChange}
                            id="name"
                            className={classes.textField}
                            name="name"
                            helperText="Enter Your User Name"
                            value={name || ""}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            label="Email"
                            type="email"
                            onChange={handleInputChange}
                            id="email"
                            value={email || ""}
                            name="email"
                            className={classes.textField}
                            helperText="Enter Your Email Address"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            label="Mobile No"
                            type="number"
                            onChange={handleInputChange}
                            id="mobile"
                            value={mobile || ""}
                            name="mobile"
                            className={classes.textField}
                            helperText="Enter Your Mobile Number."
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            type="date"
                            onChange={handleInputChange}
                            id="date"
                            value={date || ""}
                            name="date"
                            className={classes.textField}
                            helperText="Enter Your Date of Birth."
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            label="Address"
                            type="text"
                            onChange={handleInputChange}
                            id="address"
                            value={address || ""}
                            name="address"
                            className={classes.textField}
                            helperText="Enter Your Email Address"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            label="Company"
                            type="text"
                            onChange={handleInputChange}
                            id="company"
                            name="company"
                            value={company || ""}
                            className={classes.textField}
                            helperText="Enter Your Company Address"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            label="Password"
                            type="password"
                            onChange={handleInputChange}
                            id="pass"
                            value={pass || ""}
                            name="pass"
                            className={classes.textField}
                            helperText="Enter Your Password."
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="default"
                            size="large"
                            type="submit"
                            className={classes.button}
                            onChange={handleInputChange}
                        >
                            Update
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
