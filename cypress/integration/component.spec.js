describe('Проверка оформления заказа', function () {

  before(function () {
    cy.visit('http://localhost:3000');
  });

  it('Добавление ингредиента в конструктор', function () {
    cy.get('[class^=ItemListIngredients_Scroll__]').contains('Флюоресцентная булка').should('not.exist');
    cy.contains('Флюоресцентная булка').trigger('dragstart');
    cy.get('[class^=BurgerIngredients_Overflow__]').trigger('drop');
    cy.get('[class^=CardItem_CardItemCol__]').contains('Флюоресцентная булка').should('exist');
  });

  it('Оформление заказа без авторизации', function () {
    cy.get('button').contains('Оформить заказ').click();
    cy.url().should('eq', 'http://localhost:3000/login');
  }); 

  it('Оформление заказа с авторизацией', function () {
    // у тебя есть before но он отрабатывает перед всеми тестами а не каждым
    // есть beforeEach который перед каждым отрабатывает. Либо как я в начале теста можно
    cy.visit('http://localhost:3000/login');
    cy.get('[class^=input__container]').first().get('[class^=input__icon]').first().click();
    cy.get('input[name="email"]').type('ursmu.prog@gmail.com');
    cy.get('input[name="password"]').type('12345');
    cy.get('button').contains('Войти').click();
    cy.wait(1000)
    // после атворизации попадаешь в /profile нужно вернуться на главную
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Оформить заказ').click();
    // класс модалки называется с большой буквы
    cy.get('[class^=Modal_ModalContent__]').as('modal').should('exist');
    // Тексты не совпадали с тем что у тебя
    cy.contains('Ваш заказ начали оформлять');
    cy.contains('Дождитесь готовоности на орбитальной станции');
  });

  it('Закрытие модального окна', function () {
    cy.get('[class^=Modal_CloseButton__]').click();
    cy.get('[class^=modal-root]').should('not.exist');
  });

})