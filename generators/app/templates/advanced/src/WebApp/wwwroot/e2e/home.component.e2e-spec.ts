describe('AppComponent', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        let subject = browser.getTitle();
        expect(subject).toEqual('Home Page - <%= appName %>');
    });

    it('should have header', () => {
        let subject = element(by.css('h1')).isPresent();
        expect(subject).toEqual(true);
    });
});
