
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import fs from 'fs';


describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});


const dom = new JSDOM(fs.readFileSync('./src/index.html', 'utf-8'));

describe('index.html', () => {
    it('should say hello', () => {
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).eql('Hello');
    });
});