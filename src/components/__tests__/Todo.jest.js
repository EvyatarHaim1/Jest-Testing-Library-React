import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../Todo';

test('Should render Todo component', () => {
    render(<Todo />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
})