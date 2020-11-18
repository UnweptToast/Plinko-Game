var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6;


function createPlinko() {
    plinko1 = new Plinko(50, 200,15);
    plinko2 = new Plinko(120, 200, 15);
    plinko3 = new Plinko(190, 200, 15);
    plinko4 = new Plinko(260, 200, 15);
    plinko5 = new Plinko(330, 200, 15);
    plinko6 = new Plinko(400, 200, 15);
}

function displayPlinko() {
    plinko1.display();
    plinko2.display();
    plinko3.display();
    plinko4.display();
    plinko5.display();
    plinko6.display();
}

/*function cplinko() {
    for(var i = 50;i<=450;i=i+70){
        plinkoCount = plinkoCount + 1;
        var plinko = new Plinko(i, 200,15);
        //eval('var p' + plinkoCount+ ' = new Plinko(' + i+',200,15)');
        console.log(plinkoCount);
    }
}

function dplinko() {
    for(var i=1;i<=plinkoCount;i++) {
        eval('plinko'+plinkoCount+'.display()');
    }
}*/

function createPlinko2() {
    //plinko7 = new Plinko(20, 300,15);
    plinko8 = new Plinko(90, 300, 15);
    plinko9 = new Plinko(160, 300, 15);
    plinko10 = new Plinko(230, 300, 15);
    plinko11 = new Plinko(295, 300, 15);
    plinko12 = new Plinko(370, 300, 15);
}

function displayPlinko2() {
    //plinko7.display();
    plinko8.display();
    plinko9.display();
    plinko10.display();
    plinko11.display();
    plinko12.display();
}
