import { Component, OnInit } from '@angular/core';
import { TypeaheadModule } from 'ngx-bootstrap';
import 'rxjs/add/observable/of';
import {CityService} from "../../shared/services/city.service";
import {FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, AbstractControl} from "@angular/forms";
import {AdvertsModel} from "../../shared/models/adverts.model";
import {AdvertsSqlService} from "../../shared/services/advert-sql.service";
import * as $ from 'jquery';
import {AdvertFormDataService} from "../../shared/services/advert-form-data.service";
import { AmazingTimePickerService } from 'amazing-time-picker'; // this line you need


@Component({
  selector: 'gosh-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.scss']
})
export class AdvertFormComponent implements OnInit {

  title = 'Look jQuery Animation working in action!';

  form: FormGroup;
  private states: any;
  currencies: string[] = ['USD', 'EUR', 'RUB'];

  constructor(private cityService: CityService, private advertSqlService: AdvertsSqlService, private advertFormDataService: AdvertFormDataService, private atp: AmazingTimePickerService) { }
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);   // var time = today.getHours() + ":" + today.getMinutes();
    });
  }
  onSubmit() {

    this.form.patchValue({
      rate: localStorage.getItem('key_rate')
    });

    const {city, currency, rate, amount, wish, expiry_time, info, telephon} = this.form.value;
    const advert = new AdvertsModel(city, currency, rate, amount, wish, expiry_time, info, telephon);

    this.advertSqlService.createNewAdvert(advert)
          .subscribe((advert: AdvertsModel) => {
            console.log(advert);
          });
  }
  ngOnInit() {
    this.states = this.cityService.states;

    this.form = new FormGroup({
      'city': new FormControl(null, [Validators.required]),
      'currency': new FormControl(null, [Validators.required]),
      'rate': new FormControl(null, []),
      'amount': new FormControl(null, [Validators.required]),
      'wish': new FormControl(null, [Validators.required]),
      'expiry_time': new FormControl(null, []),
      'info': new FormControl(null, [Validators.required]),
      'telephon': new FormControl(null, [Validators.required])
    });


    $('#cur_rate').on('keydown',function(e){
      // tab, esc, enter
      if ($.inArray(e.keyCode, [9, 27, 13]) !== -1 ||
          // Ctrl+A
          (e.keyCode == 65 && e.ctrlKey === true) ||
          // home, end, left, right, down, up
          (e.keyCode >= 35 && e.keyCode <= 40)) {
        return;
      }

      e.preventDefault();

        // backspace & del
      if($.inArray(e.keyCode,[8,46]) !== -1){
        $(this).val('');
        return;
      }

      var a = ["a","b","c","d","e","f","g","h","i","`"];
      var n = ["1","2","3","4","5","6","7","8","9","0"];

      var value = $(this).val();
      var clean = value.replace(/\./g,'').replace(/,/g,'').replace(/^0+/, '');

      var charCode = String.fromCharCode(e.keyCode);
      var p = $.inArray(charCode,a);

      if(p !== -1)
      {
        value = clean + n[p];

        if(value.length == 2) value = '0' + value;
        if(value.length == 1) value = '00' + value;

        var formatted = '';
        for(var i=0;i<value.length;i++)
        {
          var sep = '';
          if(i == 2) sep = '.';
          if(i > 3 && (i+1) % 3 == 0) sep = '';
          formatted = value.substring(value.length-1-i,value.length-i) + sep + formatted;
        }

        $(this).val(formatted);

        window.localStorage.setItem('key_rate', formatted);
      }

      return;

    });
  }

}
