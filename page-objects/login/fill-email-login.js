module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillEmailLogin: by.xpath("/html[1]/body[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/input[1]")
    },

    perform: function () {

        var selector = page.login.fillEmailLogin.elements.fillEmailLogin;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};