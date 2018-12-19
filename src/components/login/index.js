import React, { Component } from 'react';
import FacebookButton from './Facebook';

class Index extends Component {

    render() {
        return(
            <form action="">
                <div className="row">
                    <div className="col">
                        <FacebookButton />
                    </div>
                </div>
            </form>
        )
    }
}

export default Index;
