Feature('cadastro');

Scenario('realizar cadastro', ({ I }) => {
   
    I.amOnPage('https://www.americanas.com.br');
    I.click('olá, faça seu login ou cadastre-se')
    I.click('cadastrar')
    I.click('Nome completo')
    I.fillField('Nome completo', 'MARIA LUIZA DA SILVA')
    I.click('Feminino')
    I.click('//*[@type="tel"]')
    I.fillField('//*[@type="tel"]', ('22032000'))
    I.click('//*[@name="cpf"]')
    I.fillField('//*[@name="cpf"]', ('99853739011'))
    I.click('//*[@name="phone"]')
    I.fillField('//*[@name="phone"]', ('11988998899'))
    I.click('//*[@name="email"]')
    I.fillField('//*[@name="email"]', 'testeluiza@gmail.com')
    I.click('//*[@name="password"]')
    I.fillField('//*[@name="password"]', ('105567432'))
    I.click('//*[@type="submit"]')

}).tag('sucesso')

Scenario('realizar cadastro com cpf invalido', ({ I }) => {

    I.amOnPage('https://www.americanas.com.br');
    I.click('olá, faça seu login ou cadastre-se')
    I.click('cadastrar')
    I.click('Nome completo')
    I.fillField('Nome completo', 'MARIA LUIZA DA SILVA')
    I.click('Feminino')
    I.click('//*[@type="tel"]')
    I.fillField('//*[@type="tel"]', ('22032000'))
    I.click('//*[@name="cpf"]')
    I.fillField('//*[@name="cpf"]', ('11111111111'))
    I.click('//*[@name="phone"]')
    I.fillField('//*[@name="phone"]', ('11988998899'))
    I.click('//*[@name="email"]')
    I.fillField('//*[@name="email"]', 'testeluiza@gmail.com')
    I.click('//*[@name="password"]')
    I.fillField('//*[@name="password"]', ('105567432'))
    I.click('//*[@type="submit"]')

}).tag('cpf invalido')

Scenario('realizar cadastro sem data de nascimento', ({ I }) => {

    I.amOnPage('https://www.americanas.com.br');
    I.click('olá, faça seu login ou cadastre-se')
    I.click('cadastrar')
    I.click('Nome completo')
    I.fillField('Nome completo', 'MARIA LUIZA DA SILVA')
    I.click('Feminino')
    I.click('//*[@name="cpf"]')
    I.fillField('//*[@name="cpf"]', ('11111111111'))
    I.click('//*[@name="phone"]')
    I.fillField('//*[@name="phone"]', ('11988998899'))
    I.click('//*[@name="email"]')
    I.fillField('//*[@name="email"]', 'testeluiza@gmail.com')
    I.click('//*[@name="password"]')
    I.fillField('//*[@name="password"]', ('105567432'))
    I.click('//*[@type="submit"]')

}).tag('sem data de nascimento')








