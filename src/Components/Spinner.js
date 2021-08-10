const Spinner = (props) => {
    return(
        <>
            <div id="spinner">
                <h2>{ props.message || 'Loading...' }</h2>
                <div class="ui active centered inline loader">
                    
                    <div class="ui large text centered inline loader"></div>
                </div>
            </div>
        </>
    );
}

export default Spinner;