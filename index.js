const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

var totalBatteries = 0

function total(){
    for (let i = 0; i < batteryBatches.length; i++) {
        sum += batteryBatches[i];
        totalBatteries = sum;
        return totalBatteries;
    }
    
}
batteryBatches.reduce(total);




