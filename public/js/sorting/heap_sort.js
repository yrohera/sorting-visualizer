"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function swap(array, i, j) {
    let temp = array[i].style.height;
    array[i].style.height = array[j].style.height;
    array[j].style.height = temp;
}
function convert_2_number(strings) {
    return parseInt(strings.substring(0, strings.length - 1));
}
function heapify(array, length, i) {
    return __awaiter(this, void 0, void 0, function* () {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let left, right;
        array[i].style.backgroundColor = "yellow";
        let main = convert_2_number(array[largest].style.height);
        if (l < length) {
            array[l].style.backgroundColor = "red";
        }
        if (r < length) {
            array[r].style.backgroundColor = "red";
        }
        if (l < length) {
            left = convert_2_number(array[l].style.height);
            if (left > main) {
                largest = l;
                main = left;
            }
        }
        if (r < length) {
            right = convert_2_number(array[r].style.height);
            if (right > main) {
                largest = r;
            }
        }
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("");
            }, parseInt(document.getElementById("speed").value));
        });
        if (largest !== i) {
            swap(array, largest, i);
            if (l < length) {
                array[l].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            }
            if (r < length) {
                array[r].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            }
            array[i].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            yield heapify(array, length, largest);
        }
        else {
            if (l < length) {
                array[l].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            }
            if (r < length) {
                array[r].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            }
            array[i].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
        }
    });
}
function heap_Sort() {
    return __awaiter(this, void 0, void 0, function* () {
        let main = document.getElementById("animation-box");
        let array = main.childNodes;
        let length = array.length;
        for (let i = Math.floor(length / 2); i >= 0; i--) {
            yield heapify(array, length, i);
        }
        for (let i = length - 1; i > 0; i--) {
            swap(array, 0, i);
            yield heapify(array, i, 0);
        }
    });
}
