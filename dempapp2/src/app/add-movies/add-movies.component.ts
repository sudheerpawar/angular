import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  addForm!: FormGroup;
  movie : Movie = new Movie();
  movies!: Movie[];
  categ = ['Action', 'Horror',  
            'Sci-fi', 'Comedy', 'Drama'];  
  Submitted!: boolean;
  type1:string='';
  constructor(private service: MovieService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
    name: ['', Validators.required],
     id: ['', Validators.required],
     rating: ['', Validators.required],
     category: ['', Validators.required],
    });
  }
  savemovie(){
    
    this.Submitted=true;
    if (this.addForm.invalid) {
      alert('invalid data...please enter again...')
      return;  }
    else{
    this.service.createMovie(this.movie)
     .subscribe(
       data => { console.log(data);
         this.movie=data; 
         alert('movie is added...press OK to continue');
       
     },
       error => { console.log(error);  alert(error);}
     );
   
 
}

}

getallmovie( ){
 this.service.getMovieList(this.type1).subscribe( data => { console.log(data); this.movies=data },
 error => { console.log(error);  alert(error);})
}
}
   

