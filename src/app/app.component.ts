import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
	public urlapi = 'https://wf-challenge-jrpygindrv.herokuapp.com/api/v1/posts/';

	public list: any = null;
	public show: any = null;

	public lat = 0;
  	public lng = 0;
  	public id = 0;
  	public title = "";
  	public content = "";
	public image_url = "";

	public lat_ = 0;
  	public lng_ = 0;
  	public id_ = 0;
  	public title_ = "";
  	public content_ = "";
	public image_url_ = "";

	titlePage = 'wefox challenge';

	constructor(public httpClient: HttpClient) {}

	public getList() {
		const url = this.urlapi;
	    this.httpClient
	      .get(url)
	      .subscribe(apiData => (this.list = apiData));
	}

	public getById(id) {
	    const url = this.urlapi+id;
	    this.httpClient
	      .get(url)
	      .subscribe(apiData => (this.show = apiData));
	}

  	public createItem(){
  		const url = this.urlapi;
  		let body = {
  			"title": this.title,
			"content": this.content,
			"lat": this.lat,
			"long": this.lng,
			"image_url": this.image_url
  		};
   		this.httpClient
   		.post(url, body)
   		.subscribe((res)=>{ 
   			console.log("Created a city", res); 
   		});
    }

    public updateById(id) {
	    const url = this.urlapi+id;
	    let body = {
  			"title": this.title_,
			"content": this.content_,
			"lat": this.lat_,
			"long": this.lng_,
			"image_url": this.image_url_
  		};
	    this.httpClient
   		.put(url, body)
   		.subscribe((res)=>{ 
   			console.log("Updated a city", res);
   			this.show = res; 
   		});
	}

	public deleteById(id){
  		const url = this.urlapi+id;
   		this.httpClient
   		.delete(url)
   		.subscribe((res)=>{ 
   			console.log("Deleted a city", res); 
   			this.show = res;
   		});
    }

    selectedItem = [
	    this.lat, 
	    this.lng, 
	    this.id, 
	    this.title, 
	    this.content, 
	    this.image_url
    ];

	format(){
	    this.selectedItem = [ +this.selectedItem[0], +this.selectedItem[1], +this.selectedItem[2], this.selectedItem[3], this.selectedItem[4], this.selectedItem[5] ];
	    console.log(this.selectedItem);
	}

 
  	ngOnInit() {
    	this.getList();
    	//this.getById(1);

    	let body = {
        	"title":"Hospitalet de Llobregat",
			"content":"Hospitalet de Llobregat​ u Hospitalet​ es una ciudad y municipio de la comarca del Barcelonés, provincia de Barcelona, comunidad autónoma de Cataluña, España. La ciudad está situada a pocos kilómetros del centro de la capital de la comunidad autónoma.",
			"lat":"41.359807",
			"long":"2.129080",
			"image_url":"https://farm1.staticflickr.com/534/19171557649_74d6e986e5_k.jpg",
			"created_at":"2015:07:01 21:41:09",
			"updated_at":"2015:07:01 21:41:09"				
		};
    	//this.createItem(body);


    	//this.deleteById(5);


  	}
}
