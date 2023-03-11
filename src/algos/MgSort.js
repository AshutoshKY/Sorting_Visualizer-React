import { disable, enable, Wait, deletedefaultcard} from "../components/main";

function cardMgsort(){
  var p = document.createElement('h1');
  p.innerHTML = 'Merge sort is one of the most efficient sorting algorithms. Based on the divide-and-conquer strategy, Merge sort continuously cuts down a list into multiple sublists until each has only one item, then merges those sublists into a sorted list.';
  document.getElementById('card').appendChild(p);
}


async function merge(ele, low, mid, high) {

  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await Wait(100 - document.getElementById("arr_speed").value);
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
  }
  await Wait(100 - document.getElementById("arr_speed").value);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await Wait(100 - document.getElementById("arr_speed").value);
    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "red";
      }

      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "red";
      }
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await Wait(100 - document.getElementById("arr_speed").value);
    console.log("In while if n1 is left");
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "red";
    }
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await Wait(100 - document.getElementById("arr_speed").value);
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "red";
    }
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

async function MergeSort(ele, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  await MergeSort(ele, l, m);
  await MergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}

export default async function ShowMergeSort() {
  deletedefaultcard();
  cardMgsort();
  let ele = document.querySelectorAll(".flex-item");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  disable();
  await MergeSort(ele, l, r);
  enable();
  // deletecardMgsort();
  // defaultCard();
}
