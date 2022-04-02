import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Chart';

  result: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];


  constructor(private service: AuthService) {
    Chart.register(...registerables)
  }

  ngOnInit() {
    this.service.cryptoData().then((res) => {
      this.result = res
      

      this.coinPrice = this.result.data.coins.map((coin: any) => coin.price)
      this.coinName = this.result.data.coins.map((coin: any) => coin.name)

      console.log(this.coinPrice, this.coinName);

      //chart

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.coinName,
          datasets: [{
              label: 'Coin Price',
              data: this.coinPrice,
              fill: false,
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderColor: '#3e95cd',
              borderWidth: 1
          }]
        },
      });
    });
  }
}
