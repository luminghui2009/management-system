import React from 'react';
import HeaderNav from "../Header/index";
import Contents from "../Contents/index";
export default class Index extends React.Component{
    render(){
        return(
            <div>
                <HeaderNav/>
                <Contents/>
            </div>
        )
    }
}