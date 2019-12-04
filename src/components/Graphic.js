import React from 'react';
import { Bar } from 'react-chartjs-2';

export class Graphic extends React.Component {

     renderTemplate = () => {
         const { photos, isFetching, period } = this.props;

         if (isFetching){
             return(
                 <p>Загружаю...</p>
             )
         }

         if (!isFetching){
             if(photos.length !== 0){

                 const data = {
                     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                     datasets: [{
                         label: period,
                         data: photos[period][2],
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(98, 255, 67, 0.2)',
                             'rgba(153, 102, 255, 0.2)',
                             'rgba(255, 159, 64, 0.2)'
                         ],
                         borderColor: [
                             'rgba(255, 99, 132, 1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(255, 206, 86, 1)',
                             'rgba(75, 192, 192, 1)',
                             'rgba(153, 102, 255, 1)',
                             'rgba(255, 159, 64, 1)'
                         ],
                         borderWidth: 1
                     }]
                 }

                 return(
                     <div className="Graph">
                         <Bar
                             data={data}
                             width={100}
                             height={50}
                             options={{ maintainAspectRatio: true }}
                         />
                     </div>
                 )
             }
         }
         if (!isFetching && photos.length ==0){
             return(
                 <p>Нет загруженных графиков</p>
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

export default Graphic;


