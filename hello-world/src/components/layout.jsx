import React from "react"


class MainHeader extends React.Component{
    render() {
        return (
            <div className='background'>
                {this.props.children}
            </div>
        );
    }
}
export default (props) => (
    <MainHeader> {props.children} </MainHeader>

)
