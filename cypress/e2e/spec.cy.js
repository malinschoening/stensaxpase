describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should be able to play a game against the computer', () => {
    cy.get('button[name=computer]').click()
    cy.get('input').clear().type('Malin')
    cy.get('button[name=computer-name-chosen]').click()
    cy.get('button[name=Sten]').click()
    cy.get('h1[name=stats]').should('be.visible');
  })

  it('Should be able to play a game against a person', () => {
    cy.get('button[name=person]').click()
    cy.get('input[name=name1]').clear().type('Malin')
    cy.get('input[name=name2]').clear().type('Lovisa')
    cy.get('button[name=person-names-chosen]').click()
    cy.get('button[name=Påse]').click()
    cy.get('button[name=Sten]').click()
    cy.get('h1[name=stats]').should('have.text', 'Malin vinner!');
  })
})