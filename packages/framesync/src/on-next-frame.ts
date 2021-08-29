import { navigator } from "./useragent"
const MobileDetect = require("mobile-detect")

const UA = String(navigator)
const device = new MobileDetect(UA)

console.log(`device::${device.mobile()}..${UA}`)

/*
  Detect and load appropriate clock setting for the execution environment
 */
export const defaultTimestep =
    device.mobile() !== null ? (1 / 60) * 1000 : (1 / 30) * 1000

const getCurrentTime =
    typeof performance !== "undefined"
        ? () => performance.now()
        : () => Date.now()

export const onNextFrame =
    typeof window !== "undefined"
        ? (callback: FrameRequestCallback) =>
              window.requestAnimationFrame(callback)
        : (callback: FrameRequestCallback) =>
              setTimeout(() => callback(getCurrentTime()), defaultTimestep)
