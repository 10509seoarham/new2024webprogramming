const subject =["국어", "수학", "영어", "웹프"];
//학생 객체
class Student{
    id;
    name;
    score;
    rank;
    constructor(id, name, score, rank){
        this.id=id;
        this.name=name;
        this.score=score;
        this.rank=rank;
    }

    getgrade(score){
        switch(parseInt(score/10)){
            case 9:
                return "A";
            case 8:
                return "B";
            case 7:
                return "C";
            case 6:
                return "D";
            default:
                return "F";
        }
    }
    printscore(){
        document.write(`<h3>학번: ${this.id} 이름: ${this.name}</h3>`);
        for(let i=0; i<subject.length; i++){
            document.write(`${subject[i]} |${this.score[i]} |${this.getgrade(this.score[i])}<br>`);
        }
    }
}

let table=new scoretable();
let student1=new Student(1, "휴먼",[98, 56, 75, 13], 1);
table.studentlist[0]=student1;
table.studentlist

//스코어 테이블
class scoretable{
    studentlist=[];

    drawtable(){
        document.write(this.studentlist[0].id+" "+this.studentlist[0].id);
        for(let i=0; i<this.studentlist[0].score.length; i++){
            document.write(this.studentlist[0].score[i]);
        }
    }
}

function title(){
    let star=true;
    for(let i=0; i<5; i++){
        for(let j=0; j<51; j++){
            if(i==2){
                document.write("<h1> SEIS 대선린서비스</h1>");
                star=!star;
                break;
            }
            else if(star){
                document.write("*");
            }
            else{
                document.write("&nbsp");
            }
            star=!star;
        }
        document.write("<br>");
    }
}

title();
//제어
let isTeacher=confirm("");
if(isTeacher){
    table.drawtable();
}else{
    let studentid=prompt("학번 입력 : ");
    if(studentid==student1.id){
        student1.printscore();
    }
}