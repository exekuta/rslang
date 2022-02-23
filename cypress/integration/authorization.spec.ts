/// <reference types="cypress" />

describe('authPage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const USERNAME = Date.now().toString();
  const EMAIL = USERNAME + '@email.com';
  const PASSWORD = USERNAME;

  it('user should be able to register', () => {
    cy.findByRole('link', {
      name: /log in/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'login');

    cy.findByRole('link', {
      name: /statistics/i,
    }).should('not.exist');

    cy.get('#root > div > nav > div:nth-child(2)').should('not.exist');

    cy.findByRole('link', {
      name: /register/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'register');

    cy.findByRole('textbox', {
      name: /name/i,
    })
      .should('exist')
      .type(USERNAME)
      .should('contain.value', USERNAME);

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .should('exist')
      .type(EMAIL)
      .should('contain.value', EMAIL);

    cy.findByLabelText(/password/i)
      .should('exist')
      .type(PASSWORD)
      .should('contain.value', PASSWORD);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'login');
  });

  it('user should be notified if user with this email already exist', () => {
    cy.findByRole('link', {
      name: /log in/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'login');

    cy.findByRole('link', {
      name: /statistics/i,
    }).should('not.exist');

    cy.get('#root > div > nav > div:nth-child(2)').should('not.exist');

    cy.findByRole('link', {
      name: /register/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'register');

    cy.findByRole('textbox', {
      name: /name/i,
    })
      .should('exist')
      .type(USERNAME)
      .should('contain.value', USERNAME);

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .should('exist')
      .type(EMAIL)
      .should('contain.value', EMAIL);

    cy.findByLabelText(/password/i)
      .should('exist')
      .type(PASSWORD)
      .should('contain.value', PASSWORD);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.findByText(/user with this e\-mail exists/i).should('exist');
  });

  it("user should be notified if name does'nt meet the requirements", () => {
    cy.findByRole('link', {
      name: /log in/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'login');

    cy.findByRole('link', {
      name: /statistics/i,
    }).should('not.exist');

    cy.get('#root > div > nav > div:nth-child(2)').should('not.exist');

    cy.findByRole('link', {
      name: /register/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'register');

    cy.findByRole('textbox', {
      name: /name/i,
    })
      .should('exist')
      .should('contain.value', '');

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .should('exist')
      .type(EMAIL)
      .should('contain.value', EMAIL);

    cy.findByLabelText(/password/i)
      .should('exist')
      .type(PASSWORD)
      .should('contain.value', PASSWORD);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.findByText(/"name" is not allowed to be empty/i).should('exist');
  });

  it("user should be notified if password does'nt meet the requirements", () => {
    cy.findByRole('link', {
      name: /log in/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'login');

    cy.findByRole('link', {
      name: /statistics/i,
    }).should('not.exist');

    cy.get('#root > div > nav > div:nth-child(2)').should('not.exist');

    cy.findByRole('link', {
      name: /register/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'register');

    cy.findByRole('textbox', {
      name: /name/i,
    })
      .should('exist')
      .type(USERNAME)
      .should('contain.value', USERNAME);

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .should('exist')
      .type(EMAIL)
      .should('contain.value', EMAIL);

    const password = PASSWORD.slice(0, 5);

    cy.findByLabelText(/password/i)
      .should('exist')
      .type(password)
      .should('contain.value', password);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.findByText(
      /"password" length must be at least 8 characters long/i
    ).should('exist');

    cy.findByLabelText(/password/i)
      .should('exist')
      .clear()
      .should('not.contain.value', password);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.findByText(/"password" is not allowed to be empty/i).should('exist');
  });

  it("user should be notified if email does'nt meet the requirements", () => {
    cy.findByRole('link', {
      name: /log in/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'login');

    cy.findByRole('link', {
      name: /statistics/i,
    }).should('not.exist');

    cy.get('#root > div > nav > div:nth-child(2)').should('not.exist');

    cy.findByRole('link', {
      name: /register/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'register');

    cy.findByRole('textbox', {
      name: /name/i,
    })
      .should('exist')
      .type(USERNAME)
      .should('contain.value', USERNAME);

    const email = EMAIL.replace('@', '');

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .should('exist')
      .type(email)
      .should('contain.value', email);

    cy.findByLabelText(/password/i)
      .should('exist')
      .type(PASSWORD)
      .should('contain.value', PASSWORD);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.findByText(/"email" must be a valid email/i).should('exist');

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .should('exist')
      .clear()
      .should('not.contain.value', email);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.findByText(/"email" is not allowed to be empty/i).should('exist');
  });

  it('user should be able to login', () => {
    cy.findByRole('link', {
      name: /log in/i,
    })
      .should('exist')
      .click();

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .should('exist')
      .type(EMAIL)
      .should('contain.value', EMAIL);

    cy.findByLabelText(/password/i)
      .should('exist')
      .type(PASSWORD)
      .should('contain.value', PASSWORD);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.url().should('include', 'home');

    cy.findByRole('link', {
      name: /log in/i,
    }).should('not.exist');

    cy.findByRole('link', {
      name: /statistics/i,
    }).should('exist');

    cy.get('#root > div > nav > div:nth-child(2)')
      .findByText(USERNAME)
      .should('exist');

    cy.get('#root > div > nav > div:nth-child(2)')
      .findByText(EMAIL)
      .should('exist');

    cy.get('#root > div > nav > div:nth-child(2)')
      .findByText(USERNAME[0])
      .should('exist');
  });

  it('user should be able to logout', () => {
    cy.findByRole('link', {
      name: /log in/i,
    })
      .should('exist')
      .click();

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .should('exist')
      .type(EMAIL)
      .should('contain.value', EMAIL);

    cy.findByLabelText(/password/i)
      .should('exist')
      .type(PASSWORD)
      .should('contain.value', PASSWORD);

    cy.findByRole('button', {
      name: /submit/i,
    })
      .should('exist')
      .click();

    cy.get('#root > div > nav > div:nth-child(2)')
      .findByRole('button')
      .should('exist')
      .click();

    cy.get('#root > div > nav > div:nth-child(2)').should('not.exist');
  });
});
