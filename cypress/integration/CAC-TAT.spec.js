/*Novo test
it('',function(){

  })
*/

/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function () {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', function () {
    cy.get('#firstName').type('Nome')
    cy.get('#lastName').type('Sobrenome')
    cy.get('#email').type('Email@email.com')
    cy.get('#open-text-area').type('testtesttesttesttesttesttesttesttesttesttesttesttesttest', { delay: 0 })
    cy.contains('button', 'Enviar').click() //cy.get('input[type="submit"]').click()

    cy.get('.success').should('be.visible')

  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
    cy.get('#firstName').type('Nome')
    cy.get('#lastName').type('Sobrenome')
    cy.get('#email').type('Emailemailcom')
    cy.get('#open-text-area').type('test')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })
  it('colocar letras no campo do telefone dar erro e ir vazio', function () {
    cy.get('#firstName').type('Nome')
    cy.get('#lastName').type('Sobrenome')
    cy.get('#email').type('Email@email.com')
    cy.get('#phone').type('dasd')
    cy.get('#open-text-area').type('test')
    cy.contains('button', 'Enviar').click()
      .should('have.value', '')

  })
  it('exibe mensagem de erro quando o telefone se tor na obrigatório mas não é preenchido antes do envio do formulário', function () {
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
    cy.get('#firstName').type('Nome').should('have.value', 'Nome')
      .clear().should('have.value', '')

    cy.get('#lastName').type('Sobrenome')
      .clear().should('have.value', '')

    cy.get('#email').type('Email@email.com')
      .clear().should('have.value', '')

    cy.get('#phone').type('12345678')
      .clear().should('have.value', '')

    cy.get('#open-text-area').type('test')
      .clear().should('have.value', '')

      cy.contains('button', 'Enviar').click()
      .should('have.value', '')

  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
    
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', function () {
    cy.fillMandatoryFieldsAndSubmit()
    
    cy.get('.success').should('be.visible')
  })
  
  //modulo 4
  it('seleciona um produto (YouTube) por seu texto', function () {
    cy.get('select').select('YouTube').should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', function () {
    cy.get('select').select(3).should('have.value', 'mentoria')
  })
  
  it.only('seleciona um produto (Blog) por seu índice', function () {
    cy.get('select').select('Blog').should('have.value', 'blog')
  })
})

