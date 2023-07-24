import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// describe('App component', () => {
test('renders Home page when URL is "/"', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    const homeElement = screen.getByText(/Welcome to My Portfolio/i);
    expect(homeElement).toBeInTheDocument();
});

test('renders About page when URL is "/about"', () => {
    render(
        <MemoryRouter initialEntries={['/about']}>
            <App />
        </MemoryRouter>
    );
    const aboutElement = screen.getByText(/About/i);
    expect(aboutElement).toBeInTheDocument();
});

test('renders CodingProfile page when URL is "/coding-profile"', () => {
    render(
        <MemoryRouter initialEntries={['/coding-profile']}>
            <App />
        </MemoryRouter>
    );
    const codingProfileElement = screen.getByText(/Coding Profile/i);
    expect(codingProfileElement).toBeInTheDocument();
});

test('renders Project page when URL is "/project"', () => {
    render(
        <MemoryRouter initialEntries={['/project']}>
            <App />
        </MemoryRouter>
    );
    const projectElement = screen.getByText(/Project/i);
    expect(projectElement).toBeInTheDocument();
});

test('renders Contact page when URL is "/contact"', () => {
    render(
        <MemoryRouter initialEntries={['/contact']}>
            <App />
        </MemoryRouter>
    );
    const contactElement = screen.getByText(/Contact Me/i);
    expect(contactElement).toBeInTheDocument();
});

test('renders Auth page when URL is "/auth"', () => {
    render(
        <MemoryRouter initialEntries={['/auth']}>
            <App />
        </MemoryRouter>
    );
    const authElement = screen.getByText(/Auth Page/i);
    expect(authElement).toBeInTheDocument();
});

test('renders Upload page when URL is "/admin/upload"', () => {
    render(
        <MemoryRouter initialEntries={['/admin/upload']}>
            <App />
        </MemoryRouter>
    );
    const uploadElement = screen.getByText(/Upload Page/i);
    expect(uploadElement).toBeInTheDocument();
});

test('renders BlogIndex page when URL is "/blog"', () => {
    render(
        <MemoryRouter initialEntries={['/blog']}>
            <App />
        </MemoryRouter>
    );
    const blogIndexElement = screen.getByText(/Blog Index/i);
    expect(blogIndexElement).toBeInTheDocument();
});

test('renders BlogDetail page when URL is "/blog/:blog_path"', () => {
    render(
        <MemoryRouter initialEntries={['/blog/blog-post']}>
            <App />
        </MemoryRouter>
    );
    const blogDetailElement = screen.getByText(/Blog Post Details/i);
    expect(blogDetailElement).toBeInTheDocument();
});

test('renders NotFound page when URL is "/404"', () => {
    render(
        <MemoryRouter initialEntries={['/404']}>
            <App />
        </MemoryRouter>
    );
    const notFoundElement = screen.getByText(/404 Not Found/i);
    expect(notFoundElement).toBeInTheDocument();
});

test('redirects to NotFound page when URL is invalid', () => {
    render(
        <MemoryRouter initialEntries={['/invalid-url']}>
            <App />
        </MemoryRouter>
    );
    const notFoundElement = screen.getByText(/404 Not Found/i);
    expect(notFoundElement).toBeInTheDocument();
});

    // more tests for other routes as needed
// });
