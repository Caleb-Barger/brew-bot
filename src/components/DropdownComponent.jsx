import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DropdownComponent = props => {
    const { history, setCurrentBrew, brews } = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const onClickHandler = e => {
        history.push("/brew")
        setCurrentBrew(e.target.name)
    }


    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Select Brew Here
        </DropdownToggle>
            <DropdownMenu>
                {/* <DropdownItem name="firstBrew" onClick={onClickHandler}>First Brew!</DropdownItem> */}
                {brews.map((brew, index) => {
                    return (
                        <DropdownItem
                            name={brew.name}
                            onClick={onClickHandler}
                            key={index}
                        >{brew.name}</DropdownItem>
                    )
                })}
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownComponent;