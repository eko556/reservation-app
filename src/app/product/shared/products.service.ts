import { Component, Injectable } from '@angular/core';
import { products } from '../../products';

@Component()
export class ProductService {

  getProducts(){
    return products;
  }
}