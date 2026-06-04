/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    const n = landStartTime.length
    const m = waterStartTime.length

    //land-water
    //find earliest land
    let land = Infinity
    for(let i=0; i<n; i++){
        land = Math.min(land,landStartTime[i]+landDuration[i])
    }
    //now use this to find minimum of land_water
    let res = Infinity
    let water = Infinity
    for(let i=0; i<m; i++){
        water = Math.min(water,waterStartTime[i]+waterDuration[i])
        res = Math.min(res,Math.max(land,waterStartTime[i])+waterDuration[i])
    }

    //water-land
    //now use `water` to find minimum of water_land
    for(let i=0; i<n; i++){
        res = Math.min(res,Math.max(water,landStartTime[i])+landDuration[i])
    }

    return res
};