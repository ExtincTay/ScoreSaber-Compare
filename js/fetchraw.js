async function get1() {
    const resp = await fetch('https://new.scoresaber.com/api/player/' + txtInp1.value + '/full');
    const json = await resp.json();
    const playerName = json.playerInfo.playerName
    const playerNameNoQuotes = playerName.replace(/"/g, "");
    const flagcountry = json.playerInfo.country
    const capscountry = flagcountry.replace(/"/g, "");
    const country = capscountry.toLowerCase();
    let textaccavg = json.scoreStats.averageRankedAccuracy;
    let resultaccavg = textaccavg.toString().slice(0, 5);
    document.getElementById("rank1").innerHTML += `<pre>${JSON.stringify(json.playerInfo.rank, null, 2)}</pre>`;
    document.getElementById("name1").innerHTML += playerNameNoQuotes;
    document.getElementById("Acc1").innerHTML += resultaccavg + "%";
}
async function get2() {
    const resp = await fetch('https://new.scoresaber.com/api/player/' + txtInp2.value + '/full');
    const json = await resp.json();
    const playerName = json.playerInfo.playerName
    const playerNameNoQuotes = playerName.replace(/"/g, "");
    const flagcountry = json.playerInfo.country
    const capscountry = flagcountry.replace(/"/g, "");
    const country = capscountry.toLowerCase();
    let textaccavg = json.scoreStats.averageRankedAccuracy;
    let resultaccavg = textaccavg.toString().slice(0, 5);
    document.getElementById("rank2").innerHTML += `<pre>${JSON.stringify(json.playerInfo.rank, null, 2)}</pre>`;
    document.getElementById("name2").innerHTML += playerNameNoQuotes;
    document.getElementById("Acc2").innerHTML += resultaccavg + "%";
}