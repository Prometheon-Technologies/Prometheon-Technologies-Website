import { SiMinutemailer } from 'solid-icons/si'

const Heading = () => {
    return (
        <div class="slide first" id="top" data-slide="first">
            <div class="wrapper full_height in_the_middle gap-4">
                <div class="center">
                    <div class="first_heading">
                        Prometheon Technologies
                        <span>Helping You to Develop Game-changing technology</span>
                    </div>
                    <div class="pt-40">
                        <a href="#contactsus" class="get_in_touch">
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
