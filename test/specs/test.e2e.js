import { browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

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

