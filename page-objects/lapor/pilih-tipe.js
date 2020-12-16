module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        pilihTipe: by.xpath("/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/label[1]")
    },

    perform: function () {

        var selector = page.lapor.fillTitle.elements.fillTitle;
        return driver.findElement(selector).click();
    }
};