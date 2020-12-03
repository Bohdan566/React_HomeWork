import React, {Component} from 'react';
import "./StyleUsers.css"

class FuncUser extends Component {
    render() {
        let {item, cls} =this.props;

        return (
            <div className={cls}>
                {item.id}...{item.name}
            </div>
        );
    }
}

export default FuncUser;