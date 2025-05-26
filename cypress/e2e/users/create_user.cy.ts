/// <reference types="cypress"/>

import UserFormPage from "../../pages/users/UserFormPage";

describe("Successful user registration flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[href='/users']").contains("USUÁRIOS").click();
    cy.url().should("include", "/users");
    cy.get("span.MuiCircularProgress-root", { timeout: 10000 }).should(
      "not.exist"
    );
    cy.get("[type=button]").contains("Cadastrar").should("be.visible").click();
  });

  it("Should create a user", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user);
      UserFormPage.fillAddressData(user);
      UserFormPage.fillRepresentativeData(user);
      UserFormPage.fillConfirmData(user);
    });
  });
});

describe("Unsuccessful user registration flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[href='/users']").contains("USUÁRIOS").click();
    cy.url().should("include", "/users");
    cy.get("span.MuiCircularProgress-root", { timeout: 10000 }).should(
      "not.exist"
    );
    cy.get("[type=button]").contains("Cadastrar").should("be.visible").click();
  });

  it("Should fails in step 1", () => {
    cy.get("[type=submit]").contains("Próximo").click();
    cy.get("[aria-invalid=true]");
    cy.get("span.Mui-active").contains("Dados Pessoais");
  });

  it("Should fails invalid cpf in step 1", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData({ ...user, cpf: "11111115844" });
    });

    cy.get("[aria-invalid=true][name=cpf]")
      .parent()
      .siblings()
      .contains("Insira um CPF válido!");
  });

  it("Should fails invalid email in step 1", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData({ ...user, email: "teste@erro" });
    });

    cy.get("[aria-invalid=true][name=email]")
      .parent()
      .siblings()
      .contains("E-mail inválido");
  });

  it("Should fails invalid password in step 1", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData({ ...user, password: "teste@erro" });
    });

    cy.get("[aria-invalid=true][name=password]")
      .parent()
      .siblings()
      .contains(
        "Insira uma combinação de 8 dígitos ou mais contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial como: (-+_!@#$%^&*.,?)"
      );
  });

  it("Should fails in step 2", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user);
    });

    cy.get("[type=submit]").contains("Próximo").click();
    cy.get("[aria-invalid=true]");
    cy.get("span.Mui-active").contains("Endereço");
  });

  it("Should fails invalid cep in step 2", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user);
    });
    cy.get("[name=cep]").type("8888510");
    cy.get("[aria-invalid=true][name=cep]")
      .parent()
      .siblings()
      .contains("CEP inválido");
  });

  it("Should fails request cep in step 2", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user);
    });
    cy.get("[name=cep]").type("45454-545");
    cy.get(".Toastify__toast-icon")
      .siblings()
      .contains("Endereço não encontrado!");
  });

  it("Should fails in step 3", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user);
      UserFormPage.fillAddressData(user);
    });

    cy.get("[type=submit]").contains("Próximo").click();
    cy.get("[aria-invalid=true]");
    cy.get("span.Mui-active").contains("Dados do Representante");
  });

  it("Should fails in step 3 with many representative", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user);
      UserFormPage.fillAddressData(user);
      UserFormPage.fillRepresentativeData(user);
    });

    cy.get("[type=button]").contains("Anterior").click();
    cy.get("[type=button]").contains("Adicionar").should("be.visible").click();
    cy.get("[type=submit]").contains("Próximo").click();
    cy.get("[aria-invalid=true]");
    cy.get("span.Mui-active").contains("Dados do Representante");
  });

  it("Should fails invalid cellphone in step 3", () => {
    cy.fixture("user").then((user) => {
      const representative = [...user.representative];
      representative[0].cellphone = "(43) 99845-512";

      UserFormPage.fillPersonalData(user);
      UserFormPage.fillAddressData(user);
      UserFormPage.fillRepresentativeData({
        ...user,
        representative,
      });
    });

    cy.get("[aria-invalid=true][name='representative.0.cellphone']")
      .parent()
      .siblings()
      .contains("Celular inválido");
    cy.get("span.Mui-active").contains("Dados do Representante");
  });
});

describe("Possible actions in the successful user registration flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[href='/users']").contains("USUÁRIOS").click();
    cy.url().should("include", "/users");
    cy.get("span.MuiCircularProgress-root", { timeout: 10000 }).should(
      "not.exist"
    );
    cy.get("[type=button]").contains("Cadastrar").should("be.visible").click();
  });

  it("Should show and hide password", () => {
    cy.get("[name='password']").type("Tes@11458");
    cy.get("[aria-label='toggle password visibility']").click();
    cy.get("[name='password']").should("have.value", "Tes@11458");
    cy.get("[aria-label='toggle password visibility']").click();
  });

  it("Should delete a representative", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user);
      UserFormPage.fillAddressData(user);
    });

    cy.get("[type=button]").contains("Adicionar").click();
    cy.get("[data-cy='representative1']").click();
  });

  it("Should refuse register user", () => {
    cy.fixture("user").then((user) => {
      UserFormPage.fillPersonalData(user);
      UserFormPage.fillAddressData(user);
      UserFormPage.fillRepresentativeData(user);
    });

    cy.get("[type=submit]").contains("Enviar").click();
    cy.get("[type=button]").contains("Fechar").click();
  });
});
