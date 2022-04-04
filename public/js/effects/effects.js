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
function unlock() {
    let btn = document.querySelectorAll("select");
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
    }
    document.getElementById("create").disabled = false;
    document.getElementById("sort").disabled = false;
}
function CreateGraph() {
    let array = [];
    let main = [];
    let k = 0, i = 0;
    let length = document.getElementById("length");
    while (i < parseInt(length.value)) {
        let temp = Math.floor(Math.random() * 100) + 1;
        if (array.indexOf(temp) === -1) {
            array[i] = temp;
            i++;
        }
    }
    let cont = document.getElementById("animation-box");
    cont.innerHTML = "";
    for (let i = 0; i < parseInt(length.value); i++) {
        main[i] = document.createElement("div");
        cont.appendChild(main[i]);
        main[i].style = "position:absolute;transition:0.5s;bottom:0px;border:0.5px solid black;height:" + array[i].toString() + "%;width:" + Math.floor(100 / parseInt(length.value)) + "%;background-color:rgba(235, 178, 72, 0.424);left:" + (i * Math.floor(100 / parseInt(length.value))).toString() + "%";
    }
    var btn = document.getElementById("sort");
    btn.disabled = false;
}
function Sort() {
    return __awaiter(this, void 0, void 0, function* () {
        let btn = document.querySelectorAll("select");
        for (var i = 0; i < btn.length - 1; i++) {
            btn[i].disabled = true;
        }
        let btn_1 = document.getElementById("create");
        let btn_2 = document.getElementById("sort");
        btn_1.disabled = true;
        btn_2.disabled = true;
        let option = document.getElementById("sortOption");
        switch (option.value) {
            case "1":
                yield Actual_Bubble_Sort();
                unlock();
                break;
            case "2":
                yield Merge();
                unlock();
                break;
            case "3":
                yield insertion_sort();
                unlock();
                break;
            case "4":
                yield selection_sort();
                unlock();
                break;
            case "5":
                yield quick_sort();
                unlock();
                break;
            case "6":
                yield heap_Sort();
                unlock();
                break;
            default:
                alert("This is not the option");
                break;
        }
    });
}
