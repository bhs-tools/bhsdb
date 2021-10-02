import React from 'react';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <nav className="flex text-white justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0"> BHSDB </nav>
        )
    }
}