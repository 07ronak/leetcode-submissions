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
    let land_water = Infinity
    for(let i=0; i<m; i++){
        land_water = Math.min(land_water,Math.max(land,waterStartTime[i])+waterDuration[i])
    }


    //water-land
    //find earliest water
    let water = Infinity
    for(let i=0; i<m; i++){
        water = Math.min(water,waterStartTime[i]+waterDuration[i])
    }
    //now use this to find minimum of water_land
    let water_land = Infinity
    for(let i=0; i<n; i++){
        water_land = Math.min(water_land,Math.max(water,landStartTime[i])+landDuration[i])
    }


    return Math.min(land_water,water_land)
};