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
function partition(array, low, high) {
    return __awaiter(this, void 0, void 0, function* () {
        let key = high;
        let i = low, j = low - 1;
        while (i < high) {
            array[key].style.backgroundColor = "red";
            array[i].style.backgroundColor = "yellow";
            let len1 = array[key].style.height;
            len1 = len1.substring(0, len1.length - 1);
            let len2 = array[i].style.height;
            len2 = len2.substring(0, len2.length - 1);
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('');
                }, parseInt(document.getElementById("speed").value));
            });
            if (parseInt(len1) > parseInt(len2)) {
                j++;
                let temp = array[i].style.height;
                array[i].style.height = array[j].style.height;
                array[j].style.height = temp;
            }
            array[i].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            i++;
        }
        let temp = array[key].style.height;
        array[key].style.height = array[j + 1].style.height;
        array[j + 1].style.height = temp;
        array[key].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
        return j + 1;
    });
}
function quick_sort(low, high) {
    return __awaiter(this, void 0, void 0, function* () {
        let main = document.getElementById("animation-box");
        let array1 = main.childNodes;
        if (low === undefined && high === undefined) {
            low = 0;
            high = array1.length - 1;
        }
        if (low < high) {
            let key = yield partition(array1, low, high);
            yield quick_sort(low, key - 1);
            yield quick_sort(key + 1, high);
        }
    });
}
