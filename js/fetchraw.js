async function get1() {
    const resp1 = await fetch('https://new.scoresaber.com/api/player/' + txtInp1.value + '/full');
    const json1 = await resp1.json();
    const playerName1 = json1.playerInfo.playerName
    const playerNameNoQuotes1 = playerName1.replace(/"/g, "");
    let textaccavg1 = json1.scoreStats.averageRankedAccuracy;
    let resultaccavg1 = textaccavg1.toString().slice(0, 5);
    document.getElementById("rank1").innerHTML = `<pre>${JSON.stringify(json1.playerInfo.rank, null, 2)}</pre>`;
    document.getElementById("name1").innerHTML = playerNameNoQuotes1;
    document.getElementById("Acc1").innerHTML = resultaccavg1 + "%";

    const resp2 = await fetch('https://new.scoresaber.com/api/player/' + txtInp2.value + '/full');
    const json2 = await resp2.json();
    const playerName2 = json2.playerInfo.playerName
    const playerNameNoQuotes2 = playerName2.replace(/"/g, "");
    let textaccavg2 = json2.scoreStats.averageRankedAccuracy;
    let resultaccavg2 = textaccavg2.toString().slice(0, 5);
    document.getElementById("rank2").innerHTML = `<pre>${JSON.stringify(json2.playerInfo.rank, null, 2)}</pre>`;
    document.getElementById("name2").innerHTML = playerNameNoQuotes2;
    document.getElementById("Acc2").innerHTML = resultaccavg2 + "%";

    rank1 = JSON.stringify(json1.playerInfo.rank, null, 2);
    rank2 = JSON.stringify(json2.playerInfo.rank, null, 2);
    rankdiff = Number(rank1) - Number(rank2);
    document.getElementById("rankdiff").innerHTML = rankdiff;
    
    acc1 = resultaccavg1;
    acc2 = resultaccavg2;
    accdiff = Number(acc1) - Number(acc2);
    document.getElementById("accdiff").innerHTML = accdiff + "%";
}
