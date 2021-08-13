import {render, screen, cleanup} from '@testing-library/react'
import Todo from "../todo";


afterEach(() => {
    cleanup();
});


test('should render todo component', ()=> {
    const todo = {id:1, title: "bring grocery" ,  status:false}
    render(<Todo todo = {todo} />);
    const todoElement = screen.getByTestId('todo-1');
    // expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('bring grocery');
})
test('should render compleated todo ', () => {
    const todo = {id : 2, title: "Wash Dishes", status: true };
    render(<Todo todo = {todo} />);
    const todoElement = screen.getByTestId('todo-2');
    // expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Wash Dishes');
})