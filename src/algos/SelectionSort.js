import  { Wait, Swap, disable, enable, deletedefaultcard } from "../components/main";

function cardSSsort(){
  var p = document.createElement('h1');
  p.innerHTML = 'Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. ';
  document.getElementById('card').appendChild(p);
}

export default async function SelectionSort() {
    disable();
    deletedefaultcard();
    cardSSsort();
    const ele = document.querySelectorAll(".flex-item");
    for (let i = 0; i < ele.length; i++) {
      let min = i;
      ele[i].style.background = "blue";
      for (let j = i + 1; j < ele.length; j++) {
        ele[j].style.background = "red";
        await Wait(100 - document.getElementById("arr_speed").value);
        if (parseInt(ele[j].style.height) < parseInt(ele[min].style.height)) {
          if (min !== i) {
            ele[min].style.background = "cyan";
          }
          min = j;
        } else {
          ele[j].style.background = "cyan";
        }
      }
      Swap(ele[min], ele[i]);
      ele[min].style.background = "cyan";
      ele[i].style.background = "green";
    }
    enable();
  }