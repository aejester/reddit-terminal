import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav} from 'shards-react'; 
import SearchBar from "./SearchBar";

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false
        }
    }

    render() {

        return (

            <Navbar type="dark" theme="secondary" expand="md">

                <NavbarBrand href="/">
                    reddit terminal
                </NavbarBrand>
                <NavbarToggler open={this.state.collapseOpen}/>

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/dashboard">
                                dashboard
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/account">
                                account
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <SearchBar showSearchBar={false}/>

                </Collapse>

            </Navbar>

        );

    }

}

export default NavigationBar;