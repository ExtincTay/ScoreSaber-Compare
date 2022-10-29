async function get1() {
  document.getElementById("p1frame").src = "https://scoresaber.com/u/" + txtInp1.value;
}
async function get2() {
  document.getElementById("p2frame").src = "https://scoresaber.com/u/" + txtInp2.value;
}
async function load() {
  document.getElementById("p1frame").src = "https://scoresaber.com/u/76561198388103578";
  document.getElementById("p2frame").src = "https://scoresaber.com/u/76561198352885497";
}