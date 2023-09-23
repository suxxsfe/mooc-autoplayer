// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mooc1.chaoxing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @grant        none
// ==/UserScript==

function sleep(time){
 return new Promise((resolve) => setTimeout(resolve, time));
}


//window.onload=async function(){

    await sleep(5000);

    var taskList=document.getElementsByClassName("posCatalog_name");
    if(!taskList){
        console.log("fuck1");
    }
    console.log("get task list");

    for(let i=0;i<taskList.length;i++){

        console.log("went into task "+i);
        let task=taskList[i];
        task.click();
        await sleep(3000);

        let _frame=document.getElementById("iframe");
        let __frame=_frame.contentWindow.document.getElementsByTagName("iframe");
        let _doc=__frame[0].contentWindow.document;
        if(!_doc){
            console.log("fuck2");
        }
        else{
            console.log(_doc);
        }

        let playNode=null;
        playNode=_doc.getElementsByClassName("vjs-big-play-button")[0];
        if(!playNode){
            console.log("fuck3");
        }
        else{
            console.log(playNode);
        }
        playNode.click();
        console.log("clicked");
        await sleep(2000);

        let timeText=_doc.getElementsByClassName("vjs-duration-display")[0].innerHTML;
        console.log("time= "+timeText);
        let time=parseInt(timeText.substring(0,2));
        time=(time+3)*60*1000;
        console.log("the millisecond of time= "+time);
        await sleep(time);
//        await sleep(5000);
    }
//}





