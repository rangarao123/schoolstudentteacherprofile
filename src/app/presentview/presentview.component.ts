import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';
import Base64 from 'js-base64';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-presentview',
  templateUrl: './presentview.component.html',
  styleUrls: ['./presentview.component.css']
})
export class PresentviewComponent implements OnInit {
  assignment=[];
  sub=[];
  ass=[];

  constructor(private http: Http,private httpService: HttpClient) { }


downloadFile(f1)
{
console.log(f1);
var url=this.arrBirds.IP +":"+this.arrBirds.port+"/assign/download"+"/"+f1
console.log(url)
  this.http.get(url,f1).subscribe(
    (res:Response)=>{
//window.open(base64content);
var a=res.json();

console.log(a)
var base64content=a.assignment[0].file;

var filetype=a.assignment[0].filetype;

console.log(url)
var win=window.open(this.arrBirds.IP +":"+this.arrBirds.port+"/uploads"+"/"+base64content)

//window.document.write('<iframe src="' + base64content + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');


});
}


// e.g This will open an image in a new window

  ngOnInit()
  {

    //var c=this.getCookie("class");
     //var s=this.getCookie("section");
var c="5"
var s="B"
     //console.log(date.now()+"date")
     var dateObj = new Date();
     var month = dateObj.getUTCMonth() +1; //months from 1-12
   var day = dateObj.getUTCDate();
   var year = dateObj.getUTCFullYear();



    this.httpService.get('../assets/config/IPconfig.json').subscribe(
       data => {
         this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.

          var url=this.arrBirds.IP +":"+this.arrBirds.port+"/assign"
          console.log(url)
          this.http.get(url).subscribe((res: Response)
  =>{

    this.assignment= res.json();
    var data=this.assignment;
    console.log(data)

    for(var i in data)
    {

      for(var j=0;j<data[i].assignment.length;j++)
      {
        var msg={
          teacherid:data[i].teacherid,
          schoolid:data[i].schoolid,
          class:data[i].class,
          section:data[i].section,
          subject:data[i].assignment[j].subject,
           description:data[i].assignment[j].description,
           title:data[i].assignment[j].title,
           file:data[i].assignment[j].file,
           filetype:data[i].assignment[j].filetype,
           date:data[i].date,
           id:data[i]._id


        }
    this.sub.push(msg)

       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );


  //    console.log(this.sub)

      }

    }

      //console.log(JSON.stringify(res.json()))


  )
}
}
