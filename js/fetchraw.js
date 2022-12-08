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
    document.getElementById("pp1").innerHTML = `<pre>${JSON.stringify(json1.playerInfo.pp, null, 2)}</pre>`;
    document.getElementById("rpc1").innerHTML = `<pre>${JSON.stringify(json1.scoreStats.rankedPlayCount, null, 2)}</pre>`;

    const resp2 = await fetch('https://new.scoresaber.com/api/player/' + txtInp2.value + '/full');
    const json2 = await resp2.json();
    const playerName2 = json2.playerInfo.playerName
    const playerNameNoQuotes2 = playerName2.replace(/"/g, "");
    let textaccavg2 = json2.scoreStats.averageRankedAccuracy;
    let resultaccavg2 = textaccavg2.toString().slice(0, 5);
    document.getElementById("rank2").innerHTML = `<pre>${JSON.stringify(json2.playerInfo.rank, null, 2)}</pre>`;
    document.getElementById("name2").innerHTML = playerNameNoQuotes2;
    document.getElementById("Acc2").innerHTML = resultaccavg2 + "%";
    document.getElementById("pp2").innerHTML = `<pre>${JSON.stringify(json2.playerInfo.pp, null, 2)}</pre>`;
    document.getElementById("rpc2").innerHTML = `<pre>${JSON.stringify(json2.scoreStats.rankedPlayCount, null, 2)}</pre>`;
    
    rank1 = JSON.stringify(json1.playerInfo.rank, null, 2);
    rank2 = JSON.stringify(json2.playerInfo.rank, null, 2);
    rankdiff = Number(rank1) - Number(rank2);
    document.getElementById("rankdiff").innerHTML = rankdiff;
    
    acc1 = resultaccavg1;
    acc2 = resultaccavg2;
    accdiffraw = Number(acc1) - Number(acc2);
    accdiff = accdiffraw.toString().slice(0, 5);
    document.getElementById("accdiff").innerHTML = accdiff + "%";

    pp1 = JSON.stringify(json1.playerInfo.pp, null, 2);
    pp2 = JSON.stringify(json2.playerInfo.pp, null, 2);
    ppdiff = Number(pp1) - Number(pp2);
    document.getElementById("ppdiff").innerHTML = ppdiff;

    rpc1 = JSON.stringify(json1.scoreStats.rankedPlayCount, null, 2);
    rpc2 = JSON.stringify(json2.scoreStats.rankedPlayCount, null, 2);
    rpcdiff = Number(rpc1) - Number(rpc2);
    document.getElementById("rpcdiff").innerHTML = rpcdiff;

    if (rankdiff > 0) {
        document.getElementById("rankdiff").style.color = "red";
    }
    if (accdiff > 0) {
        document.getElementById("accdiff").style.color = "green";
    }
    if (ppdiff > 0) {
        document.getElementById("ppdiff").style.color = "green";
    }
    if (rankdiff < 0) {
        document.getElementById("rankdiff").style.color = "green";
    }
    if (accdiff < 0) {
        document.getElementById("accdiff").style.color = "red";
    }
    if (ppdiff < 0) {
        document.getElementById("ppdiff").style.color = "red";
    }
}
