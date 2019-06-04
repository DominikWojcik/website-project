import React from "react"
import { Link } from "gatsby";
const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

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
