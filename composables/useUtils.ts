export const useUtils = () => {
    const sayWelcome = () => {
        console.log('Hii, Welcome')
    }
    const sayGoodbye = () => {
        console.log('Goodbyee')
    }
    return {
        sayWelcome,
        sayGoodbye
    }
}