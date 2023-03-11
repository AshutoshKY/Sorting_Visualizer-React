import "../styles/GeneralStyle.css";

export default function GenArr(arraysize=130){
  const min = 10;
  const max = 700;
  const bars = document.querySelector("#yoyoarrays");

  for (let i = 0; i < arraysize; i++) {
    const rand = min + Math.random() * (max - min);
    const bar = document.createElement("div");
    bar.classList.add("flex-item");
    bar.classList.add(`bar-no${i}`);
    bar.style.height = `${parseInt(rand)}px`;
    bars.appendChild(bar);
  }
}

export function deleteArr() {
    const del = document.getElementById("yoyoarrays");
    del.innerHTML = "";
  }

export async function Wait(milisec) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, milisec);
    });
  }

export function disable() {
  document.querySelector("#newarr").disabled = true;
  document.querySelector("#arr_size").disabled = true;
  document.querySelector("#bub_srt").disabled = true;
  document.querySelector("#ins_srt").disabled = true;
  document.querySelector("#mer_srt").disabled = true;
  document.querySelector("#qui_srt").disabled = true;
  document.querySelector("#sel_srt").disabled = true;
}

export function enable() {
  document.querySelector("#newarr").disabled = false;
  document.querySelector("#arr_size").disabled = false;
  document.querySelector("#bub_srt").disabled = false;
  document.querySelector("#ins_srt").disabled = false;
  document.querySelector("#mer_srt").disabled = false;
  document.querySelector("#qui_srt").disabled = false;
  document.querySelector("#sel_srt").disabled = false;
}

export function Swap(e1, e2) {
  let temp = e1.style.height;
  e1.style.height = e2.style.height;
  e2.style.height = temp;
}

export function defaultCard(){
  var p = document.createElement('h1');
  p.innerHTML = 'Sorting is the process of arranging data in ascending or descending order. A sorting algorithm is used to arrange the elements of an array in a specific order.';
  document.getElementById('card').appendChild(p);
}

export function deletedefaultcard(){
  const del = document.getElementById("card");
  del.innerHTML = "";
}



