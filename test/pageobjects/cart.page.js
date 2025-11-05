import { $ } from '@wdio/globals'
import Page from './page.js';


class CartPage extends Page {
  

 get btnContinueShopping () {
    return $('button#continue-shopping');
 }

 get btnAddToCart () {
        return $$('button.btn_inventory');
    }

    get btnRemoveFromCart () {
        return $$('//button[contains(@id, "remove")]');
    }
   
    get btnCheckout () {
        return $('button#checkout');
    }

    open () {
        return super.open("");
    }
}

export default new CartPage();
