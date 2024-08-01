import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ProductOrderComponent } from './product-order/product-order.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductOrderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-order-list';
}
