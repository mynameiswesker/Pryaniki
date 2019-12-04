import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import  { Buttons }  from '../components/Buttons';
import  { TextPages }  from '../components/TextPages';
import { getPhotos } from '../actions/pagesAction';
import { Graphic } from '../components/Graphic';

class App extends Component {

    render() {
      const { photo, getPhotosAction } = this.props;
    return (
        <div className="App">
            <Buttons getPeriod={getPhotosAction}/>
            <TextPages period={photo.period}
                       photos={photo.photos}
                       isFetching={photo.isFetching}
            />
            <Graphic period={photo.period}
                     photos={photo.photos}
                     isFetching={photo.isFetching}/>
        </div>
    );
  }
}

const mapStateToProps = store => {
    return{
        photo : store.photo
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getPhotosAction: period => dispatch(getPhotos(period)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
