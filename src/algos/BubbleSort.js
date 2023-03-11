import {Wait, Swap, disable, enable, deletedefaultcard} from "../components/main";

function cardBBsort(){
  var p = document.createElement('h1');
  p.innerHTML = 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. ';
  document.getElementById('card').appendChild(p);
}

export default async function BubbleSort() {
  disable();
  deletedefaultcard();
  cardBBsort();
  const ele = document.querySelectorAll(".flex-item");
  for (let i = 0; i < ele.length; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.backgroundColor = "blue";
      ele[j + 1].style.backgroundColor = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await Wait(100 - document.getElementById("arr_speed").value);
        Swap(ele[j], ele[j + 1]);
      }
      ele[j].style.backgroundColor = "cyan";
      ele[j + 1].style.backgroundColor = "cyan";
    }
    ele[ele.length - i - 1].style.backgroundColor = "green";
  }
  ele[0].style.backgroundColor = "green";
  enable();
}
  