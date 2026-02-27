describe('Portfolio E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the hero section with all capability tags', () => {
    cy.get('h1').should('contain', 'Architecting at the intersection')
    cy.contains('UI/UX Strategy').should('be.visible')
    cy.contains('Full-Stack Engineering').should('be.visible')
    cy.contains('System Architecture').should('be.visible')
    cy.contains('DevOps & Platform').should('be.visible')
  })

  it('should display core capabilities section', () => {
    cy.get('h2').contains('Core Capabilities').should('be.visible')
    cy.contains('Creative Direction & Design').should('be.visible')
    cy.contains('Full-Stack Architecture').should('be.visible')
    cy.contains('Advanced Engineering').should('be.visible')
    cy.contains('Emerging Tech & AI').should('be.visible')
  })

  it('should display projects grid', () => {
    cy.get('h2').contains('Selected Projects').should('be.visible')
    cy.get('button').contains('Alienware').should('be.visible')
  })

  it('should open and close project modal', () => {
    cy.get('button').contains('Alienware').click()
    cy.get('div').contains('Case Study').should('be.visible')
    cy.get('h2').contains('Alienware').should('be.visible')
    
    // Close modal
    cy.get('button').find('svg').click({ multiple: true }) // Handle multiple potential SVGs
    cy.get('div').contains('Case Study').should('not.exist')
  })

  it('should open and close education modal', () => {
    cy.get('h2').contains('Education').scrollIntoView()
    cy.get('button').contains('Texas Tech University').click()
    cy.get('div').contains('Academic Profile').should('be.visible')
    cy.get('h2').contains('Texas Tech University').should('be.visible')
    
    // Close modal
    cy.get('button').find('svg').click({ multiple: true })
    cy.get('div').contains('Academic Profile').should('not.exist')
  })

  it('should display experience section', () => {
    cy.get('h2').contains('Professional Experience').should('be.visible')
    cy.contains('Dell Technologies').should('be.visible')
  })

  it('should navigate to contact page and back', () => {
    cy.get('nav').contains('Contact').click()
    cy.url().should('include', '/contact')
    cy.get('h1').should('contain', 'Get in touch')
    
    cy.get('nav').contains('Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
