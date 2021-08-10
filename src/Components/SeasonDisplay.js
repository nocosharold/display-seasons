import React from 'react';

class SeasonDisplay extends React.Component{

    render(){
        let latitude = this.props.latitude;
        let month = new Date().getMonth();
        let season = null;

        if(latitude >= 0){
            if( month >= 3 || month <= 8 ){
                season = "summer";
            }
            else {
                season = "winter";
            }
        }
        else if(latitude < 0){
            if( month >= 9 || month <= 2 ){
                season = "summer";
            }
            else {
                season = "winter";
            }
        }
        const icon = season === 'winter' ? 'snowflake' : 'sun';
        return(
            <>
                <i className={`${icon} icon` } id="icon_top" />
                <i className={`${icon} icon`} id="icon_bottom" />
                { this.props.error !== 'User denied Geolocation' &&  <h1>{ this.props.error }</h1>}
                { season !== null &&  <h1>It is currently { season } here</h1> }
            </>
        );
    }
}

export default SeasonDisplay;