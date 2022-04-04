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
function insertion_sort() {
    return __awaiter(this, void 0, void 0, function* () {
        let key;
        let count = 0;
        let main = document.getElementById("animation-box");
        let array = main.childNodes;
        let length = array.length;
        for (let i = 1; i < array.length; i++) {
            let temp = array[i].style.height;
            key = parseInt(temp.substring(0, temp.length - 1));
            let key_index = i;
            array[i].style.backgroundColor = "yellow";
            for (let j = i - 1; j >= 0; j--) {
                let temp2 = array[j].style.height;
                array[j].style.backgroundColor = "red";
                yield new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('');
                    }, parseInt(document.getElementById("speed").value));
                });
                if (key < parseInt(temp2.substring(0, temp2.length - 1))) {
                    array[j + 1].style.height = array[j].style.height;
                    key_index = j;
                }
                else {
                    array[i].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
                    array[j].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
                    break;
                }
                array[j].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            }
            array[i].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            array[key_index].style.height = key.toString() + "%";
            array[key_index].style.backgroundColor = "green";
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('');
                }, 0);
            });
            array[key_index].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
        }
    });
}
