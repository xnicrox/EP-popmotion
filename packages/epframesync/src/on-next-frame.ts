import { navigator } from "./useragent"
const MobileDetect = require("mobile-detect")

const UA = String(navigator)
const device = new MobileDetect(UA)

console.log(`device::${device.mobile()}..${UA}`)
console.log(`device::${device.tablet()}..${UA}`)

const isMobile =
    device.mobile() === null && device.tablet() === null
        ? (1 / 60) * 1000
        : (1 / 30) * 1000
const isDesktop =
    device.mobile() === null && device.tablet() === null ? true : false

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
              window.requestAnimationFrame(callback)
        : (callback: FrameRequestCallback) =>
              setTimeout(() => callback(getCurrentTime()), defaultTimestep)

export const onNextFrameCavas = (callback: FrameRequestCallback) =>
    window.requestAnimationFrame(callback)
