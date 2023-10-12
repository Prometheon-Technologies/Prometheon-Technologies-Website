import { Component, For, onMount } from 'solid-js'
import { useLocation, A } from 'solid-start'
import { routes, userRoutes } from '@routes/index'
import './index.css'

const Header = () => {
    const location = useLocation()
    const active = (path: string) =>
        path == location.pathname ? 'border-sky-600' : 'border-transparent hover:border-sky-600'

    const contactRoute = routes.filter((route) => route.endpoint === '/contact')

    onMount(() => {
        window.onscroll = function () {
            scrollFunction()
        }

        const header = document.getElementById('header')

        const sticky = header?.offsetTop

        const scrollFunction = () => {
            if (window.scrollY > sticky!) {
                header?.classList.add('sticky')
            } else {
                header?.classList.remove('sticky')
            }
        }
    })

    const ContactButton: Component = () => {
        return (
            <div class="group mx-1.5 sm:mx-6">
                <li>
                    <A href={contactRoute[0].endpoint}>
                        <div class="contact-button">{contactRoute[0].name}</div>
                    </A>
                </li>
            </div>
        )
    }

    return (
        <header id="header" class="header">
            <div class="container-fluid">
                <div class="nav-wrap">
                    <nav class="content bg-sky-800">
                        <ul class="container flex items-center justify-end p-3 text-gray-200">
                            <For each={userRoutes} fallback={<div>No items</div>}>
                                {(route, index) => (
                                    <div
                                        class={`border-t-2 ${active(
                                            route.endpoint,
                                        )} mx-1.5 sm:mx-6`}
                                        data-index={index()}>
                                        <li>
                                            <div class="pt-4">
                                                <A href={route.endpoint}>{route.name}</A>
                                            </div>
                                        </li>
                                    </div>
                                )}
                            </For>
                            <ContactButton />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
