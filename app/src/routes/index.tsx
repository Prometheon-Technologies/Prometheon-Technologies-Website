import { clientOnly } from '@solidjs/start'

const Main = clientOnly(() => import('@components/Slide'))

export default Main
