// cypress/pages/UserFormPage.js
class UserFormPage {
  fillPersonalData(user, disable = false) {
    if (!disable) cy.get("span.Mui-active").contains("Dados Pessoais");

    cy.get("[name='name']").clear().type(user.name);
    cy.get("[name='lastname']").clear().type(user.lastname);
    cy.get("[name='cpf']").clear().type(user.cpf);
    cy.get("[name='email']").clear().type(user.email);
    cy.get("[name='password']").clear().type(user.password);

    if (!disable) cy.get("[type=submit]").contains("Próximo").click();
  }

  fillAddressData(user, disable = false) {
    if (!disable) cy.get("span.Mui-active").contains("Endereço");

    const cep = disable ? "86430000" : "49063025";
    cy.intercept("GET", `https://viacep.com.br/ws/${cep}/json/`).as(
      "getCepData"
    );
    cy.get("[name=cep]").clear().type(user.cep);
    cy.wait("@getCepData");

    cy.get("[name=number]")
      .should("be.visible")
      .and("not.be.disabled")
      .clear()
      .type(user.number);

    if (disable) cy.get("[name=street]").clear().type("Rua89");

    cy.get("[name=street]").should("have.value", user.street);
    cy.get("[name=city]").should("have.value", user.city);
    cy.get("[name=uf]").should("have.value", user.uf);

    if (!disable) cy.get("[type=submit]").contains("Próximo").click();
  }

  fillRepresentativeData(user, disable = false) {
    if (!disable) cy.get("span.Mui-active").contains("Dados do Representante");

    user.representative.forEach((item, index) => {
      const texto = `representative.${index}`;

      cy.get(`[name='${texto}.name']`).clear().type(item.name);
      cy.get(`input[name='${texto}.degreeOfKinship']`).parent().click();
      cy.get(`[data-value='${item.degreeOfKinship}']`).click();
      cy.get(`[name='${texto}.rg']`).clear().type(item.rg);
      cy.get(`[name='${texto}.cellphone']`).clear().type(item.cellphone);

      if (user.representative.length !== index + 1) {
        cy.get("[type=button]")
          .contains("Adicionar")
          .should("be.visible")
          .click();
      }
    });

    if (!disable) cy.get("[type=submit]").contains("Próximo").click();
  }

  fillConfirmData(user, disable = false) {
    if (!disable) {
      cy.get("span.Mui-active").contains("Visualizar Formulário");
      cy.contains("Confirme se os dados estão corretos!").should("be.visible");
    }
    delete user.id;

    const arrayNames = Object.keys(user);
    arrayNames.forEach((item) => {
      if (typeof user[item] === "object") {
        user[item].forEach((representative, index) => {
          const texto = `representative.${index}`;

          cy.get(`[name='${texto}.name']`).should(
            "have.value",
            representative.name
          );
          cy.get(`[name='${texto}.degreeOfKinship']`).should(
            "have.value",
            representative.degreeOfKinship
          );
          cy.get(`[name='${texto}.rg']`).should(
            "have.value",
            representative.rg
          );
          cy.get(`[name='${texto}.cellphone']`).should(
            "have.value",
            representative.cellphone
          );
        });
      } else cy.get(`[name='${item}']`).should("have.value", user[item]);
    });

    if (!disable) {
      cy.get("[type=submit]").contains("Enviar").click();
      cy.get("[type=button]").contains("Confirmar").click();
      cy.contains("h2", "O usuário foi cadastrado com sucesso!");
      cy.get("[type=button]").contains("Usuários").click();
    }
  }
}

export default new UserFormPage();
