import React, {Component} from 'react';
import FuncUser from "./FuncUser";
import {usersWithAddress} from "../DataBace/ArrayUsers";

class FuncUsers extends Component {
    render() {

        return (
            <div>
                {
                    usersWithAddress.map((user, index) =>{
                        let className = "other";
                        if(index === usersWithAddress.length - usersWithAddress.length){
                            className = "first";
                        } else if(index === (usersWithAddress.length-1) / 2){
                            className = "middle";
                        } else if (index === usersWithAddress.length-1) {
                            className = "last"
                        }


                        return(
                            <FuncUser
                                item={user}
                                cls={className}
                                key={index}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default FuncUsers;