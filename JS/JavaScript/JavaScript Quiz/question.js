const _0x2376=['Q2:\x20This\x20is\x20question\x201','333373yYQRNv','#option4','innerText','Choose\x20Option\x201','3pcdQlG','Choose\x20Option\x204','847814rOQJsu','193EhkcgT','click','checked','#showScore','#option1','Q3:\x20This\x20is\x20question\x201','#option3','length','addEventListener','#submit','forEach','668927ecixSe','1643tpOMaO','Choose\x20Option\x202','...&#9996;</h3>\x0a\x09\x09\x09\x09<button\x20class=\x22btn\x22\x20onclick=\x22location.reload()\x22>Play\x20Again</button>\x0a\x09\x09\x09','querySelector','Q1:\x20This\x20is\x20question\x201','scoreArea','ans2','querySelectorAll','659807WvTAem','log','259283RymeUo','innerHTML','#option2','.question','question','ans1','Q4:\x20This\x20is\x20question\x201','Choose\x20Option\x203','38cZOajL','ans3','17939FenDJW'];const _0x4a16c8=_0x3885;(function(_0x2f72e6,_0x35d452){const _0x17517e=_0x3885;while(!![]){try{const _0xfb650c=parseInt(_0x17517e(0x164))+parseInt(_0x17517e(0x158))+-parseInt(_0x17517e(0x16b))*-parseInt(_0x17517e(0x14e))+parseInt(_0x17517e(0x176))+-parseInt(_0x17517e(0x162))*-parseInt(_0x17517e(0x160))+parseInt(_0x17517e(0x156))+-parseInt(_0x17517e(0x168))*parseInt(_0x17517e(0x16a));if(_0xfb650c===_0x35d452)break;else _0x2f72e6['push'](_0x2f72e6['shift']());}catch(_0x12c917){_0x2f72e6['push'](_0x2f72e6['shift']());}}}(_0x2376,0x5bf99));const quizDB=[{'question':_0x4a16c8(0x152),'a':_0x4a16c8(0x167),'b':_0x4a16c8(0x14f),'c':_0x4a16c8(0x15f),'d':'Choose\x20Option\x204','ans':_0x4a16c8(0x15d)},{'question':_0x4a16c8(0x163),'a':_0x4a16c8(0x167),'b':'Choose\x20Option\x202','c':'Choose\x20Option\x203','d':'Choose\x20Option\x204','ans':_0x4a16c8(0x154)},{'question':_0x4a16c8(0x170),'a':'Choose\x20Option\x201','b':_0x4a16c8(0x14f),'c':'Choose\x20Option\x203','d':_0x4a16c8(0x169),'ans':_0x4a16c8(0x161)},{'question':_0x4a16c8(0x15e),'a':_0x4a16c8(0x167),'b':_0x4a16c8(0x14f),'c':_0x4a16c8(0x15f),'d':_0x4a16c8(0x169),'ans':'ans4'}],question=document[_0x4a16c8(0x151)](_0x4a16c8(0x15b)),option1=document[_0x4a16c8(0x151)](_0x4a16c8(0x16f)),option2=document[_0x4a16c8(0x151)](_0x4a16c8(0x15a)),option3=document[_0x4a16c8(0x151)](_0x4a16c8(0x171)),option4=document['querySelector'](_0x4a16c8(0x165)),submit=document[_0x4a16c8(0x151)](_0x4a16c8(0x174)),answers=document[_0x4a16c8(0x155)]('.answer'),showScore=document[_0x4a16c8(0x151)](_0x4a16c8(0x16e));let questionCount=0x0,score=0x0;const loadQuestion=()=>{const _0x57c6e4=_0x4a16c8,_0x45da0f=quizDB[questionCount];question[_0x57c6e4(0x166)]=_0x45da0f[_0x57c6e4(0x15c)],option1[_0x57c6e4(0x166)]=_0x45da0f['a'],option2[_0x57c6e4(0x166)]=_0x45da0f['b'],option3[_0x57c6e4(0x166)]=_0x45da0f['c'],option4[_0x57c6e4(0x166)]=_0x45da0f['d'];};loadQuestion();function _0x3885(_0x2c728f,_0x55954f){return _0x3885=function(_0x2376f4,_0x388586){_0x2376f4=_0x2376f4-0x14e;let _0x4b6049=_0x2376[_0x2376f4];return _0x4b6049;},_0x3885(_0x2c728f,_0x55954f);}const getCheckAnswer=()=>{const _0x4a7add=_0x4a16c8;let _0x129239;return answers[_0x4a7add(0x175)](_0x459eb8=>{const _0xf121b5=_0x4a7add;_0x459eb8[_0xf121b5(0x16d)]&&(_0x129239=_0x459eb8['id']);}),_0x129239;},deselect=()=>{const _0x5067f4=_0x4a16c8;answers['forEach'](_0x424411=>_0x424411[_0x5067f4(0x16d)]=!0x1);};submit[_0x4a16c8(0x173)](_0x4a16c8(0x16c),()=>{const _0x2cdb22=_0x4a16c8,_0x2e4c8f=getCheckAnswer();console[_0x2cdb22(0x157)](_0x2e4c8f),_0x2e4c8f===quizDB[questionCount]['ans']&&score++,questionCount++,answers[_0x2cdb22(0x175)](_0x1b98d8=>_0x1b98d8['checked']=!0x1),questionCount<quizDB['length']?loadQuestion():(showScore[_0x2cdb22(0x159)]='\x0a\x09\x09\x09\x09<h3>You\x20have\x20Scored\x20'+score+'/'+quizDB[_0x2cdb22(0x172)]+_0x2cdb22(0x150),showScore['classList']['remove'](_0x2cdb22(0x153)));});