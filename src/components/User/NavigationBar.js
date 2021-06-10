import React from 'react';
import { Component } from 'react';
import { FaSearch, FaUserAlt, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom'

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            check: JSON.parse(localStorage.getItem("USER")) ? true : false
        }
    }

    componentDidMount(){
        // window.location.reload();
    }

    onSeacrh = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onClick = () =>{
        localStorage.clear();
        window.location.reload();
    }

    render() {
        var { search, check } = this.state;
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark" >
                <div class="mx-auto order-0" >
                    <a class="navbar-brand mx-auto" href="/">TLT</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item-1">
                            <Link class="nav-link" to="/cart"><FaShoppingBag /></Link>
                        </li>
                        <li class="nav-item-1">
                            <div class="dropdown">
                                <span><Link class="nav-link" to="/user"><FaUserAlt /></Link></span>
                                <div class="dropdown-content">
                                    <Link to="/login" hidden={check}>
                                        <button >Đăng nhập</button>
                                        </Link>
                                    <Link to="/">
                                        <button onClick={this.onClick}>Đăng xuất</button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="buscar-caja">
                    <input type="text" name="Search" class="buscar-txt" placeholder="Search..." onChange={this.onSeacrh} />
                    <a class="buscar-btn">
                        <FaSearch />
                    </a>
                </div>
            </nav>
        )
    }
}
export default NavigationBar;