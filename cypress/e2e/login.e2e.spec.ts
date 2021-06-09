/// <reference types="cypress" />

context('Auth', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth/login')
  })

  describe('Login test', () => {
    it('Login with correct credentials', () => {
      cy.get('#login_email').type('demo@gmail.com')
      cy.get('#login_password').type('1212qQ')
      cy.get('button[type="submit"]').click()

      cy.get('.ant-empty-description').should(
        'have.text',
        'Выберите канал для начала общения!'
      )

      cy.get('.anticon-menu').should('be.visible')
      cy.get('.anticon-lock').should('be.visible')
      cy.get('.header-username').should('be.visible')
      cy.get('.channels-menu').should('be.visible')
      cy.get('.contacts-menu').should('be.visible')
      cy.get('.channels-menu-title').should('have.text', 'Каналы')
      cy.get('.contacts-menu-title').should('have.text', 'Контакты')
    })

    it('Login with wrong email', () => {
      cy.get('#login_email').type('wronglogin@gmail.com')
      cy.get('#login_password').type('112233QQ')
      cy.get('button[type="submit"]').click()

      cy.get('.ant-alert-message').should(
        'have.text',
        'Пользователя с таким email не существует'
      )
    })

    it('Login with invalid password', () => {
      cy.get('#login_email').type('demo@gmail.com')
      cy.get('#login_password').type('00000')

      cy.get('.ant-form-item-explain').should('have.text', 'Минимум 6 символов')
    })

    it('Login with wrong password', () => {
      cy.get('#login_email').type('demo@gmail.com')
      cy.get('#login_password').type('fakePassword')
      cy.get('button[type="submit"]').click()

      cy.get('.ant-alert-message').should('have.text', 'Неверный пароль')
    })
  })
})
