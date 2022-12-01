function mouseOver1(){
    const name1=document.getElementById('name1');
    name1.style.color = 'hsl(219, 85%, 26%)';
    name1.style.cursor = 'pointer'
}

function mouseOver2(){
    const span1=document.getElementById('span1');
    span1.style.color = 'hsl(219, 85%, 26%)';
    span1.style.cursor = 'pointer'
}

function mouseOver3(){
    const name2=document.getElementById('name2');
    name2.style.color = 'hsl(219, 85%, 26%)';
    name2.style.cursor = 'pointer'
}

function mouseOver4(){
    const name3=document.getElementById('name3');
    name3.style.color = 'hsl(219, 85%, 26%)';
    name3.style.cursor = 'pointer'
}

function mouseOver5(){
    const span3=document.getElementById('span3');
    span3.style.cursor = 'pointer'
}

function mouseOver6(){
    const name4=document.getElementById('name4');
    name4.style.color = 'hsl(219, 85%, 26%)';
    name4.style.cursor = 'pointer'
}

function mouseOver7(){
    const name5=document.getElementById('name5');
    name5.style.color = 'hsl(219, 85%, 26%)';
    name5.style.cursor = 'pointer'
}

function mouseOver8(){
    const name6=document.getElementById('name6');
    name6.style.color = 'hsl(219, 85%, 26%)';
    name6.style.cursor = 'pointer'
}

function mouseOver9(){
    const span6=document.getElementById('span6');
    span6.style.color = 'hsl(219, 85%, 26%)';
    span6.style.cursor = 'pointer'
}

function mouseOver10(){
    const name7=document.getElementById('name7');
    name7.style.color = 'hsl(219, 85%, 26%)';
    name7.style.cursor = 'pointer'
}

function mouseOver11(){
    const span7=document.getElementById('span7');
    span7.style.cursor = 'pointer'
}

function mouseOut1(){
    const name1=document.getElementById('name1');
    name1.style.color = 'hsl(224, 21%, 14%)';
    name1.style.cursor = 'unset';
}

function mouseOut2(){
    const span1=document.getElementById('span1');
    span1.style.color = 'hsl(219, 12%, 42%)';
    span1.style.cursor = 'unset';
}

function mouseOut3(){
    const name2=document.getElementById('name2');
    name2.style.color = 'hsl(224, 21%, 14%)';
    name2.style.cursor = 'unset';
}

function mouseOut4(){
    const name3=document.getElementById('name3');
    name3.style.color = 'hsl(224, 21%, 14%)';
    name3.style.cursor = 'unset';
}

function mouseOut5(){
    const span3=document.getElementById('span3');
    span3.style.cursor = 'unset'
}

function mouseOut6(){
    const name4=document.getElementById('name4');
    name4.style.color = 'hsl(224, 21%, 14%)';
    name4.style.cursor = 'unset';
}

function mouseOut7(){
    const name5=document.getElementById('name5');
    name5.style.color = 'hsl(224, 21%, 14%)';
    name5.style.cursor = 'unset';
}

function mouseOut8(){
    const name6=document.getElementById('name6');
    name6.style.color = 'hsl(224, 21%, 14%)';
    name6.style.cursor = 'unset';
}

function mouseOut9(){
    const span6=document.getElementById('span6');
    span6.style.color = 'hsl(219, 12%, 42%)';
    span6.style.cursor = 'unset';
}

function mouseOut10(){
    const name7=document.getElementById('name7');
    name7.style.color = 'hsl(224, 21%, 14%)';
    name7.style.cursor = 'unset';
}

function mouseOut11(){
    const span7=document.getElementById('span7');
    span7.style.cursor = 'unset';
}

function pictureOver(){
    const picture=document.getElementById('picture');
    picture.style.cursor = 'pointer';
}

function pictureOut(){
    const picture=document.getElementById('picture');
    picture.style.cursor = 'unset';
}

function dropOver(){
    const dropmssg=document.getElementById('dropmssg');
    dropmssg.style.cursor = 'pointer';
    dropmssg.style.backgroundColor = 'hsl(210, 60%, 98%)';
}

function dropOut(){
    const dropmssg=document.getElementById('dropmssg');
    dropmssg.style.cursor = 'unset';
    dropmssg.style.backgroundColor = 'unset';
}

function markOver(){
    const mark=document.getElementById('mark');
    mark.style.cursor = 'pointer';
    mark.style.color = 'hsl(219, 85%, 26%)';
}

function markOut(){
    const mark=document.getElementById('mark');
    mark.style.cursor = 'unset';
    mark.style.color = 'hsl(224, 21%, 14%)';
}

function read(){
    document.getElementById('one').style.backgroundColor='unset'
    document.getElementById('two').style.backgroundColor='unset'
    document.getElementById('three').style.backgroundColor='unset'


    if (document.getElementById('top-para1').contains(document.getElementById('circle1')) === true) {
        document.getElementById('top-para1').removeChild(document.getElementById('circle1'));
    }
    
    if (document.getElementById('top-para2').contains(document.getElementById('circle2')) === true) {
        document.getElementById('top-para2').removeChild(document.getElementById('circle2'));
    }

    if (document.getElementById('top-para3').contains(document.getElementById('circle3')) === true) {
        document.getElementById('top-para3').removeChild(document.getElementById('circle3'));
    }
}