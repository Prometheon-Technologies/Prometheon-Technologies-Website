import { SiMinutemailer } from 'solid-icons/si'

const Heading = () => {
    return (
        <div class="slide first" id="top" data-slide="first">
            <div class="wrapper full_height in_the_middle">
                <div class="center">
                    <div class="first_heading">
                        Prometheon Technologies
                        <span>Developing Game-changing technology in Renewable Energy</span>
                    </div>
                    <div>
                        <a href="mailto:info@prometheontechnologies.com" class="get_in_touch">
                            <div class="flex items-center justify-center flex-row">
                                <p>We'd Love to hear from you!</p>
                                <SiMinutemailer />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="first_bottom" />
        </div>
    )
}

export default Heading
