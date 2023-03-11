import { disable, enable, Wait, Swap, deletedefaultcard} from "../components/main";

function cardQsort(){
  var p = document.createElement('h1');
  p.innerHTML = 'QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. ';
  document.getElementById('card').appendChild(p);
}

async function partition(ele, l, r) {
  let i = l - 1;
  ele[r].style.background = "rgb(255, 87, 87)";
  for (let j = l; j <= r - 1; j++) {
    ele[j].style.background = "orange";
    await Wait(100 - document.getElementById("arr_speed").value);
    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      i++;
      Swap(ele[i], ele[j]);
      ele[i].style.background = "orange";
      if (i !== j) {
        ele[j].style.background = "orange"
      };
      await Wait(100 - document.getElementById("arr_speed").value);
    }
    else {
      ele[j].style.background = "purple";
    }
  }
  i++;

  await Wait(100 - document.getElementById("arr_speed").value);
  Swap(ele[i], ele[r]);

  ele[r].style.background = "purple";
  ele[i].style.background = "green";

  await Wait(100 - document.getElementById("arr_speed").value);

  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background !== "green") ele[k].style.background = "rgb(82, 82, 253)";
  }

  return i;
}

async function Quick(ele, l, r) {
  if (l < r) {
    let pivot_index = await partition(ele, l, r);
    await Quick(ele, l, pivot_index - 1);
    await Quick(ele, pivot_index + 1, r);
  }
  else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "green";
      ele[l].style.background = "green";
    }
  }
}

export default async function QuickSort() {
  const ele = document.querySelectorAll(".flex-item");
  disable();
  deletedefaultcard();
  cardQsort();
  await Quick(ele, 0, ele.length - 1);
  enable();
  // deletecardQsort();
  // defaultCard();
}