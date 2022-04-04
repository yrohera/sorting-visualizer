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
function selection_sort() {
    return __awaiter(this, void 0, void 0, function* () {
        let key;
        let count = 0;
        let main = document.getElementById("animation-box");
        let array = main.childNodes;
        for (let i = 0; i < array.length - 1; i++) {
            key = i;
            array[i].style.backgroundColor = "yellow";
            for (let j = i + 1; j < array.length; j++) {
                let len1 = array[key].style.height;
                len1 = len1.substring(0, len1.length - 1);
                let len2 = array[j].style.height;
                len2 = len2.substring(0, len2.length - 1);
                array[j].style.backgroundColor = "red";
                yield new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('');
                    }, parseInt(document.getElementById("speed").value));
                });
                if (parseInt(len1) > parseInt(len2)) {
                    key = j;
                }
                array[j].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
            }
            if (key !== i) {
                let temp = array[key].style.height;
                array[key].style.height = array[i].style.height;
                array[i].style.height = temp;
            }
            array[i].style.backgroundColor = "rgba(235, 178, 72, 0.424)";
        }
    });
}
