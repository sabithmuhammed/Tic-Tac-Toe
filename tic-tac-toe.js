let arr = ["", "", "", "", "", "", "", "", ""];
let player = 1;
const result = document.getElementById("result");
function change(item) {
  const id = item.id;
  if (arr[id] === "") {
    if (player === 1) {
      item.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else {
      item.innerHTML = '<i class="fa-solid fa-o"></i>';
    }
    arr[id] = player;
    if (checkWin()) {
      player = player === 1 ? 2 : 1;
      result.innerText = `Player ${player}'s move`;
      if(!arr.includes('')){
        result.innerText = `It's a draw`;
        const cover = document.getElementById("cover");
         cover.classList.toggle("hide");
      }
    }
  }
}

function checkWin() {
  if (
    (arr[0] === player && arr[1] === player && arr[2] === player) ||
    (arr[3] === player && arr[4] === player && arr[5] === player) ||
    (arr[6] === player && arr[7] === player && arr[8] === player) ||
    (arr[0] === player && arr[3] === player && arr[6] === player) ||
    (arr[1] === player && arr[4] === player && arr[7] === player) ||
    (arr[2] === player && arr[5] === player && arr[8] === player) ||
    (arr[0] === player && arr[4] === player && arr[8] === player) ||
    (arr[6] === player && arr[4] === player && arr[2] === player)
  ) {
    result.innerText = `Player ${player} win`;
    const cover = document.getElementById("cover");
    cover.classList.toggle("hide");
    return false;
  }
  return true;
}
