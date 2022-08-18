import { navigator, detectMobile } from "./useragent"

console.log(`device mobile::${detectMobile()}`)
console.log(`browser::${navigator}`)

const isMobile = !detectMobile() ? (1 / 60) * 1000 : (1 / 30) * 1000
const isDesktop = !detectMobile() ? true : false

/*
  Detect and load appropriate clock setting for the execution environment
 */
export const defaultTimestep = isMobile

const getCurrentTime =
    typeof performance !== "undefined"
        ? () => performance.now()
        : () => Date.now()

export const onNextFrame =
    typeof window !== "undefined" && isDesktop
        ? (callback: FrameRequestCallback) =>
              ////window.requestAnimationFrame(callback)
              setTimeout(() => callback(getCurrentTime()), defaultTimestep)
        : (callback: FrameRequestCallback) =>
              setTimeout(() => callback(getCurrentTime()), defaultTimestep)

export const onNextFrameCavas = (callback: FrameRequestCallback) =>
    ////window.requestAnimationFrame(callback)
    setTimeout(() => callback(getCurrentTime()), defaultTimestep)
