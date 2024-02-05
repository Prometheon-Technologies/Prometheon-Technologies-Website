import { Component, createEffect, createSignal, onMount } from 'solid-js'
import { useEventListener } from 'solidjs-use'
import CallToAction from '@components/CallToAction'
import CurrentProblem from '@components/CurrentProblem'
import Footer from '@components/Footer'
import Heading from '@components/Heading'
import Hero from '@components/Hero'
import HowWeDoIt from '@components/HowWeDoIt'
import LargeClaim from '@components/LargeClaim'
import OurPromise from '@components/OurPromise'
import TechnicalDetails from '@components/TechnicalDetails'
import WhatWeDo from '@components/WhatWeDo'
import WhatWeHave from '@components/WhatWeHave'

const Slide: Component = () => {
    const [sections, setSections] = createSignal<HTMLElement[]>([])

    createEffect(() => {})

    const body = document.body
    const burger = document.querySelector('.burger_king')
    const top_menu = document.querySelector('.top_menu')

    useEventListener(window, 'load', (event) => {
        body.classList.remove('preload')
        setActiveSlide()
    })

    const setActiveSlide = () => {
        const windowHeight = window.innerHeight
        console.log(windowHeight)
        console.debug(sections())
        sections().forEach((section) => {
            const rect = section.getBoundingClientRect()
            const isVisible = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5
            if (isVisible) {
                section.classList.add('active')
                body.className = section['dataset'].slide as string
            } else {
                section.classList.remove('active')
            }
        })
    }

    onMount(() => {
        setActiveSlide()

        const _sections = document.querySelectorAll('.slide')
        setSections(_sections as unknown as HTMLElement[])

        useEventListener(window, 'scroll', (event) => {
            setActiveSlide()
        })

        useEventListener(burger, 'click', (event) => {
            burger?.classList.toggle('active')
            top_menu?.classList.toggle('active')
        })
    })

    return (
        <main>
            <Heading />
            <CallToAction />
            <WhatWeDo />
            <CurrentProblem />
            <Hero />
            <LargeClaim />
            <WhatWeHave />
            <TechnicalDetails />
            <HowWeDoIt />
            <OurPromise />
            <Footer />
        </main>
    )
}

export default Slide