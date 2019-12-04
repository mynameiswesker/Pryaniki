import React from 'react';

export class TextPages extends React.Component {
    renderTemplate = () =>{
        const { period, photos, isFetching } = this.props;

        if(photos.length ==0){
            return(
                <div></div>
            )
        }
        if (photos.length !==0 && !isFetching) {
            return(
                <p>Графики за {period} период</p>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderTemplate()}
            </div>
        );
    }
}


