const HowWeDoIt = () => {
    return (
        <div class="slide ninth" data-slide="ninth" id="howwedoit">
            <div class="wrapper two_columns with_gap">
                <div class="in_the_middle full_height">
                    <video src="video/video.mp4" controls class="video">
                        <source src="video/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="in_the_middle full_height">
                    <div class="ninth_content">
                        <div class="ninth_title">
                            How We <span class="water" /> Do It
                        </div>
                        <div class="ninth_text">
                            <p>
                                Our humidity-to-electricity converter device combines at the
                                micro-level a sequence- chain of physicochemical, physical, and
                                electrophysical processes that take place on the interface of
                                nanostructured oxide materials when interacting with water molecules
                                from the surrounding atmosphere, thus enabling direct humidity
                                adsorption – electrical energy conversion without consuming water.
                            </p>
                            <p>
                                Due to modularity, converter devices can be adapted to various
                                appliances ranging from a large-scale energy production plant to a
                                household or a non- profit organization in all environments where
                                the relative humidity is over 30%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeDoIt