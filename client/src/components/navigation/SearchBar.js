import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { FormInput, InputGroup, InputGroupAddon, InputGroupText, Nav } from 'shards-react'; 
import PropTypes from 'prop-types';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);

        this.state = {
            searchTerm: ""
        };
    }

    handleSearchTermChange(term) {

        this.setState({searchTerm: term});

    }

    render() {

        if (this.props.showSearchBar) {

            return (

                <Nav navbar className="ml-auto">
                    <InputGroup size="sm" seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faSearch}/>
                            </InputGroupText>
                        </InputGroupAddon>
    
                        <FormInput onChange={this.handleSearchTermChange} className="border-0" placeholder="subreddit search..." />
    
                    </InputGroup>
                </Nav>
    
            );

        } else {
            return null;
        }

    }

}

SearchBar.propTypes = {
    showSearchBar: PropTypes.bool
}

export default SearchBar;