import { browser, $ } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class CartMenu {
 get btnCart () {
        return $('a.shopping_cart_link');
    }
    async openCart() {
        await this.btnCart.click();
         await browser.pause(3000)
    }
}

class HamburgerMenu {
 get btnHamburgerMenu () {
        return $('button#react-burger-menu-btn');
    }

    get btnAllItems () {
        return $('#inventory_sidebar_link');
    }

    get btnAbout () {
        return $('a#about_sidebar_link');
    }

    get btnLogout () {
        return $('a#logout_sidebar_link');
    }

    get btnResetAppState () {
        return $('a#reset_sidebar_link');
    }

    get btnCloseHamburgerMenu () {
        return $('button#react-burger-cross-btn');
    }
    async openHamburgerMenu() {
        await this.btnHamburgerMenu.click();
         await browser.pause(3000)
    }
    async openAllItems() {
        await this.btnAllItems.click();
         await browser.pause(3000)
    }
    async openAbout() {
        await this.btnAbout.click();
         await browser.pause(3000)
    }
    async openLogout() {
        await this.btnLogout.click();
         await browser.pause(3000)
    }
    async openResetAppState() {
        await this.btnResetAppState.click();
         await browser.pause(3000)
    }
    async closeHamburgerMenu() {
        await this.btnCloseHamburgerMenu.click();
         await browser.pause(3000)
    }
}

export default class Page {
   static cartMenu = new CartMenu();
   static hamburgerMenu = new HamburgerMenu();
   
    open (path) {
        return browser.url(`https://www.saucedemo.com/`)
    }
}

