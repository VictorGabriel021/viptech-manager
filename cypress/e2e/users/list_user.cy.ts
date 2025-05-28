/// <reference types="cypress"/>

import UserFormPage from "../../pages/users/UserFormPage";

describe("User list flow", () => {
  it("Should not list users", () => {
    cy.visit("http://localhost:3000");
    cy.get("[href='/users']").contains("Gerencie os usuários").click();
    cy.url().should("include", "/users");
    cy.get("span.MuiCircularProgress-root", { timeout: 10000 }).should(
      "not.exist"
    );

    cy.contains("Usuários não encontrados!");
  });

  it("Should list a user", () => {
    cy.fixture("user").then((user) => {
      localStorage.setItem("users", JSON.stringify([user[0]]));
    });

    cy.visit("http://localhost:3000");
    cy.get("[href='/users']").contains("Gerencie os usuários").click();
    cy.url().should("include", "/users");
    cy.get("span.MuiCircularProgress-root", { timeout: 10000 }).should(
      "not.exist"
    );

    cy.get("thead tr th").contains("Nome");
    cy.get("thead tr th").contains("Sobrenome");
    cy.get("thead tr th").contains("Email");
    cy.get("thead tr th").contains("Estado");

    cy.get("tbody tr td").contains("João");
    cy.get("tbody tr td").contains("Felipe");
    cy.get("tbody tr td").contains("victorgcp@gmail.com");
    cy.get("tbody tr td").contains("SE");
  });

  it("Should delete a user", () => {
    cy.fixture("user").then((user) => {
      localStorage.setItem("users", JSON.stringify([user[0]]));
    });

    cy.visit("http://localhost:3000");
    cy.get("[href='/users']").contains("Gerencie os usuários").click();
    cy.url().should("include", "/users");
    cy.get("span.MuiCircularProgress-root", { timeout: 10000 }).should(
      "not.exist"
    );

    cy.get("[data-testid='DeleteIcon']").click();
    cy.get("button").contains("Confirmar").click();
    cy.get("h2").contains("Usuário deletado com sucesso");
    cy.get("button").contains("Fechar").click();
    cy.get("div").contains("Usuários não encontrados!");
  });

  it("Should edit a user", () => {
    cy.fixture("user").then((user) => {
      localStorage.setItem("users", JSON.stringify([user[0]]));
    });

    cy.visit("http://localhost:3000");
    cy.get("[href='/users']").contains("Gerencie os usuários").click();
    cy.url().should("include", "/users");
    cy.get("span.MuiCircularProgress-root", { timeout: 10000 }).should(
      "not.exist"
    );

    cy.get("[data-testid='EditIcon']").click();
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user[1], true);
      UserFormPage.fillAddressData(user[1], true);
      UserFormPage.fillRepresentativeData(
        { ...user[1], representative: [user[1].representative[0]] },
        true
      );
      UserFormPage.fillConfirmData(user[1], true);
    });

    cy.get("[data-cy='representative1']").click();
    cy.get("button").contains("Adicionar").click();

    const texto = "representative.1";
    cy.get(`[name='${texto}.name']`).type("Gabriel");
    cy.get(`input[name='${texto}.degreeOfKinship']`).parent().click();
    cy.get(`[data-value='Pai']`).click();
    cy.get(`[name='${texto}.rg']`).type("21.561.580-4");
    cy.get(`[name='${texto}.cellphone']`).type("(43) 99623-1523");

    cy.get("button").contains("Salvar").click();
    cy.get("h2").contains("O usuário foi editado com sucesso!").click();
    cy.get("button").contains("Usuários").click();
    cy.url().should("include", "/users");
  });
});

// describe("Unsuccessful user registration flow", () => {});

// describe("Possible actions in the successful user registration flow", () => {});
