const { registerUser } = require('../controllers/userController');
const User = require('../models/usermodel');

test('should register a new user successfully', async () => {
    const req = {
        body: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password123',
            key: process.env.SECURITY_KEY,
        },
    };

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    await registerUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
        _id: expect.any(String),
        name: 'John Doe',
        email: 'johndoe@example.com',
    });
});



test('should throw error if user already exists during registration', async () => {
    jest.spyOn(User, 'findOne').mockResolvedValueOnce({ email: 'johndoe@example.com' });

    const req = {
        body: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password123',
            key: process.env.SECURITY_KEY,
        },
    };

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    await expect(registerUser(req, res)).rejects.toThrow('User Already Exists');
    expect(res.status).toHaveBeenCalledWith(400);
});


test('should throw error if security key does not match during registration', async () => {
    const req = {
        body: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password123',
            key: 'wrong_security_key',
        },
    };

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    await expect(registerUser(req, res)).rejects.toThrow('Security Key Mismatch');
    expect(res.status).toHaveBeenCalledWith(400);
});