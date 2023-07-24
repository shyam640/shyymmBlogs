const { loginUser } = require('../controllers/userController');
const User = require('../models/usermodel');

test('should login a user successfully', async () => {
    const mockMatchPassword = jest.fn().mockResolvedValue(true);
    jest.spyOn(User, 'findOne').mockResolvedValueOnce({
        id: 'user_id',
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'hashed_password',
        matchPassword: mockMatchPassword,
    });

    const req = {
        body: {
            email: 'johndoe@example.com',
            password: 'password123',
        },
    };

    const res = {
        json: jest.fn(),
    };

    await loginUser(req, res);

    expect(res.json).toHaveBeenCalledWith({
        _id: 'user_id',
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'hashed_password',
    });
});


test('should handle invalid credentials during login', async () => {
    const mockMatchPassword = jest.fn().mockResolvedValue(false);
    jest.spyOn(User, 'findOne').mockResolvedValueOnce({
        matchPassword: mockMatchPassword,
    });

    const req = {
        body: {
            email: 'johndoe@example.com',
            password: 'wrong_password',
        },
    };

    const res = {
        json: jest.fn(),
    };

    loginUser(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Credentials' });
});
