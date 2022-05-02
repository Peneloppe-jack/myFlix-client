import React from "react";
import "./profile-view.scss";
import PropTypes from "prop-types";
import { Container, Card, Button, Row, Col, Form, FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";

export class ProfileView extends React.Component {
    constructor() {
        super();

        this.state = {
            Username: null,
            Password: null,
            Email: null,
            Birthday: null,
            FavoriteMovies: []
        };
    }

    componentDidMount() {
        const accessToken = localStorage.getItem('token');
        this.getUser(accessToken);
    }

    onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null
        });
        window.open('/', '_self');
    }

    getUser(token) {
        const Username = localStorage.getItem('user');

        axios.get(`https://mysterious-wildwood-desperado.herokuapp.com/users/${Username}`, {
            headers: { Authorization:`Bearer ${token}` }
        })
            .then(response => {
                this.setState({
                    Username: response.data.Username,
                    Password: response.data.Password,
               Email: response.data.Email,
               Birthday: response.data.Birthday,
               FavoriteMovies: response.data.FavoriteMovies
                })
            .catch(function (error) {
                console.log(error);
            })
            

    editUser = (e) => {
        e.preventDefault();
        const Username = localStorage.getItem('user');
        const token = localStorage.getItem('token');

axios.put(`https://mysterious-wildwood-desperado.herokuapp.com/users/${Username}`,
    {
        Username: this.state.Username,
        Password: this.state.Password,
        Email: this.state.Email,
        Birthday: this.state.Birthday
    },
    {
        headers: { Authorization: `Bearer ${token}` }
    }
)
    .then((response) => {
        this.setState({
            Username: response.data.Username,
            Password: response.data.Password,
            Email: response.data.Email,
            Birthday: response.data.Birthday
        });
        localStorage.setItem('user', this.state.Username);
        alert("Profile updated");
        window.open('/profile', '_self');
        });
    };

    onRemoveFavorite = (e, FavoriteMovie) => {
        e.preventDefault();
        const Username = localStorage.getItem('user');
        const token = localStorage.getItem('token');

axios.delete(`https://mysterious-wildwood-desperado.herokuapp.com/users/${Username}/movies/${movie._id}`,
    {
        headers: { Authorization:`Bearer ${token}` }
    }
    )
    .then((response) => {
        console.log(response);
        alert("Movie removed");
        this.componentDidMount();
    })
    .catch(function (error) {
        console.log(error);
    });
    }

onDeleteUser() 
const Username = localStorage.getItem('user');
const token = localStorage.getItem('token');

axios.delete(`https://mysterious-wildwood-desperado.herokuapp.com/users/${Username}`, {
    headers: { Authorization:`Bearer ${token}` }
})
    .then((response) => {
        console.log(response);
        alert("Profile deleted");
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    })
    .catch(function (error) {
        console.log(error);
    });
    },

        < Button classname="delete" variant="danger" type="Submit" onClick={deleteProfile}>
        Delete Profile </Button>
            );
        }

 }

ProfileView.propTypes = {
    user: PropTypes.arrayOf(PropTypes.shape({
        ImagePath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,

        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
        }).isRequired,

        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired
        }).isRequired,
    })).isRequired,
    onBackClick: PropTypes.func.isRequired,
};

    export default ProfileView;