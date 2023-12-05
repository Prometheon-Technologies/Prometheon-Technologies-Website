const Header = () => {
    return (
        <div class="fixed_top">
            <div class="wrapper fixed_top__inner">
                <a href="#top">
                    <img src="img/svg/logo.svg" class="logo" alt="Logo" />
                </a>
                <button class="burger_king">
                    <span />
                </button>
                <ul class="top_menu">
                    <li style={{ 'transition-delay': '.6s' }}>
                        <a href="#whatwedo">What We Do</a>
                    </li>
                    <li style={{ 'transition-delay': '.9s' }}>
                        <a href="#howwedoit">How We Do It</a>
                    </li>
                    <li style={{ 'transition-delay': '1.1s' }}>
                        <a href="#aboutus">About Us</a>
                    </li>
                    <li style={{ 'transition-delay': '1.4s' }}>
                        <a href="#contactsus">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
