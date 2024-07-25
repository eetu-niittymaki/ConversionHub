export const fToC = (fahr) => {
    return (fahr - 32) / 1.8
}

export const cToF = (cel) => {
    return (cel * 1.8) + 32
}

export const meterToMile = (meter)  => {
    return meter / 0.00062137
}

export const mileToMeter = (mile)  => {
    return mile * 1609.344
}