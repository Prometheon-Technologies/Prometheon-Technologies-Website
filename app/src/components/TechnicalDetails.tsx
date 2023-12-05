const Icons = () => {
    return (
        <div class="eighth_columns">
            <div class="eighth_info" style={{ 'transition-delay': '.8s' }}>
                <span class="eighth_columns_icon wind" />
                <span class="eighth_columns_text">Wind - 200x</span>
            </div>
            <div class="eighth_info" style={{ 'transition-delay': '1s' }}>
                <span class="eighth_columns_icon geotermal" />
                <span class="eighth_columns_text">Geotermal - 5x</span>
            </div>
            <div class="eighth_info" style={{ 'transition-delay': '1.2s' }}>
                <span class="eighth_columns_icon hydro" />
                <span class="eighth_columns_text">Hydro - 1x</span>
            </div>
            <div class="eighth_info" style={{ 'transition-delay': '1.4s' }}>
                <span class="eighth_columns_icon biomass" />
                <span class="eighth_columns_text">Biomass - 20x</span>
            </div>
            <div class="eighth_info" style={{ 'transition-delay': '1.6s' }}>
                <span class="eighth_columns_icon marine" />
                <span class="eighth_columns_text">Marine - 2x</span>
            </div>
            <div class="eighth_info" style={{ 'transition-delay': '1.8s' }}>
                <span class="eighth_columns_icon solar" />
                <span class="eighth_columns_text">Solar - 2 850x</span>
            </div>
            <button class="eighth_button" style={{ 'transition-delay': '2s' }}>
                <span class="eighth_columns_icon humidity" />
                <span class="eighth_columns_text">Humidity - 500x</span>
            </button>
        </div>
    )
}

const TechnicalDetails = () => {
    return (
        <div class="slide eighth" data-slide="eighth">
            <div class="wrapper two_columns">
                <div class="in_the_middle full_height">
                    <div class="eighth_content">
                        <div class="eighth_title">
                            It will give a <span class="blue">New Source</span> of Renewable Energy
                        </div>
                        <div class="eighth_text">
                            with potential to provide <strong>&times;500 times</strong>
                            <br />
                            <span class="nowrap">the current global</span> energy needs
                        </div>
                    </div>
                </div>
                <Icons />
            </div>
        </div>
    )
}

export default TechnicalDetails
