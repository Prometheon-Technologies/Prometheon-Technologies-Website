// @refresh reload
import { Suspense, lazy } from 'solid-js'
import { Body, ErrorBoundary, Head, Html, Meta, Scripts, Title } from 'solid-start'
import '@src/styles/imports.css'

const AppRoutes = lazy(() => import('@routes/Routes'))

const Root = () => {
    return (
        <Html lang="en">
            <Head>
                <Title>SolidStart - With TailwindCSS</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <div class="main-div">
                            <AppRoutes />
                        </div>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    )
}

export default Root
