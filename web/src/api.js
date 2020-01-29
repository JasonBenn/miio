import { instance } from './services'

export const getCards = () => {
    return instance.get('/api/cards/')
}
