//create Object

let card = {
	title:"UI/UX Designer",
	star:"*****",
	
	head:"Tech-Stack Covered",
	cont:"Adobe Photoshop, Adobe XD, Figma, Adobe Illustrator, Responsive Design, Design Thinking, Usability Testing.",
	
	head1:"Financing options",
	cont1:"Month-to-month Installments",
	
	head2:"Average Salary",
	cont2:"3 LPA",
	
	head3:"Batch Size / Branch",
	cont3:"10",
	
	head4:"Program Duration",
	cont4:"3 Months",
	
	head5:"Learning Mode",
	cont5:"Classroom / Online",
	
	linkval:"Learn More",
	link:"#"
}

//create element
var cardTitle=document.createElement("h1"),

cardStar=document.createElement("p"),


cardHead=document.createElement("h3"),
cardCont=document.createElement("p"),

cardHead1=document.createElement("h3"),
cardCont1=document.createElement("p"),

cardHead2=document.createElement("h3"),
cardCont2=document.createElement("p"),

cardHead3=document.createElement("h3"),
cardCont3=document.createElement("p"),

cardHead4=document.createElement("h3"),
cardCont4=document.createElement("p"),

cardHead5=document.createElement("h3"),
cardCont5=document.createElement("p"),

cardLink=document.createElement("a")

cardDiv=document.createElement("div"); 	

//obj value assign
cardTitle.innerHTML = card.title;

cardStar.innerHTML = card.star;

cardHead.innerHTML = card.head;
cardCont.innerHTML = card.cont;


cardHead1.innerHTML = card.head1;
cardCont1.innerHTML = card.cont1;

cardHead2.innerHTML = card.head2;
cardCont2.innerHTML = card.cont2;

cardHead3.innerHTML = card.head3;
cardCont3.innerHTML = card.cont3;

cardHead4.innerHTML = card.head4;
cardCont4.innerHTML = card.cont4;

cardHead5.innerHTML = card.head5;
cardCont5.innerHTML = card.cont5;

cardLink.innerHTML= card.linkval;

//add class to element

cardTitle.setAttribute("class","title"),

cardStar.setAttribute("class","star"),

cardHead.setAttribute("class","head"),
cardCont.setAttribute("class","cont"),

cardHead1.setAttribute("class","head"),
cardCont1.setAttribute("class","cont"),

cardHead2.setAttribute("class","head"),
cardCont2.setAttribute("class","cont"),

cardHead3.setAttribute("class","head"),
cardCont3.setAttribute("class","cont"),

cardHead4.setAttribute("class","head"),
cardCont4.setAttribute("class","cont"),

cardHead5.setAttribute("class","head"),
cardCont5.setAttribute("class","cont"),

cardLink.setAttribute("href",card.link),

cardDiv.setAttribute("class","card")

console.log(cardTitle,cardStar,cardHead,cardCont,cardHead1,cardCont1,cardHead2,cardCont2,cardHead3,cardCont3,cardHead4,cardCont4,cardHead5,cardCont5,cardLink);

//append child

cardDiv.appendChild(cardTitle)

cardDiv.appendChild(cardStar)

cardDiv.appendChild(cardHead)
cardDiv.appendChild(cardCont)

cardDiv.appendChild(cardHead1)
cardDiv.appendChild(cardCont1)

cardDiv.appendChild(cardHead2)
cardDiv.appendChild(cardCont2)

cardDiv.appendChild(cardHead3)
cardDiv.appendChild(cardCont3)

cardDiv.appendChild(cardHead4)
cardDiv.appendChild(cardCont4)

cardDiv.appendChild(cardHead5)
cardDiv.appendChild(cardCont5)

cardDiv.appendChild(cardLink)

console.log(cardDiv);

var cardList=document.getElementById("card-list");

cardList.appendChild(cardDiv)