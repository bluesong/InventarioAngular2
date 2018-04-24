import { Component, OnInit ,NgZone } from '@angular/core';
import { TallaService } from "../../services/talla.service";
import{talla} from "../../model/talla";

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  providers: [TallaService]
})
export class ParametrosComponent implements OnInit {

  constructor(private tallaServices:TallaService , private zone:NgZone) { }

  ngOnInit() {
  }
 tallas: talla [] = [];
  
  load() {
    this.tallaServices.getTallas()
    .subscribe(tallas => {
      this.zone.run(() => {
        this.tallas = tallas;
        console.log(tallas)
      });
    });
  }

}

