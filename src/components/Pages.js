import React from 'react';

export class Pages extends React.Component {
    renderTemplate = () => {
        const { photos, isFetching, period } = this.props;

        if (isFetching){
            return(
                <p>Загружаю...</p>
            )
        }

        if (!isFetching){
            if(photos.length !== 0){
                let srcs = photos[period];
                 return(
                     srcs.map((item,i)=>{
                         return <img src={item} width="50%" key={i} alt={period}/>
                     })
                 )
            }
        }
        if (!isFetching && photos.length ==0){
            return(
                <p>Нет загруженных фото</p>
            )
        }

    }
    render() {
        return (
            <div>
                <p>Здесь будут по 2 картинки за период.
                    На данный момент у Вас :</p>
                {this.renderTemplate()}
            </div>
        );
    }
}


