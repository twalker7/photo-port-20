import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', ()=>{
    //renders About test using it() function 
    it('renders', ()=>{
        render(<Nav/>);
    });

    it('matches snapshot', ()=>{
        const {asFragment} = render(<Nav/>);
        expect(asFragment()).toMatchSnapshot();
    });

});

//test for emoji visibility --optional separation of tests for organization
// the describe funcction is not absolutely necessary for the test to run, it is just a container for organization
describe('emoji is visible',()=>{

    it('inserts emoji into the h2', ()=>{
        //arrange
        const {getByLabelText} = render(<Nav/>);
        //assert 
        // custom matcher .toHaveTextContent
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
}) 

   //test for link visibility 

describe('links are visible', ()=>{
        it('inserts text into the links', ()=>{
            //Arrange
            const {getByTestId} = render(<Nav/>);
            //Assert
            expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
            expect(getByTestId('about')).toHaveTextContent('About me');
        });
});