// src/app/product-order/product-order.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductOrderComponent {
  availableProducts: string[] = ['Pencil', 'Eraser', 'Pens', 'Milk', 'Egg', 'Hat','Ink','Butter','Breadcrumbs', 'Coke'];
  orderList: Product[] = [{ name: 'Choose Product', quantity: 0 }];
  finalOrderList: Product[] = [];
  maxProducts: number = 8;

  addProduct(index: number) {
    const currentProduct = this.orderList[index];
    if (currentProduct.name !== 'Choose Product' && currentProduct.quantity > 0) {
      if (this.orderList.length < this.maxProducts) {
        this.orderList.push({ name: 'Choose Product', quantity: 0 });
      }
    }
  }

  showOrder() {
    this.finalOrderList = this.orderList.filter(
      (product) => product.name !== 'Choose Product' && product.quantity > 0
    );
  }

  speakOrder() {
    const orderText = this.finalOrderList
      .map((product) => `${product.name}: ${product.quantity}`)
      .join(', ');
    const speech = new SpeechSynthesisUtterance(orderText);
    window.speechSynthesis.speak(speech);
  }
}
