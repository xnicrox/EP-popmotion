export const navigator = window.navigator.userAgent

export const detectMobile = () => {
    const ua = window.navigator.userAgent
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        ua
    )
}
