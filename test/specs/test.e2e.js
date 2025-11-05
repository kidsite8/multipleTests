import { browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Page from '../pageobjects/page.js'   
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'


describe('My Login application', () => {
    before(async () => {
        await LoginPage.open()
    })
    it('should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(3000)
        })
    }
)

// describe ('Open Hambuger Menu', () => {
//     before(async () => {
//         await browser.url('https://www.saucedemo.com/')
//         await LoginPage.open()
//         await LoginPage.login('standard_user', 'secret_sauce')
//      })
//     it('should open Hamburger Menu', async () => {
//      await Page.hamburgerMenu.openHamburgerMenu();
//     })
// }

// )
