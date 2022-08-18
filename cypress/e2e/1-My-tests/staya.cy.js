
describe('Тестирование staya', function () {

    it('Авторизовываюсь и ищу совпадение с названием Мои заказы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('slavaflak88@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('slavaflak');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы')

    })
})
